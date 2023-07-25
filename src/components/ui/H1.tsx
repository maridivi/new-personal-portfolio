import cn from "@/utils/cn";
import { lora } from "@/utils/fonts";

export default function H1({
  children,
  center,
  noWrap,

  className,
}: {
  children: React.ReactNode;
  center?: boolean;
  noWrap?: boolean;

  className?: string;
}) {
  return (
    <h1
      className={cn(
        "text-2xl select-none",
        "text-neutral-500",
        lora.className,
        noWrap && "truncate",
        center && "text-center",
        className
      )}
    >
      {children}
    </h1>
  );
}
