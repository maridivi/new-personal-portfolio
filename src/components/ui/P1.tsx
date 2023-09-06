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
        "text-base font-extralight max-w-full",
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
