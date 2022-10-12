import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#51abcb]/80">
      <Head>
        <title>박준열 - 프론트엔드 개발자</title>
      </Head>

      {/* header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
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
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full ">
        <div className="flex items-center justify-center ">
          <Link href="#hero">
            <ArrowUpIcon className="h-10 w-10 rounded-full filter cursor-pointer bg-[#51abcb] hover:bg-white hover:text-[#51abcb] p-2" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
