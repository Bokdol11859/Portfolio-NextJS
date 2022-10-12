import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center ">
      <h3 className="absolute ml-6 top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 thin scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#51abcb]/80">
        {projects?.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            key={i}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: 300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/project_1.png"
              className="max-w-sm md:max-w-xl xl:max-w-5xl"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline underline-offset-4 decoration-[#51abcb]/50">
                  {project.title}
                </span>
              </h4>
              <div className="flex justify-center items-center gap-5">
                {project?.technologies.map((tech, i) => (
                  <img
                    key={i}
                    src={`https://skillicons.dev/icons?i=${tech.title}`}
                  />
                ))}
              </div>
              <p className="text-sm md:text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#51abcb]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
