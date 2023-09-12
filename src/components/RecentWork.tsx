import cn from "@/utils/cn";
import P1 from "./ui/P1";
import { lora } from "@/utils/fonts";
import Stack from "./ui/Stack";

export default function RecentWork() {
  return (
    <Stack className="sm:pt-14 px-4 ">
      <P1 className={cn(lora.className, "text-neutral-500 text-lg")}>
        Recently, I've been getting comfortable with <strong>Typescript</strong>{" "}
        and <strong>Next.js 13</strong>, especially when it comes to mastering
        the <strong>App Router</strong>.<br></br>
        <br></br>
        I've also been diving into <strong>AI</strong> , and I'm eager to
        explore its incredible potential for web development even further.
      </P1>
    </Stack>
  );
}
