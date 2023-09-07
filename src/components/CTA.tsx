import cn from "@/utils/cn";

import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import { lora } from "@/utils/fonts";

export default function CTA() {
  return (
    <Stack className="items-center px-4">
      <P1 className={cn(lora.className, "text-lg", "text-neutral-500")}>
        I am excited to continue learning and growing as a developer, and hope
        to find opportunities where I can use my skills to make a meaningful
        difference.
      </P1>
    </Stack>
  );
}
