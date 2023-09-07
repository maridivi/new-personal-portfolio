import cn from "@/utils/cn";

export type CardProps = {
  children?: React.ReactNode;
  className?: string;
  center?: boolean;
  title?: string;
};

export default function Card(props: CardProps) {
  const { children, className, center, title } = props;

  return (
    <div
      className={cn(
        "min-w-full rounded-lg overflow-hidden p-5",
        "bg-neutral-100 hover:bg-neutral-200 dark:bg-gray-750 dark:border dark:border-[rgba(255,255,255,0.08)]",

        className
      )}
    >
      <div
        className={cn(
          "w-full h-full flex gap-6",
          center ? "justify-center" : "justify-start"
        )}
      >
        {children}
      </div>
    </div>
  );
}
