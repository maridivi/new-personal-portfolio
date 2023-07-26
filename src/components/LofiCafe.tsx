import Image from "next/image";
import Card from "./ui/Card";
import H3 from "./ui/H3";
import H2 from "./ui/H2";
import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import { RxExternalLink } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

export default function LofiCafe() {
  return (
    <Card title="lofi.café">
      <Stack vertical>
        <H3 className="font-mono uppercase">Lofi.cafe</H3>
        <P1>
          A website to listen to a selection of live lofi stations from YouTube,
          in a beautiful online player. Since it was my very first project, I
          made it together with Fabrizio.
        </P1>
        <RxExternalLink size={24} />
      </Stack>

      <Image
        alt="lofi-cafe"
        src="/images/lofi.png"
        width={200}
        height={100}
        className="rounded-md"
      />
    </Card>
  );
}
