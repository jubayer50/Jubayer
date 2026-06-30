import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiGithubLine, RiVercelFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="border-t border-[#0367A650] mt-14 md:mt-20">
      <div className="max-w-310 mx-auto pt-8 md:pt-12 px-3">
        <div className="pb-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <Link href={"/"}>
              <h2 className="font-semibold text-2xl md:text-3xl text-[#05F2F2]">
                Jubayer
              </h2>
            </Link>

            <div className="mt-3">
              <h3 className="text-[16px] md:text-lg font-bold text-[#7588A3]">
                Build Something Great Together
              </h3>
              <p className="mt-2 max-w-115 text-white/90">
                I’m open to discussing new projects, creative ideas, and unique
                opportunities. Let’s work together to turn great ideas into
                reality.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Social Links:</h3>

            <div className="mt-2 flex items-center gap-3">
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
                  href={"https://www.facebook.com/jubayer050/"}
                  target="_blank"
                >
                  <FaFacebookF className="object-cover text-[#05F2F2]" />
                </Link>
              </div>

              <div className="text-xl w-8 h-8 p-2 rounded-full border border-[#0367A690] flex items-center justify-center">
                <Link href="https://wa.me/8801818237050" target="_blank">
                  <FaWhatsapp className="object-cover text-[#05F2F2]" />
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
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-[#0367A650] text-center">
          <p className="text-[14px]">
            Copyright © 2026 | All right ® reserved by Jubayer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
