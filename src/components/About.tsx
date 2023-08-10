import Image from "next/image";
import H1 from "./ui/H1";
import Stack from "./ui/Stack";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import CustomLink from "./ui/CustomLink";

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
          <CustomLink href="">
            <AiOutlineTwitter size={24} />
            Twitter
          </CustomLink>
          <CustomLink href="">
            <AiFillGithub size={24} />
            Github
          </CustomLink>
          <CustomLink href="">
            <AiFillLinkedin size={24} />
            Linkedin
          </CustomLink>
        </Stack>
      </Stack>
    </Stack>
  );
}
