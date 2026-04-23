import Skeleton from "../ui/Skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 py-6">
      <section className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-80 max-w-full" />
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <article
            key={index}
            className="rounded-3xl border border-border-soft bg-surface p-5 shadow-sm"
          >
            <Skeleton className="h-4 w-28" />
            <Skeleton className="mt-4 h-8 w-20" />
          </article>
        ))}
      </section>

      <section className="space-y-5">
        <div>
          <Skeleton className="h-7 w-52" />
          <Skeleton className="mt-3 h-4 w-96 max-w-full" />
        </div>

        {Array.from({ length: 2 }).map((_, index) => (
          <article
            key={index}
            className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm"
          >
            <div className="flex flex-col gap-4">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-28" />
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-20 w-full" />
              </div>
              <Skeleton className="h-20 w-full" />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default DashboardSkeleton;
