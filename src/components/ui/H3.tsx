import cn from "@/utils/cn";

export default function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-neutral-500 text-xs", className)}>{children}</h3>
  );
}
