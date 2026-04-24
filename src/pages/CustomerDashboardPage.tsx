import { useMemo, useState } from "react";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import CustomerBookingDetailsModal from "../components/dashboard/CustomerBookingDetailsModal";
import CustomerBookingsSection from "../components/dashboard/CustomerBookingsSection";
import CustomerProfileCard from "../components/dashboard/CustomerProfileCard";
import CustomerStats from "../components/dashboard/CustomerStats";
import DashboardToolbar from "../components/dashboard/DashboardToolbar";
import { customerBookings as mockCustomerBookings } from "../data/customerBookings";
import type { CustomerBooking } from "../types/customerBooking";
import { useToast } from "../context/ToastContext";
import { mapPlatformBookingToCustomerBooking } from "../utils/mapPlatformBookingToCustomerBooking";

import { useNotifications } from "../context/NotificationsContext";
import { bookingService } from "../services/bookingService";

const CustomerDashboardPage = () => {
  const { notify } = useNotifications();
  const [platformBookings, setPlatformBookings] = useState(
    bookingService.getAll(),
  );
  const [bookingToCancel, setBookingToCancel] =
    useState<CustomerBooking | null>(null);
  const [selectedBooking, setSelectedBooking] =
    useState<CustomerBooking | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  const derivedStoredBookings = useMemo(() => {
    return platformBookings.map(mapPlatformBookingToCustomerBooking);
  }, [platformBookings]);

  const allBookings = useMemo(() => {
    return [...derivedStoredBookings, ...mockCustomerBookings];
  }, [derivedStoredBookings]);

  const filteredBookings = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = allBookings.filter((booking) => {
      const matchesSearch =
        !normalizedSearch ||
        booking.providerName.toLowerCase().includes(normalizedSearch) ||
        booking.service.toLowerCase().includes(normalizedSearch) ||
        booking.category.toLowerCase().includes(normalizedSearch) ||
        booking.address.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "all" || booking.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return filtered.sort((a, b) => {
      const firstDate = new Date(a.date).getTime();
      const secondDate = new Date(b.date).getTime();

      return sortOrder === "newest"
        ? secondDate - firstDate
        : firstDate - secondDate;
    });
  }, [allBookings, searchTerm, statusFilter, sortOrder]);

  const confirmCancelBooking = () => {
    if (!bookingToCancel) return;

    const updatedBookings = bookingService.updateStatus(
      bookingToCancel.id,
      "cancelled",
    );

    setPlatformBookings(updatedBookings);

    notify({
      title: "Booking cancelled",
      message: `${bookingToCancel.service} booking with ${bookingToCancel.providerName} has been cancelled.`,
      type: "alert",
      toastType: "info",
    });
    setBookingToCancel(null);
  };

  const upcomingBookings = filteredBookings.filter(
    (booking) => booking.status === "pending" || booking.status === "confirmed",
  );

  const pastBookings = filteredBookings.filter(
    (booking) =>
      booking.status === "completed" || booking.status === "cancelled",
  );

  return (
    <>
      <div className="space-y-8 py-6">
        <CustomerProfileCard />

        <CustomerStats bookings={allBookings} />

        <DashboardToolbar
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          statusValue={statusFilter}
          onStatusChange={setStatusFilter}
          sortValue={sortOrder}
          onSortChange={setSortOrder}
          searchPlaceholder="Search by provider, service, category, address..."
          statusOptions={[
            { label: "All statuses", value: "all" },
            { label: "Pending", value: "pending" },
            { label: "Confirmed", value: "confirmed" },
            { label: "Completed", value: "completed" },
            { label: "Cancelled", value: "cancelled" },
          ]}
        />

        <CustomerBookingsSection
          title="Upcoming bookings"
          description="Track bookings that are pending or already confirmed."
          bookings={upcomingBookings}
          emptyMessage="No upcoming bookings match your current search or filter."
          onCancel={(booking) => setBookingToCancel(booking)}
          onViewDetails={(booking) => setSelectedBooking(booking)}
        />

        <CustomerBookingsSection
          title="Past bookings"
          description="Review completed or cancelled service requests."
          bookings={pastBookings}
          emptyMessage="No past bookings match your current search or filter."
          onViewDetails={(booking) => setSelectedBooking(booking)}
        />
      </div>

      <ConfirmDialog
        isOpen={!!bookingToCancel}
        title="Cancel booking?"
        message="This action will cancel the selected booking and update its status in the provider dashboard as well."
        confirmLabel="Yes, cancel booking"
        cancelLabel="Keep booking"
        confirmVariant="danger"
        onConfirm={confirmCancelBooking}
        onCancel={() => setBookingToCancel(null)}
      />

      <CustomerBookingDetailsModal
        booking={selectedBooking}
        isOpen={!!selectedBooking}
        onClose={() => setSelectedBooking(null)}
      />
    </>
  );
};

export default CustomerDashboardPage;
