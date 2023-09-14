import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ButtonA from "./ui/ButtonA";
import H1 from "./ui/H1";
import Stack from "./ui/Stack";
import Card from "./ui/Card";
import P1 from "./ui/P1";
import cn from "@/utils/cn";
import { alice, lora } from "@/utils/fonts";

export default function About() {
  return (
    <Card className="col-span-2">
      <Stack vertical className="justify-evenly">
        <Stack
          vertical
          className="lg:gap-10 overflow-hidden justify-center gap-4 "
        >
          <Image
            src="/images/avatar.jpeg"
            height={75}
            width={65}
            className="rounded-full sm:w-24  lg:w-28"
            alt="avatar"
          />
          <Stack vertical>
            <P1 className={cn("text-lg ")}>
              I'm{" "}
              <span className={cn("text-2xl font-black", lora.className)}>
                Marianna
              </span>
              , a self-taught front-end web developer with a love for building
              apps & websites.
            </P1>
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
        <Stack className="items-center  py-6">
          <P1 className={cn("text-lg", "text-neutral-500")}>
            After 5 years working as a dentist, I decided to pursue my interest
            in web development and began teaching myself to code. Through online
            courses and hands-on projects, I became proficient in{" "}
            <strong>HTML, CSS, Javascript, and React</strong>.
          </P1>
        </Stack>
      </Stack>
    </Card>
  );
}
