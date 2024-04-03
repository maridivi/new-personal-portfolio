import ProjectCard from "./ui/ProjectCard";

export default function Hangman() {
  return (
    <ProjectCard
      className="bg-yellow-50 hover:bg-yellow-100 delay-200"
      repo="https://github.com/maridivi/hangman-game"
      projectLink="https://maridivi.github.io/hangman-game/"
      alt="hangman"
      src="/images/hangman.png"
      title="hangman"
      description="A classic word-guessing game that challenges players to guess a hidden word by suggesting letters within a certain number of attempts."
      techList={["HTML", "CSS", "Javascript"]}
    />
  );
}
