import cn from "@/utils/cn";

export type StackProps = {
  children?: React.ReactNode;
  vertical?: boolean;
  gap?: number;

  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Stack({
  children,
  vertical,

  className,
}: StackProps) {
  return (
    <div className={cn("flex gap-3", vertical && "flex-col", className)}>
      {children}
    </div>
  );
}
