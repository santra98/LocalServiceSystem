import Skeleton from "../ui/Skeleton";

const CustomerDashboardSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-24 w-full rounded-3xl" />

      <div className="grid gap-4 sm:grid-cols-3">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>

      <Skeleton className="h-16 w-full" />

      <div className="space-y-4">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
};

export default CustomerDashboardSkeleton;
