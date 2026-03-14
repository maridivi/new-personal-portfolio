import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import Card from "./ui/Card";
import ButtonA from "./ui/ButtonA";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";

export default function Latest() {
  return (
    <Card className="col-span-2 delay-300">
      <Stack vertical className="justify-evenly  gap-8  ">
        <P1>
          Two years ago, I completed a full-stack web development bootcamp that
          strengthened my front-end expertise and expanded my skill set to
          include back-end technologies such as <strong>Express</strong>,{" "}
          <strong>Node.js</strong>, and <strong>MongoDB</strong>.
        </P1>
        <P1>
          Shortly after graduating, I joined{" "}
          <a href="https://rauva.com/" className="font-bold text-violet-600">
            Rauva
          </a>
          , where I began working as a developer and gaining experience
          collaborating within a development team.
        </P1>
        <P1>
          If you've got a project in mind or just want to chat, feel free to
          reach out!
        </P1>
        <Stack className="gap-3">
          <ButtonA href="https://twitter.com/maridivi89">
            <AiOutlineTwitter size={24} />
            Twitter
          </ButtonA>
          <ButtonA href="mailto:maridivi89@gmail.com?subject=Hi!">
            <AiOutlineMail size={24} />
            Email
          </ButtonA>
        </Stack>
      </Stack>
    </Card>
  );
}
