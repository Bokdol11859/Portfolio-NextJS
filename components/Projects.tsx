import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center">
      <h3 className="absolute ml-6 top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/project_1.png"
              className="max-w-sm md:max-w-md xl:max-w-2xl"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline underline-offset-4 decoration-[#51abcb]/50">
                  Project {i + 1} of {projects.length}:
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                키즈 다이어리 키다는 갈수록 늘어나는 맞벌이 가정과 아이들의
                사교육 수행 시간 확대로 인해 부모와 아이의 단절된 소통을
                중점으로 해결하고자 하는 서비스입니다. 부모와 아이는 키다를 통해
                정해진 주제에 따른 일기를 서로 공유하고 아이의 경우 당시의
                감정을 선택할 수 있습니다. 또한 실제 서울특별시에서 진행 중인
                문화행사 정보들을 조회하고 함께 가고 싶은 장소를 저장하고 공유해
                손쉽게 함께 참여할 수 있는 활동에 접근하고 참여할 수 있게
                돕습니다.
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
