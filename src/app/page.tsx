import About from "@/components/About";
import Cozier from "@/components/Cozier";
import Footer from "@/components/Footer";
import LofiCafe from "@/components/LofiCafe";
import Pomozone from "@/components/Pomozone";
import Readingful from "@/components/Readingful";
import Grid from "@/components/ui/Grid";

import Head from "./head";
import Contact from "@/components/Contact";
import cn from "@/utils/cn";
import BazaarBytes from "@/components/BazaarBytes";
import Hangman from "@/components/Hangman";
import MyFaves from "@/components/MyFaves";
import Latest from "@/components/Latest";

export default function Home() {
  return (
    <>
      <Head />
      <main
        className={cn(
          "px-8 min-[550px]:px-24 sm:px-20 min-[700px]:px-6",
          "md:px-20 min-[850px]:px-16 lg:px-24 xl:px-32",

          "min-h-screen flex flex-col pt-12 pb-6 gap-12"
        )}
      >
        <Grid className="gap-6 ">
          <About />
          <BazaarBytes />

          <Hangman />

          <LofiCafe />
          <MyFaves />

          <Cozier />

          {/* <Readingful /> */}

          <Pomozone />

          <Latest />
          <Contact />
        </Grid>
        <Footer />
      </main>
    </>
  );
}
