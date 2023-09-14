import cn from "@/utils/cn";

export default function Grid({
  children,

  className,
}: {
  children: React.ReactNode;

  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 min-[850px]:grid-cols-3  lg:grid-cols-3",
        "lg:grid-flow-row lg:auto-rows-max",
        "gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}
