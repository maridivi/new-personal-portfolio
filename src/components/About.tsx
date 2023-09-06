import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import ButtonA from "./ui/ButtonA";
import H1 from "./ui/H1";
import Stack from "./ui/Stack";

export default function About() {
  return (
    <Stack className="flex items-center">
      <Image
        src="/images/avatar.jpeg"
        height={75}
        width={130}
        className="rounded-full"
        alt="avatar"
      />
      <Stack vertical>
        <H1>
          Hi there! I'm <strong>Marianna</strong>, a self-taught web developer
          with a love for building nice apps and websites.
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
