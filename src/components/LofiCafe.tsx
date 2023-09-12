import ProjectCard from "./ui/ProjectCard";

export default function LofiCafe() {
  return (
    <ProjectCard
      title="lofi.cafe"
      description={
        <>
          A website to listen to a selection of live lofi stations from YouTube,
          in a beautiful online player. I made it together with{" "}
          <a
            href="https://www.fabrizio.so/"
            className="text-violet-500"
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
