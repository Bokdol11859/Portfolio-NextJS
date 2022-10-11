import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-60 hover:opacity-100 cursor-pointer transition-opacity overflow-scroll">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/logo.png"
        alt="logo"
      />
      <div className="px-4 md:px-20 ">
        <h4 className="text-4xl font-light">CTO / Co-Founder</h4>
        <p className="font-bold text-2xl mt-1">MyPlanIt</p>
        <div className="flex space-x-2 my-5">
          <img src="https://skillicons.dev/icons?i=react" />
          <img src="https://skillicons.dev/icons?i=next" />
          <img src="https://skillicons.dev/icons?i=typescript" />
          <img src="https://skillicons.dev/icons?i=redux" />

          <img src="https://skillicons.dev/icons?i=tailwind" />
        </div>
        <p>2021.10 ~ CURRENT</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
          <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
          <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
          <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
          <li>Summary PointsSummary PointsSummary PointsSummary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
