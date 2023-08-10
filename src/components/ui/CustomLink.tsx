import Link from "next/link";
import Button from "./Button";

export default function CustomLink({
  children,
  href,
  tooltipContent,
}: {
  children: React.ReactNode;
  href: string;
  tooltipContent?: string;
}) {
  return (
    <Link href={href}>
      <Button tooltipContent={tooltipContent}>{children}</Button>
    </Link>
  );
}
