"use client";
import { motion } from "motion/react";

import Image from "next/image";
import JavaScript from "@/assets/Images/js.png";
import React from "@/assets/Images/react.png";
import Next from "@/assets/Images/nextjs.png";
import Tailwind from "@/assets/Images/tailwindcss.png";
import Nodejs from "@/assets/Images/nodejs.png";
import Express from "@/assets/Images/expressjs.png";
import Redux from "@/assets/Images/redux.png";
import Git from "@/assets/Images/git.png";
import Ai from "@/assets/Images/ai.png";
import MongoDB from "@/assets/Images/mongodb.png";
import BetterAuth from "@/assets/Images/better_auth.png";

const SkillsAndTechnology = () => {
  return (
    <div className="my-18 md:my-40 max-w-310 mx-auto px-3">
      <h2 className="font-bold text-xl md:text-2xl text-[#05F2F2]">
        Skills And Technology
      </h2>
      <h4 className="text-lg text-[#7588A3] mt-1">
        Skilled in the modern web ecosystem and technologies with a strong focus
        on scalable architecture, high performance, and clean code.
      </h4>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={JavaScript}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">JavaScript</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={React}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">React</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={Next}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">NextJs</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={Tailwind}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">
              TailwindCSS
            </h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={Nodejs}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">NodeJs</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={Express}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">ExpressJs</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={Redux}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">Redux</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={Git}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">Git</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={MongoDB}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">MongoDB</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={Ai}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">AI</h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="group relative overflow-hidden text-center border border-[#0367A650] rounded-xl p-5 bg-[#011b3075] hover:scale-103 duration-300 transform transition-all ease-in hover:border-[#05F2F290]"
        >
          {/* blur effect */}
          <div>
            <div className="h-10 w-10 rounded-full opacity-0 group-hover:opacity-100 bg-[#05F2F2] blur-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transition-all duration-500"></div>
          </div>

          <div>
            <Image
              src={BetterAuth}
              alt="JavaScript"
              width={400}
              height={400}
              className="w-13 mx-auto rounded-md"
            ></Image>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-xl text-[#05F2F2]">
              Better Auth
            </h3>
            <p className="font-medium text-[#7588A3]"></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsAndTechnology;
