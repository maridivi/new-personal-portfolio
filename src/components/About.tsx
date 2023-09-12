import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ButtonA from "./ui/ButtonA";
import H1 from "./ui/H1";
import Stack from "./ui/Stack";

export default function About() {
  return (
    <Stack
      vertical
      className="lg:col-span-2 lg:gap-10 md:items-center overflow-hidden md:flex-row gap-4 px-4 "
    >
      <Image
        src="/images/avatar.jpeg"
        height={75}
        width={65}
        className="rounded-full md:w-24 lg:w-48"
        alt="avatar"
      />
      <Stack vertical>
        <H1 className="lg:text-2xl ">
          I'm <strong>Marianna</strong>, a self-taught front-end web developer
          with a love for building apps & websites.
        </H1>
        <Stack>
          <ButtonA href="https://github.com/maridivi">
            <AiFillGithub size={24} />
            Github
          </ButtonA>
          <ButtonA href="https://www.linkedin.com/in/marianna-di-vito-b4178676/">
            <AiFillLinkedin size={24} />
            Linkedin
          </ButtonA>
        </Stack>
      </Stack>
    </Stack>
  );
}
