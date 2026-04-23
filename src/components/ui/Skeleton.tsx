interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => {
  return <div className={`animate-pulse rounded-xl bg-soft ${className}`} />;
};

export default Skeleton;
