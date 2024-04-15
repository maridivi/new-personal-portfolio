import ProjectCard from "./ui/ProjectCard";

export default function Cozier() {
  return (
    <ProjectCard
      className="bg-red-50 hover:bg-red-100 delay-250 col-span-1"
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
