import ProjectCard from "./ui/ProjectCard";

export default function Pomozone() {
  return (
    <ProjectCard
      className="bg-blue-50 hover:bg-blue-100 delay-150"
      projectLink="https://www.pomozone.app/"
      repo="https://github.com/maridivi/pomodoro-timer"
      title="pomozone"
      description="A timer based on the Pomodoro technique to boost focus and productivity. "
      alt="pomozone"
      src="/images/timer.jpg"
      techList={["React", "Tailwind"]}
    />
  );
}
