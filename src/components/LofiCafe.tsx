import cn from "@/utils/cn";
import ProjectCard from "./ui/ProjectCard";

export default function LofiCafe() {
  return (
    <ProjectCard
      className="delay-200 bg-violet-50 hover:bg-violet-100 min-[850px]:col-span-2"
      imgClassName="min-[850px]:w-1/2"
      title="lofi.cafe"
      description={
        <>
          A website to listen to a selection of live lofi stations from YouTube,
          in a beautiful online player. I made it together with{" "}
          <a
            href="https://www.fabrizio.so/"
            className="text-violet-600 font-bold"
            target="_blank"
          >
            Fabrizio
          </a>
          .
        </>
      }
      alt="lofi-cafe"
      src="/images/lofi.jpg"
      projectLink="https://www.lofi.cafe/"
      techList={["React"]}
    />
  );
}
