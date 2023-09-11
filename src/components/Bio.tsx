import cn from "@/utils/cn";

import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import { lora } from "@/utils/fonts";
import H2 from "./ui/H2";

export default function Bio() {
  return (
    <Stack className="items-center px-4 py-6">
      <P1 className={cn(lora.className, "text-lg", "text-neutral-500")}>
        After 5 years working as a dentist, I decided to pursue my interest in
        web development and began teaching myself to code. Through online
        courses and hands-on projects, I became proficient in{" "}
        <strong>HTML, CSS, Javascript, and React</strong>.
      </P1>
    </Stack>
  );
}
