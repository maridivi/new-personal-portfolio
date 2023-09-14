import cn from "@/utils/cn";
import P1 from "./ui/P1";
import { lora } from "@/utils/fonts";
import Stack from "./ui/Stack";
import Card from "./ui/Card";

export default function RecentWork() {
  return (
    <Card>
      <Stack className="sm:pt-14 px-4 ">
        <P1 className={cn("text-neutral-500 ")}>
          Recently, I've been getting comfortable with{" "}
          <strong>Typescript</strong> and <strong>Next.js 13</strong>,
          especially the <strong>App Router</strong>.<br></br>
          <br></br>
          I've also been diving into <strong>AI</strong> , and I'm eager to
          explore its incredible potential for web development even further.
        </P1>
      </Stack>
    </Card>
  );
}
