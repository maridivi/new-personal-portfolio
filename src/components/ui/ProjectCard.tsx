import { RxExternalLink } from "react-icons/rx";
import Card from "./Card";
import H3 from "./H3";
import P1 from "./P1";
import Stack from "./Stack";
import Image from "next/image";

export type ProjectCardProps = {
  title?: string;
  description?: string;
  alt: string;
  src: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, alt, src } = props;
  return (
    <Card>
      <Stack vertical>
        <H3 className="font-mono uppercase">{title}</H3>
        <P1>{description}</P1>
        <RxExternalLink size={24} />
      </Stack>

      <Image
        alt={alt}
        src={src}
        width={250}
        height={50}
        className="rounded-md shadow-md"
      />
    </Card>
  );
}
