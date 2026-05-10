import Image from "next/image";
import Link from "next/link";
import Tiles from "@/assets/Images/tiles.jpg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <div className="max-w-310 mx-auto my-20 md:my-30 px-3">
      <div>
        <h2 className="font-bold text-2xl md:text-2xl text-[#05F2F2]">
          All Projects
        </h2>
        <p className="font-medium text-lg text-[#7588A3] mt-2">
          Explore some of my featured projects showcasing scalable, responsive,
          and modern web development using React.js and Next.js
        </p>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="space-y-4 group bg-[#011b30] overflow-hidden rounded-lg border border-[#0367A640] hover:border-[#05F2F290] transition-all duration-400 flex flex-col h-full">
              <div>
                <Image
                  src={Tiles}
                  alt="Tiles Gallery"
                  width={800}
                  height={800}
                  className="w-full rounded-md object-cover transition-transform duration-400 ease-in-out group-hover:scale-104"
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
            </div>

            <div className="space-y-4 group bg-[#011b30] overflow-hidden rounded-lg border border-[#0367A640] hover:border-[#05F2F290] transition-all duration-400 flex flex-col h-full">
              <div>
                <Image
                  src={Tiles}
                  alt="Tiles Gallery"
                  width={800}
                  height={800}
                  className="w-full rounded-md object-cover transition-transform duration-400 ease-in-out group-hover:scale-104"
                ></Image>
              </div>

              <div className="p-5 space-y-4 flex flex-col flex-1 justify-between">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-[#05F2F2]">
                    Keen Keeper
                  </h2>
                  <p className="text-[#7588A3]">
                    A React.js communication app where users can call, video
                    call, and text friends while tracking all interactions in
                    real time through timelines and visual stats charts.
                  </p>
                </div>

                <div className="flex items-center gap-4">
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
            </div>

            <div className="space-y-4 group bg-[#011b30] overflow-hidden rounded-lg border border-[#0367A640] hover:border-[#05F2F290] transition-all duration-400 flex flex-col h-full">
              <div>
                <Image
                  src={Tiles}
                  alt="Tiles Gallery"
                  width={800}
                  height={800}
                  className="w-full rounded-md object-cover transition-transform duration-400 ease-in-out group-hover:scale-104"
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
                </div>

                <div className="flex items-center gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
