import { RxExternalLink } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import Card from "./Card";
import H3 from "./H3";
import P1 from "./P1";
import Stack from "./Stack";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export type ProjectCardProps = {
  title?: string;
  description?: string;
  alt: string;
  src: string;
  repo?: boolean;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, alt, src, repo } = props;
  return (
    <Card>
      <Stack vertical>
        <H3 className="font-mono uppercase">{title}</H3>
        <P1>{description}</P1>
        <Stack>
          <Link href="">
            <Button tooltipContent="View project">
              <RxExternalLink size={24} />
            </Button>
          </Link>
          {repo && (
            <Link href="">
              <Button tooltipContent="View repo">
                <AiFillGithub size={24} />
              </Button>
            </Link>
          )}
        </Stack>
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
