import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const router = useRouter();
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center justify-center text-gray-300 cursor-pointer"
      >
        <p
          className="uppercase hidden md:inline-flex text-lg text-gray-400"
          onClick={() => {
            router.push("https://bokdolblog.vercel.app");
          }}
        >
          Blog
        </p>
        <SocialIcon
          key="https://bokdolblog.vercel.app"
          url="https://bokdolblog.vercel.app"
          fgColor="gray"
          bgColor="transparent"
          onClick={() => {
            router.push("https://bokdolblog.vercel.app");
          }}
        />
      </motion.div>
    </header>
  );
};

export default Header;
