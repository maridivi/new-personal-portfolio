import ProjectCard from "./ui/ProjectCard";

export default function Readingful() {
  return (
    <ProjectCard
      className="bg-orange-50 hover:bg-orange-100"
      projectLink="https://www.readingful.app/"
      title="readingful"
      alt="readingful"
      src="/images/readingful.jpg"
      description="An AI-powered website to get book suggestions based on user's preferences."
      techList={["Typescript", "Nextjs"]}
    />
  );
}
