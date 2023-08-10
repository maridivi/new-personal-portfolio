import ProjectCard from "./ui/ProjectCard";

export default function MovieGenerator() {
  return (
    <ProjectCard
      repo
      title="movie generator"
      description="A React app which generates a random movie based on filters (release year, genre, duration, original language and vote average)."
      alt="movie-generator"
      src="/images/movie.png"
    />
  );
}
