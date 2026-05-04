"use client";

import { useSpring, animated, easings } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { IoArrowDownOutline } from "react-icons/io5";

const Banner = () => {
  const springs = useSpring({
    from: { y: -7 },
    to: { y: 0 },
    loop: { reverse: true },
    config: {
      duration: 550,
      tension: 140, // lower = softer movement
      friction: 20,
      easing: easings.easeOutCubic,
    },
  });

  return (
    <div className="py-18 md:py-25 text-center px-2">
      <div className="">
        <div>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-[40px] font-bold">
              Hello, I'm <span className="text-[#05F2F2]">Jubayer</span>{" "}
            </h2>

            <Image
              src={
                "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHhydG1scTJveGdyeDJhNnRxemxhb3hrbHVnMzNod3p0N3llczhrNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ykZS4KGnpdlY2f7XHg/giphy.gif"
              }
              alt="Hi Gif"
              width={60}
              height={60}
            ></Image>
          </div>

          <h2 className="text-2xl md:text-[32px] font-medium text-[#7588A3]">
            I built a highly scalable website{" "}
          </h2>

          <p className="text-[#7588A3] max-w-187.5 mx-auto mt-5">
            I am a passionate Frontend Web Developer skilled in JavaScript and
            modern frameworks like React and Next.js. I build highly scalable
            responsive, user-friendly interfaces with a focus on clean and
            maintainable code.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mt-6 md:mt-10">
          <a
            href=""
            download={""}
            className="btn bg-[#05F2F2] border-none shadow-none"
          >
            Download Resume
          </a>

          <animated.div style={springs}>
            <IoArrowDownOutline className="text-[#7588A3] text-[22px]" />
          </animated.div>

          <Link href={"/projects"}>
            <button className="btn bg-[#05F2F2] border-none shadow-none">
              View Project
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-[#0367A630] backdrop-blur-sm rounded-full border border-[#05F2F250] text-white text-[14px] px-3 py-1 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#05F2F2] rounded-full"></div>
          Available Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
