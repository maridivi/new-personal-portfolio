import Button from "./Button";

export default function ButtonA({
  children,
  href,
  tooltipContent,
}: {
  children: React.ReactNode;
  href: string;
  tooltipContent?: string;
}) {
  return (
    <a href={href}>
      <Button tooltipContent={tooltipContent}>{children}</Button>
    </a>
  );
}
