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
  repo?: string;
  projectLink: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, alt, src, repo, projectLink } = props;
  return (
    <Card>
      <Stack vertical>
        <H3 className="font-mono uppercase">{title}</H3>
        <P1>{description}</P1>
        <Stack>
          <a href={projectLink}>
            <Button tooltipContent="View project">
              <RxExternalLink size={24} />
            </Button>
          </a>
          {repo && (
            <a href={repo}>
              <Button tooltipContent="View repo">
                <AiFillGithub size={24} />
              </Button>
            </a>
          )}
        </Stack>
      </Stack>

      <div className=" relative w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] overflow-hidden shrink-0 shadow-xl rounded-lg ">
        <Image
          alt={alt}
          src={src}
          // width={250}
          // height={50}
          className="shrink-0 object-cover min-h-0  "
          fill
        />
      </div>
    </Card>
  );
}
