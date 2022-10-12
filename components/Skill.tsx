import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skill = ({}: Props) => {
  return (
    <div className="group relative flex cursor-pointer overflow-visible">
      <motion.img
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 object-cover  h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://skillicons.dev/icons?i=next"
        alt="https://skillicons.dev/icons?i=next"
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-[#51abcb] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-white opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
