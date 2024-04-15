import { RxExternalLink } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import Card from "./Card";
import P1 from "./P1";
import Stack from "./Stack";
import Image from "next/image";
import ButtonA from "./ButtonA";
import H2 from "./H2";

import cn from "@/utils/cn";

export type ProjectCardProps = {
  title?: string;
  description?: string | React.ReactNode;
  alt: string;
  src: string;
  repo?: string;
  projectLink: string;
  techList?: string[];
  className?: string;
  imgClassName?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  const {
    title,
    description,
    alt,
    src,
    repo,
    projectLink,
    techList,
    className,
    imgClassName,
  } = props;
  return (
    <Card
      vertical
      align="center"
      className={cn(
        "group col-span-2 sm:col-span-1",
        "min-[850px]:col-span-1",
        className
      )}
    >
      <Stack vertical className="justify-stretch h-full">
        <H2 className="font-mono uppercase">{title}</H2>
        <P1 className="text-md">{description}</P1>

        <Stack className="items-center justify-between ">
          <Stack>
            <ButtonA href={projectLink} tooltipContent="View project">
              <RxExternalLink size={24} />
            </ButtonA>
            {repo && (
              <ButtonA href={repo} tooltipContent="View repo">
                <AiFillGithub size={24} />
              </ButtonA>
            )}
          </Stack>
          <Stack>
            {techList &&
              techList.map((item, key) => {
                return (
                  <span
                    className=" bg-neutral-300 text-neutral-600 py-1 px-2 rounded text-sm shrink-0 basis-22"
                    key={key}
                  >
                    {item}
                  </span>
                );
              })}
          </Stack>
        </Stack>
      </Stack>

      <div
        className={cn(
          "relative w-full max-w-full min-w-0 overflow-hidden",
          "overflow-hidden shrink-0 shadow-lg rounded-lg",
          "transition-transform group-hover:scale-105",
          imgClassName
        )}
      >
        <Image
          alt={alt}
          src={src}
          width={300}
          height={300}
          className="w-full object-cover"
          priority
        />
      </div>
    </Card>
  );
}
