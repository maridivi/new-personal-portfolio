import ProjectCard from "./ui/ProjectCard";

export default function MyFaves() {
  return (
    <ProjectCard
      className="bg-green-50 hover:bg-green-100 delay-250 col-span-1"
      repo="https://github.com/marianna-alina/favorites"
      projectLink="https://myfaves.netlify.app/"
      alt="myfaves"
      src="/images/myfaves.png"
      title="myfaves"
      description="A React app to manage different favourite things organised in categories."
      techList={["React", "Tailwind"]}
    />
  );
}
