import cn from "@/utils/cn";

export default function P1({
  children,
  center,
  noWrap,
  bold,
  className,
  ...props
}: {
  children?: React.ReactNode;
  center?: boolean;
  noWrap?: boolean;
  bold?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-lg font-light max-w-full text-neutral-700 tracking-wide",

        noWrap && "truncate",
        bold && "font-bold",
        center && "text-center",

        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
