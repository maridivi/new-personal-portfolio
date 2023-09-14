import ProjectCard from "./ui/ProjectCard";

export default function MovieGenerator() {
  return (
    <ProjectCard
      className="bg-blue-50 hover:bg-blue-100 delay-700"
      projectLink="https://watchamovie.vercel.app/"
      repo="https://github.com/maridivi/movie-generator"
      title="movie generator"
      description="A React app which generates a random movie based on filters. "
      alt="movie-generator"
      src="/images/movie.jpg"
      techList={["React", "Firebase"]}
    />
  );
}
