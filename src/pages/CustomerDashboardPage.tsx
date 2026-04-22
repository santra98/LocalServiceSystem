import CustomerBookingsSection from "../components/dashboard/CustomerBookingsSection";
import CustomerProfileCard from "../components/dashboard/CustomerProfileCard";
import CustomerStats from "../components/dashboard/CustomerStats";
import { customerBookings } from "../data/customerBookings";

const CustomerDashboardPage = () => {
  const upcomingBookings = customerBookings.filter(
    (booking) => booking.status === "pending" || booking.status === "confirmed",
  );

  const pastBookings = customerBookings.filter(
    (booking) =>
      booking.status === "completed" || booking.status === "cancelled",
  );

  return (
    <div className="space-y-8 py-6">
      <CustomerProfileCard />

      <CustomerStats bookings={customerBookings} />

      <CustomerBookingsSection
        title="Upcoming bookings"
        description="Track bookings that are pending or already confirmed."
        bookings={upcomingBookings}
        emptyMessage="You do not have any upcoming bookings right now."
      />

      <CustomerBookingsSection
        title="Past bookings"
        description="Review completed or cancelled service requests."
        bookings={pastBookings}
        emptyMessage="Your completed or cancelled bookings will appear here."
      />
    </div>
  );
};

export default CustomerDashboardPage;
