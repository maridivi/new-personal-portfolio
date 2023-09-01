import cn from "@/utils/cn";

export type SectionProps = {
  children?: React.ReactNode;
  maxWidth?: number;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function Section({
  children,

  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full py-6 px-6 mx-auto overflow-hidden max-w-screen-sm bottom-0 mb-0",
        className,
        " lg:max-w-screen-lg"
      )}
    >
      {children}
    </section>
  );
}
