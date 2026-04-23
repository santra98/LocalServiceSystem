import type {
  ProviderBookingRequest,
  ProviderRequestStatus,
} from "../types/providerDashboard";

const PROVIDER_REQUESTS_STORAGE_KEY = "localserve-provider-requests";

export const getStoredProviderRequests = (): ProviderBookingRequest[] => {
  const savedRequests = localStorage.getItem(PROVIDER_REQUESTS_STORAGE_KEY);

  if (!savedRequests) return [];

  try {
    return JSON.parse(savedRequests) as ProviderBookingRequest[];
  } catch {
    localStorage.removeItem(PROVIDER_REQUESTS_STORAGE_KEY);
    return [];
  }
};

export const saveStoredProviderRequests = (
  requests: ProviderBookingRequest[],
): void => {
  localStorage.setItem(PROVIDER_REQUESTS_STORAGE_KEY, JSON.stringify(requests));
};

export const addProviderRequest = (request: ProviderBookingRequest): void => {
  const existingRequests = getStoredProviderRequests();
  const updatedRequests = [request, ...existingRequests];
  saveStoredProviderRequests(updatedRequests);
};

export const updateStoredProviderRequestStatus = ({
  id,
  status,
}: {
  id: string;
  status: ProviderRequestStatus;
}): void => {
  const existingRequests = getStoredProviderRequests();

  const updatedRequests = existingRequests.map((request) => {
    if (request.id !== id) return request;

    return {
      ...request,
      status,
    };
  });

  saveStoredProviderRequests(updatedRequests);
};

export const clearStoredProviderRequests = (): void => {
  localStorage.removeItem(PROVIDER_REQUESTS_STORAGE_KEY);
};
