import cn from "@/utils/cn";

export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  center?: boolean;
  title?: string;
  vertical?: boolean;
  align?: string;
};

export default function Card(props: CardProps) {
  const { children, className, center, vertical, align } = props;

  return (
    <div
      className={cn(
        "min-w-full rounded-[18px] overflow-hidden p-5 pb-6",
        "bg-black/[0.04] hover:bg-black/[0.08] dark:bg-gray-750 dark:border dark:border-[rgba(255,255,255,0.08)]",
        "transition-colors duration-150",
        "animate-in fade-in-0 zoom-in-[0.95] duration-150 fill-mode-both",
        className
      )}
    >
      <div
        className={cn(
          "w-full h-full flex gap-5",
          center ? "justify-center" : "justify-start",
          vertical ? "flex-col" : "flex-row",
          align ? "items-center" : ""
        )}
      >
        {children}
      </div>
    </div>
  );
}
