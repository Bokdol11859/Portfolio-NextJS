import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>박준열 - 프론트엔드 개발자</title>
      </Head>

      {/* header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  );
};

export default Home;
