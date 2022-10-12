import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-80 hover:opacity-100 cursor-pointer transition-opacity overflow-y-scroll scrollbar-none">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="logo"
      />
      <div className="px-4 md:px-20 ">
        <h4 className="text-2xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-1">MyPlanIt</p>
        <div className="flex space-x-2 my-5">
          {experience?.technologies.map((tech) => (
            <img
              src={`https://skillicons.dev/icons?i=${tech.title}`}
              key={experience?._id}
            />
          ))}
        </div>
        <p className="mb-3">
          {new Date(experience?.dateStarted).toDateString()} ~{" "}
          {experience?.isCurrentlyWorkingHere
            ? "CURRENT"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
