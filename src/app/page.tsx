import About from "@/components/About";
import Cozier from "@/components/Cozier";
import Footer from "@/components/Footer";
import LofiCafe from "@/components/LofiCafe";
import MovieGenerator from "@/components/MovieGenerator";
import Pomozone from "@/components/Pomozone";
import Readingful from "@/components/Readingful";
import Grid from "@/components/ui/Grid";

import Stack from "@/components/ui/Stack";
import Head from "./head";
import Bio from "@/components/Bio";

export default function Home() {
  return (
    <>
      <Head />
      <main className="min-h-screen mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg overflow-hidden  flex flex-col pt-12 pb-6 gap-12">
        <Grid className="gap-6">
          <About />
          <Bio />

          <LofiCafe />

          <Readingful />

          <Cozier />
          <Pomozone />
          <MovieGenerator />
        </Grid>
        <Footer />
      </main>
    </>
  );
}
