import About from "@/components/About";
import Cozier from "@/components/Cozier";
import Footer from "@/components/Footer";
import LofiCafe from "@/components/LofiCafe";
import MovieGenerator from "@/components/MovieGenerator";
import Pomozone from "@/components/Pomozone";
import Readingful from "@/components/Readingful";
import Grid from "@/components/ui/Grid";

import Head from "./head";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head />
      <main className="px-8 sm:px-16 md:px-48 min-[850px]:px-16 lg:px-224 xl:px-40 min-h-screen flex flex-col pt-12 pb-6 gap-12">
        <Grid className="gap-6 ">
          <About />
          <LofiCafe />
          <Pomozone />
          <Cozier />
          <Readingful />
          <MovieGenerator />
          <Contact />
        </Grid>
        <Footer />
      </main>
    </>
  );
}
