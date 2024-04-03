import { AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import ButtonA from "./ui/ButtonA";
import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import Card from "./ui/Card";
import cn from "@/utils/cn";

export default function Contact() {
  return (
    <Card className="col-span-2  delay-300">
      <Stack vertical className="justify-evenly  gap-8  ">
        <P1>
          Recently, I've been getting comfortable with{" "}
          <strong>Typescript</strong> and <strong>Next.js</strong>. I've also
          been diving into <strong>AI</strong>, and I'm eager to explore its
          incredible potential for web development even further. <br></br>{" "}
          <br></br>
          Furthermore, I've recently completed a full stack web development
          bootcamp, which helped me improve my front-end expertise and also
          expanded my skill set to include back-end technologies like{" "}
          <strong>Express</strong>, <strong>Node.js</strong>, and{" "}
          <strong>MongoDB</strong>.
        </P1>
        <hr className="border border-lg"></hr>
        <Stack vertical>
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
      </Stack>
    </Card>
  );
}
