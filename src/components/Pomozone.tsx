import ProjectCard from "./ui/ProjectCard";

export default function Pomozone() {
  return (
    <ProjectCard
      projectLink="https://www.pomozone.app/"
      repo="https://github.com/maridivi/pomodoro-timer"
      title="pomozone"
      description="A timer based on the Pomodoro technique to boost focus and productivity. "
      alt="pomozone"
      src="/images/timer.png"
      techList={["React", "Tailwind"]}
    />
  );
}
