import ProjectCard from "./ui/ProjectCard";

export default function Cozier() {
  return (
    <ProjectCard
      repo="https://github.com/maridivi/e-commerce"
      projectLink="https://cozier.vercel.app/"
      alt="cozier"
      src="/images/cozier.jpg"
      title="cozier"
      description="An e-commerce website showing products fetched from an Airtable base."
      techList={["Nextjs"]}
    />
  );
}
