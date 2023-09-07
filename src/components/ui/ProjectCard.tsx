import { RxExternalLink } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import Card from "./Card";
import H3 from "./H3";
import P1 from "./P1";
import Stack from "./Stack";
import Image from "next/image";

import Button from "./Button";

export type ProjectCardProps = {
  title?: string;
  description?: string;
  alt: string;
  src: string;
  repo?: string;
  projectLink: string;
  techList?: string[];
};

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, alt, src, repo, projectLink, techList } = props;
  return (
    <Card>
      <Stack vertical className=" items-stretch justify-evenly h-full">
        <H3 className="font-mono uppercase tracking-wider">{title}</H3>
        <P1>{description}</P1>
        <Stack>
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="hover-animation"
          >
            <Button tooltipContent="View project">
              <RxExternalLink size={24} />
            </Button>
          </a>
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="hover-animation"
            >
              <Button tooltipContent="View repo">
                <AiFillGithub size={24} />
              </Button>
            </a>
          )}
        </Stack>
        <Stack>
          {techList &&
            techList.map((item, key) => {
              return (
                <span
                  className="bg-neutral-300 text-neutral-600 py-1 px-2 rounded text-sm shrink-0 basis-22"
                  key={key}
                >
                  {item}
                </span>
              );
            })}
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
