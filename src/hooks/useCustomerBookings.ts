import { useMemo, useState } from "react";
import { customerBookings as mockCustomerBookings } from "../data/customerBookings";
import type { CustomerBooking } from "../types/customerBooking";
import { bookingService } from "../services/bookingService";
import { mapPlatformBookingToCustomerBooking } from "../utils/mapPlatformBookingToCustomerBooking";

export const useCustomerBookings = () => {
  const [platformBookings, setPlatformBookings] = useState(
    bookingService.getAll(),
  );

  const [demoBookings, setDemoBookings] =
    useState<CustomerBooking[]>(mockCustomerBookings);

  const storedCustomerBookings = useMemo(() => {
    return platformBookings.map(mapPlatformBookingToCustomerBooking);
  }, [platformBookings]);

  const allBookings = useMemo(() => {
    return [...storedCustomerBookings, ...demoBookings];
  }, [storedCustomerBookings, demoBookings]);

  const cancelBooking = (booking: CustomerBooking) => {
    const existsInPlatform = platformBookings.some(
      (item) => item.id === booking.id,
    );

    if (existsInPlatform) {
      const updatedBookings = bookingService.updateStatus(
        booking.id,
        "cancelled",
      );

      setPlatformBookings(updatedBookings);
      return;
    }

    setDemoBookings((prev) =>
      prev.map((item) =>
        item.id === booking.id
          ? {
              ...item,
              status: "cancelled",
            }
          : item,
      ),
    );
  };

  const refreshBookings = () => {
    setPlatformBookings(bookingService.getAll());
  };

  return {
    allBookings,
    cancelBooking,
    refreshBookings,
  };
};
