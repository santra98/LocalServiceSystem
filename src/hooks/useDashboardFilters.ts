import { useMemo } from "react";

interface FilterOptions<T> {
  data: T[];
  searchTerm: string;
  statusFilter: string;
  sortOrder: "newest" | "oldest";
  getSearchText: (item: T) => string;
  getStatus: (item: T) => string;
  getDate: (item: T) => string;
}

export const useDashboardFilters = <T>({
  data,
  searchTerm,
  statusFilter,
  sortOrder,
  getSearchText,
  getStatus,
  getDate,
}: FilterOptions<T>) => {
  return useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = data.filter((item) => {
      const matchesSearch =
        !normalizedSearch ||
        getSearchText(item).toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "all" || getStatus(item) === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return filtered.sort((a, b) => {
      const firstDate = new Date(getDate(a)).getTime();
      const secondDate = new Date(getDate(b)).getTime();

      return sortOrder === "newest"
        ? secondDate - firstDate
        : firstDate - secondDate;
    });
  }, [data, searchTerm, statusFilter, sortOrder]);
};
