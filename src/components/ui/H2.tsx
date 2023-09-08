import cn from "@/utils/cn";

export default function H2({
  children,
  center,
  noWrap,

  className,
}: {
  children: React.ReactNode;
  center?: boolean;
  noWrap?: boolean;

  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) {
  return (
    <h2
      className={cn(
        "text-md",
        "tracking-wide",
        noWrap && "truncate",
        center && "text-center",
        className
      )}
    >
      {children}
    </h2>
  );
}
