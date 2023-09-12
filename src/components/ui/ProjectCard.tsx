import { RxExternalLink } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import Card from "./Card";
import P1 from "./P1";
import Stack from "./Stack";
import Image from "next/image";
import ButtonA from "./ButtonA";
import H2 from "./H2";

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
    <Card vertical align="center">
      <Stack vertical className=" items-stretch justify-evenly h-full">
        <H2 className="font-mono uppercase">{title}</H2>
        <P1>{description}</P1>

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

      <div className=" relative w-[400px] h-[270px] sm:w-[300px] sm:h-[200px] overflow-hidden shrink-0 shadow-lg rounded-lg ">
        <Image alt={alt} src={src} fill />
      </div>
    </Card>
  );
}
