import cn from "@/utils/cn";

import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import { lora } from "@/utils/fonts";

export default function Bio() {
  return (
    <Stack className="items-center px-5 py-6">
      <P1 className={cn(lora.className, "text-lg", "text-neutral-500")}>
        After 5 years working as a dentist, I decided to pursue my interest in
        web development and began teaching myself to code.
        <br></br>
        Through online courses and hands-on projects, I became comfortable with{" "}
        <strong>HTML, CSS, Javascript, and React</strong>.
      </P1>
    </Stack>
  );
}
