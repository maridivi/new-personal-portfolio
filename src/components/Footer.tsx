import Link from "next/link";
import Stack from "./ui/Stack";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <Stack vertical className="items-center  max-w-xl w-full  mx-auto p-4">
      <h5 className="text-xs text-gray-500">
        © {getYear()} Created by
        <Link
          href="https://mariannadivito.com"
          target="_blank"
          className="text-violet-500"
        >
          {" "}
          Marianna Di Vito
        </Link>
      </h5>
    </Stack>
  );
}
