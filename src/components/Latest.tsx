import P1 from "./ui/P1";
import Stack from "./ui/Stack";
import Card from "./ui/Card";

export default function Latest() {
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
      </Stack>
    </Card>
  );
}
