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
        "grid grid-cols-1",
        "lg:grid-flow-row lg:auto-rows-max",
        className
      )}
    >
      {children}
    </div>
  );
}
