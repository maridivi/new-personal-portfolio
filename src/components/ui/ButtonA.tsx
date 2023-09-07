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
    <a href={href} target="_blank" rel="noreferrer" className="hover-animation">
      <Button tooltipContent={tooltipContent}>{children}</Button>
    </a>
  );
}
