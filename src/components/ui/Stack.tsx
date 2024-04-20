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
    <div className={cn("flex", vertical && "flex-col", className)}>
      {children}
    </div>
  );
}
