"use client";
import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Tiles from "@/assets/Images/tiles.jpg";
import DigiTools from "@/assets/Images/Digitools.jpg";
import IdeaVault from "@/assets/Images/IdeaVault.png";

const Projects = () => {
  return (
    <div className="max-w-310 mx-auto px-3">
      <div>
        <h2 className="font-bold text-2xl md:text-2xl text-[#05F2F2]">
          Projects
        </h2>
        <p className="font-medium text-lg text-[#7588A3] mt-2">
          Explore some of my featured projects showcasing scalable, responsive,
          and modern web development using React.js and Next.js
        </p>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="space-y-4 group bg-[#011b30] overflow-hidden rounded-lg border border-[#0367A640] hover:border-[#05F2F290] transition-all duration-400 flex flex-col h-full"
            >
              <div className="overflow-hidden max-h-70 h-full">
                <Image
                  src={IdeaVault}
                  alt="Tiles Gallery"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-top transition-transform duration-400 ease-in-out group-hover:scale-105"
                ></Image>
              </div>

              <div className="p-5 space-y-4 flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#05F2F2]">
                    IdeaVault
                  </h2>
                  <p className="text-[#7588A3]">
                    IdeaVault is a full-stack startup idea-sharing platform
                    where users can publish, explore, and discuss innovative
                    ideas. It enables community-driven feedback through comments
                    and interactions.
                  </p>

                  {/* <div className="badge badge-soft badge-primary">Primary</div> */}
                  <div className="flex items-center gap-2 flex-wrap text-[#7588A3]">
                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      JavaScript
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      Next.js
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      Tailwind CSS
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      swiper
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      HeroUI
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      Better Auth
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      MongoDB
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 ">
                  <Link
                    href={"https://github.com/jubayer50/IdeaVault"}
                    target="_blank"
                  >
                    <button className="btn text-[#021525] bg-[#05F2F2] shadow-none border-none">
                      <FaGithub className="text-lg" /> Repository
                    </button>
                  </Link>

                  <Link
                    href={"https://idea-vault-six-jade.vercel.app/"}
                    target="_blank"
                  >
                    <button className="btn text-[#021525] bg-[#05F2F2] shadow-none border-none">
                      <FaExternalLinkAlt /> Live Project
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="space-y-4 group bg-[#011b30] overflow-hidden rounded-lg border border-[#0367A640] hover:border-[#05F2F290] transition-all duration-400 flex flex-col h-full"
            >
              <div className="overflow-hidden">
                <Image
                  src={Tiles}
                  alt="Tiles Gallery"
                  width={800}
                  height={800}
                  className="w-full object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
                ></Image>
              </div>

              <div className="p-5 space-y-4 flex flex-col justify-between flex-1">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#05F2F2]">
                    Tiles Gallery
                  </h2>
                  <p className="text-[#7588A3]">
                    Tiles Gallery is a secure web application featuring Better
                    Auth integration for Google and email/password login,
                    protecting personalized user profiles and exclusive product
                    data.
                  </p>

                  <div className="flex items-center gap-2 flex-wrap text-[#7588A3]">
                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      JavaScript
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      Next.js
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      Tailwind CSS
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      swiper
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      HeroUI
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 ">
                  <Link
                    href={"https://github.com/jubayer50/Tiles-Gallery"}
                    target="_blank"
                  >
                    <button className="btn text-[#021525] bg-[#05F2F2] shadow-none border-none">
                      <FaGithub className="text-lg" /> Repository
                    </button>
                  </Link>

                  <Link
                    href={"https://tiles-gallery-jubayer-50.vercel.app/"}
                    target="_blank"
                  >
                    <button className="btn text-[#021525] bg-[#05F2F2] shadow-none border-none">
                      <FaExternalLinkAlt /> Live Project
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="space-y-4 group bg-[#011b30] overflow-hidden rounded-lg border border-[#0367A640] hover:border-[#05F2F290] transition-all duration-400 flex flex-col h-full"
            >
              <div className="overflow-hidden">
                <Image
                  src={DigiTools}
                  alt="DigiTools"
                  width={800}
                  height={800}
                  className="w-full object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
                ></Image>
              </div>

              <div className="p-5 space-y-4 flex flex-col flex-1 justify-between">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#05F2F2]">
                    Digi Tools
                  </h2>
                  <p className="text-[#7588A3]">
                    DigiTools is a React.js project for subscribing to digital
                    tools like AI and content writing services. It features a
                    smart cart system, duplicate item alerts, toast
                    notifications, and a checkout process that clears the cart
                  </p>

                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      JavaScript
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      React.js
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      Tailwind CSS
                    </p>

                    <p className="badge bg-[#011b30] border border-[#0367A670] text-[#7588A3] hover:border-[#05F2F290] transition-all duration-400">
                      DaisyU
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={"https://github.com/jubayer50/digiTools"}
                    target="_blank"
                  >
                    <button className="btn text-[#021525] bg-[#05F2F2] shadow-none border-none">
                      <FaGithub className="text-lg" /> Repository
                    </button>
                  </Link>

                  <Link
                    href={"https://digi-tools-jubayer50.netlify.app/"}
                    target="_blank"
                  >
                    <button className="btn text-[#021525] bg-[#05F2F2] shadow-none border-none">
                      <FaExternalLinkAlt /> Live Project
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-center mt-7 md:mt-10">
            <Link href={"/projects"}>
              <button className="btn bg-[#05F2F2] border-none shadow-none">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
