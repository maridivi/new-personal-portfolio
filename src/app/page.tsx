import About from "@/components/About";
import Cozier from "@/components/Cozier";
import LofiCafe from "@/components/LofiCafe";
import MovieGenerator from "@/components/MovieGenerator";
import Pomozone from "@/components/Pomozone";
import Readingful from "@/components/Readingful";
import Grid from "@/components/ui/Grid";

import Stack from "@/components/ui/Stack";

export default function Home() {
  return (
    <Grid className="gap-6">
      <About />

      <LofiCafe />
      <Readingful />

      <Cozier />
      <Pomozone />
      <MovieGenerator />
    </Grid>
  );
}
