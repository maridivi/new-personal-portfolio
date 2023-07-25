import Link from "next/link";
import Stack from "./ui/Stack";

export default function Navbar() {
  return (
    <Stack gap={12} className="sticky top-0 items-center">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/notes">Notes</Link>
    </Stack>
  );
}
