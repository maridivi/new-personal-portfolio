import Link from "next/link";
import Stack from "./ui/Stack";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <div className="flex justify-center max-w-xl w-full mx-auto bottom-0 min-h-0 overflow-hidden">
      <h5 className="text-xs text-gray-500">
        © {getYear()} Created by
        <a
          href="https://mariannadivito.com"
          target="_blank"
          className="text-violet-500"
        >
          {" "}
          Marianna Di Vito
        </a>
      </h5>
    </div>
  );
}
