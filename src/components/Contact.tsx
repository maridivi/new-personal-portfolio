import { AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import ButtonA from "./ui/ButtonA";
import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import Card from "./ui/Card";

export default function Contact() {
  return (
    <Card>
      <Stack vertical className="items-center">
        <P1>
          If you've got a project in mind or just want to chat, feel free to
          reach out!
        </P1>
        <Stack>
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
