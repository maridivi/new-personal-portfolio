import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import ButtonA from "./ui/ButtonA";
import Card from "./ui/Card";
import P1 from "./ui/P1";
import Stack from "./ui/Stack";

export default function Contact() {
  return (
    <Card className="col-span-2 delay-300 min-[850px]:col-span-1">
      <Stack vertical className="items-center gap-8">
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
