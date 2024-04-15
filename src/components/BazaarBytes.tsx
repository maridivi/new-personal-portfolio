import ProjectCard from "./ui/ProjectCard";

export default function BazaarBytes() {
  return (
    <ProjectCard
      className="bg-indigo-50 hover:bg-indigo-100 delay-100"
      repo="https://github.com/bazaar-bytes/bazaar-bytes-frontend"
      projectLink="https://bazaar-bytes.netlify.app/"
      alt="bazaar-bytes"
      src="/images/bazaar-bytes.png"
      title="bazaar bytes"
      description="A marketplace website to sell and/or buy products."
      techList={["React", "Node", "MongoDB"]}
    />
  );
}
