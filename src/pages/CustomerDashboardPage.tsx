import { useCallback, useEffect, useMemo, useState } from "react";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import CustomerBookingDetailsModal from "../components/dashboard/CustomerBookingDetailsModal";
import CustomerBookingsSection from "../components/dashboard/CustomerBookingsSection";
import CustomerProfileCard from "../components/dashboard/CustomerProfileCard";
import CustomerStats from "../components/dashboard/CustomerStats";
import DashboardToolbar from "../components/dashboard/DashboardToolbar";
import type { CustomerBooking } from "../types/customerBooking";
import { useNotifications } from "../context/NotificationsContext";
import { useCustomerBookings } from "../hooks/useCustomerBookings";
import { useDashboardFilters } from "../hooks/useDashboardFilters";
import CustomerDashboardSkeleton from "../components/dashboard/CustomerDashboardSkeleton";
import { useDebounce } from "../hooks/useDebounce";

const CustomerDashboardPage = () => {
  const { notify } = useNotifications();
  const { allBookings, cancelBooking } = useCustomerBookings();

  const [bookingToCancel, setBookingToCancel] =
    useState<CustomerBooking | null>(null);

  const [selectedBooking, setSelectedBooking] =
    useState<CustomerBooking | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [isLoading, setIsLoading] = useState(true);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // simulate API delay

    return () => clearTimeout(timer);
  }, []);

  const filteredBookings = useDashboardFilters({
    data: allBookings,
    searchTerm: debouncedSearchTerm,
    statusFilter,
    sortOrder,
    getSearchText: (b) =>
      `${b.providerName} ${b.service} ${b.category} ${b.address}`,
    getStatus: (b) => b.status,
    getDate: (b) => b.date,
  });

  const confirmCancelBooking = useCallback(() => {
    if (!bookingToCancel) return;

    cancelBooking(bookingToCancel);

    notify({
      title: "Booking cancelled",
      message: `${bookingToCancel.service} booking with ${bookingToCancel.providerName} has been cancelled.`,
      type: "alert",
      toastType: "info",
    });

    setBookingToCancel(null);
  }, [bookingToCancel, cancelBooking, notify]);

  const activeBookings = filteredBookings.filter(
    (booking) => booking.status === "pending" || booking.status === "confirmed",
  );

  const completedBookings = filteredBookings.filter(
    (booking) => booking.status === "completed",
  );

  const cancelledBookings = filteredBookings.filter(
    (booking) => booking.status === "cancelled",
  );

  if (isLoading) {
    return (
      <div className="px-4 py-6">
        <CustomerDashboardSkeleton />
      </div>
    );
  }

  const handleOpenCancelDialog = useCallback((booking: CustomerBooking) => {
    setBookingToCancel(booking);
  }, []);

  const handleViewDetails = useCallback((booking: CustomerBooking) => {
    setSelectedBooking(booking);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedBooking(null);
  }, []);

  const handleCloseCancelDialog = useCallback(() => {
    setBookingToCancel(null);
  }, []);

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
          resultCount={filteredBookings.length}
          totalCount={allBookings.length}
          onReset={() => {
            setSearchTerm("");
            setStatusFilter("all");
            setSortOrder("newest");
          }}
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
          title="Active bookings"
          description="Track service requests that are pending or already confirmed."
          bookings={activeBookings}
          emptyMessage="No active bookings match your current search or filter."
          onCancel={handleOpenCancelDialog}
          onViewDetails={handleViewDetails}
        />

        <CustomerBookingsSection
          title="Completed bookings"
          description="Review services that were successfully completed."
          bookings={completedBookings}
          emptyMessage="No completed bookings match your current search or filter."
          onViewDetails={handleViewDetails}
        />

        <CustomerBookingsSection
          title="Cancelled bookings"
          description="Review bookings that were cancelled before completion."
          bookings={cancelledBookings}
          emptyMessage="No cancelled bookings match your current search or filter."
          onViewDetails={handleViewDetails}
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
        onCancel={handleCloseCancelDialog}
      />

      <CustomerBookingDetailsModal
        booking={selectedBooking}
        isOpen={!!selectedBooking}
        onClose={handleCloseDetails}
      />
    </>
  );
};

export default CustomerDashboardPage;
