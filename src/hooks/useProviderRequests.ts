import { useCallback, useMemo, useState } from "react";
import { providerRequests as mockProviderRequests } from "../data/providerDashboard";
import type {
  ProviderBookingRequest,
  ProviderRequestStatus,
} from "../types/providerDashboard";
import { bookingService } from "../services/bookingService";
import { mapPlatformBookingToProviderRequest } from "../utils/mapPlatformBookingToProviderRequest";

export const useProviderRequests = () => {
  const [platformBookings, setPlatformBookings] = useState(
    bookingService.getAll(),
  );

  const [demoRequests, setDemoRequests] =
    useState<ProviderBookingRequest[]>(mockProviderRequests);

  const storedProviderRequests = useMemo(() => {
    return platformBookings.map(mapPlatformBookingToProviderRequest);
  }, [platformBookings]);

  const allProviderRequests = useMemo(() => {
    return [...storedProviderRequests, ...demoRequests];
  }, [storedProviderRequests, demoRequests]);

  const updateRequestStatus = useCallback(
    (request: ProviderBookingRequest, status: ProviderRequestStatus) => {
      const existsInPlatform = platformBookings.some(
        (item) => item.id === request.id,
      );

      if (existsInPlatform) {
        const updatedBookings = bookingService.updateStatus(request.id, status);
        setPlatformBookings(updatedBookings);
        return;
      }

      setDemoRequests((prev) =>
        prev.map((item) =>
          item.id === request.id ? { ...item, status } : item,
        ),
      );
    },
    [platformBookings],
  );

  const refreshRequests = useCallback(() => {
    setPlatformBookings(bookingService.getAll());
  }, []);

  return {
    allProviderRequests,
    updateRequestStatus,
    refreshRequests,
  };
};
