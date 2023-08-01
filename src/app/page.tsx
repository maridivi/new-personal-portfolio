import About from "@/components/About";
import Cozier from "@/components/Cozier";
import LofiCafe from "@/components/LofiCafe";
import Grid from "@/components/ui/Grid";
import Stack from "@/components/ui/Stack";

export default function Home() {
  return (
    <Stack vertical className="gap-12">
      <About />

      <Grid>
        <LofiCafe />
        <Cozier />
      </Grid>
    </Stack>
  );
}
