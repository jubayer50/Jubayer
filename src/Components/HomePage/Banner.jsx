"use client";

import { useSpring, animated, easings } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { IoArrowDownOutline } from "react-icons/io5";
import ImageJubayer from "@/assets/Images/jubayer.png";
import { RiGithubLine, RiVercelFill } from "react-icons/ri";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

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

  const availableHighLight = useSpring({
    from: { scale: 0.6, opacity: 100 },
    to: { scale: 0.9, opacity: 50 },
    loop: { reverse: true },
    config: {
      duration: 700,
    },
  });

  // for banner pic useSpring
  const floatingImage = useSpring({
    from: { x: 0, y: 0, rotate: 0 },
    to: async (next) => {
      while (true) {
        await next({ x: 10, y: -10, rotate: 2 });
        await next({ x: -8, y: 8, rotate: -2 });
        await next({ x: 5, y: -5, rotate: 1 });
        await next({ x: 0, y: 0, rotate: 0 });
      }
    },
    config: { duration: 3000 },
  });

  return (
    <div className="py-18 md:py-25 md:text-center px-2 max-w-310 mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start">
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

            <p className="text-[#7588A3] max-w-160 mx-auto mt-5">
              I am a passionate Frontend Web Developer skilled in JavaScript and
              modern frameworks like React and Next.js. I build highly scalable
              responsive, user-friendly interfaces with a focus on clean and
              maintainable code.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-6 md:mt-10">
            <a
              href="/Jubayer_Front_End_Developer_Resume.pdf"
              download
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

          <div className="flex items-center justify-center md:justify-start gap-3 mt-4 md:mt-6 ">
            <div className="text-xl w-8 h-8 p-2 rounded-full border border-[#0367A690] flex items-center justify-center">
              <Link href={"https://github.com/jubayer50"} target="_blank">
                <RiGithubLine className="object-cover text-[#05F2F2] " />
              </Link>
            </div>

            <div className="text-xl w-8 h-8 p-2 rounded-full border border-[#0367A690] flex items-center justify-center">
              <Link
                href={"https://www.linkedin.com/in/jubayerh50/"}
                target="_blank"
              >
                <FaLinkedinIn className="object-cover text-[#05F2F2]" />
              </Link>
            </div>

            <div className="text-xl w-8 h-8 p-2 rounded-full border border-[#0367A690] flex items-center justify-center">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=usjubayer1@gmail.com"
                target="_blank"
              >
                <MdOutlineEmail className="object-cover text-[#05F2F2]" />
              </Link>
            </div>

            <div className="text-xl w-8 h-8 p-2 rounded-full border border-[#0367A690] flex items-center justify-center">
              <Link
                href="https://vercel.com/md-jubayer-hossains-projects"
                target="_blank"
              >
                <RiVercelFill className="object-cover text-[15px] text-[#05F2F2]" />
              </Link>
            </div>

            <div className="text-xl w-8 h-8 p-2 rounded-full border border-[#0367A690] flex items-center justify-center">
              <Link href="https://wa.me/8801818237050" target="_blank">
                <FaWhatsapp className="object-cover text-[#05F2F2]" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-start mt-4 md:mt-6">
            <button className="bg-[#0367A625] backdrop-blur-sm rounded-full border border-[#0367A650] text-white text-[14px] px-3 py-1 flex items-center gap-2">
              <animated.div
                className="w-2 h-2 bg-[#05F2F2] rounded-full"
                style={availableHighLight}
              ></animated.div>
              Available Now
            </button>
          </div>
        </div>

        {/* -------------------------- ----------------------------*/}

        <animated.div
          style={{
            transform: floatingImage.x.to((x) => `translateX(${x}px)`),
          }}
        >
          <animated.div
            style={{
              transform: floatingImage.y.to((y) => `translateY(${y}px)`),
            }}
          >
            <animated.div
              style={{
                transform: floatingImage.rotate.to((r) => `rotate(${r}deg)`),
              }}
            >
              <div className="relative w-70 h-70 md:w-95 md:h-95">
                <Image
                  src={ImageJubayer}
                  alt="Jubayer"
                  width={600}
                  height={600}
                  className="rounded-full w-full h-full absolute object-cover border-3 border-[#05F2F250] z-20"
                ></Image>
                <div className="w-40 h-40 bg-[#05F2F2] rounded-full absolute top-[50%] left-[50%] blur-3xl opacity-40 translate-y-[-50%] translate-x-[-50%]"></div>
              </div>
            </animated.div>
          </animated.div>
        </animated.div>

        {/* --------------------------------------------------- */}

        {/* <div className="relative w-70 h-70 md:w-95 md:h-95">
          <Image
            src={ImageJubayer}
            alt="Jubayer"
            width={600}
            height={600}
            className="rounded-full w-full h-full absolute object-cover border-3 border-[#05F2F250] z-20"
          ></Image>
          <div className="w-40 h-40 bg-[#05F2F2] rounded-full absolute top-[50%] left-[50%] blur-3xl opacity-40 translate-y-[-50%] translate-x-[-50%]"></div>
        </div> */}
      </div>

      {/* 
      //avilable now button
      <div className="flex justify-center mt-5 md:mt-7">
        <button className="bg-[#0367A630] backdrop-blur-sm rounded-full border border-[#05F2F250] text-white text-[14px] px-3 py-1 flex items-center gap-2">
          <animated.div
            className="w-2 h-2 bg-[#05F2F2] rounded-full"
            style={availableHighLight}
          ></animated.div>
          Available Now
        </button>
      </div> */}
    </div>
  );
};

export default Banner;
