import About from "@/components/About";
import Cozier from "@/components/Cozier";
import Footer from "@/components/Footer";
import LofiCafe from "@/components/LofiCafe";
import MovieGenerator from "@/components/MovieGenerator";
import Pomozone from "@/components/Pomozone";
import Readingful from "@/components/Readingful";
import Grid from "@/components/ui/Grid";

import Head from "./head";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import RecentWork from "@/components/RecentWork";

export default function Home() {
  return (
    <>
      <Head />
      <main className="px-8 min-h-screen flex flex-col pt-12 pb-6 gap-12">
        <Grid className="gap-6 ">
          <About />
          <Bio />

          <LofiCafe />

          <Pomozone />
          <MovieGenerator />
          <RecentWork />

          <Cozier />
          <Readingful />

          <Contact />
        </Grid>
        <Footer />
      </main>
    </>
  );
}
