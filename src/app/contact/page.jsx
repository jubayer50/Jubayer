import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { RiGithubLine, RiVercelFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className="max-w-310 mx-auto my-24 md:my-40 px-3">
      <div>
        <h2 className="font-bold text-2xl md:text-2xl text-[#05F2F2]">
          Let's Connect with me.
        </h2>

        <p className="text-lg font-medium text-[#7588A3] mt-2">
          Interested in working together or just starting a conversation? I’m
          always available to talk about projects, collaborations, and new
          opportunities.
        </p>

        <div className="mt-15 flex flex-col md:flex-row gap-22 justify-between">
          <div className="">
            <h3 className="text-xl font-semibold">Get in Touch</h3>

            <div className="flex flex-col gap-5 mt-5">
              <div className="mt-3">
                <div className="flex items-center gap-5 group">
                  <div className="bg-[#011b30] border border-[#0367A640] group-hover:border-[#0367A6] transition-all duration-300 rounded-md flex items-center justify-center p-4.5">
                    <FaLocationPin className="text-2xl text-[#05F2F2]" />
                  </div>

                  <div>
                    <h4 className="text-xl text-[#7588A3]">Location</h4>
                    <p className="text-lg font-medium text-[#05F2F2]">
                      Dhaka, Bangladesh.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center gap-5 group">
                  <div className="bg-[#011b30] border border-[#0367A640] group-hover:border-[#0367A6] transition-all duration-300 rounded-md flex items-center justify-center p-4.5">
                    <MdEmail className="text-2xl text-[#05F2F2]" />
                  </div>

                  <div>
                    <h4 className="text-xl text-[#7588A3]">Email</h4>
                    <p className="text-lg font-medium text-[#05F2F2]">
                      usjubayer1@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center gap-5 group">
                  <div className="bg-[#011b30] border border-[#0367A640] group-hover:border-[#0367A6] transition-all duration-300 rounded-md flex items-center justify-center p-4.5">
                    <FaPhone className="text-2xl text-[#05F2F2]" />
                  </div>

                  <div>
                    <h4 className="text-xl text-[#7588A3]">Phone</h4>
                    <p className="text-lg font-medium text-[#05F2F2]">
                      01818237050
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9">
                <h3 className="text-xl font-semibold text-[#7588A3]">
                  You can also Knock me via social links.
                </h3>

                <div className="mt-4 flex items-center gap-3">
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
          </div>

          <div className="bg-[#011b30] border border-[#0367A640] p-3 md:p-6 rounded-lg">
            <h2 className="font-bold text-lg md:text-xl text-[#05F2F2]">
              Send me Massage
            </h2>

            <div className="mt-3">
              <form className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div>
                    <p className="font-medium text-lg text-[#]">Name</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="px-3 py-1.5 mt-1 border border-[#0367A680] rounded-md w-full"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-lg text-[#]">Email</p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-3 py-1.5 mt-1 border border-[#0367A680] rounded-md w-full"
                    />
                  </div>
                </div>

                <div className="">
                  <p className="font-medium text-lg text-[#]">Email</p>
                  <input
                    type="text"
                    placeholder="Enter your Subject"
                    className="px-3 py-1.5 mt-1 border border-[#0367A680] rounded-md w-full"
                  />
                </div>

                <div className="">
                  <p className="font-medium text-lg text-[#]">
                    Write your massage
                  </p>

                  <textarea
                    rows={4}
                    type="text"
                    placeholder="massage"
                    className="px-3 py-1.5 mt-1 border border-[#0367A680] rounded-md w-full"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn w-full shadow-none border-none text-[#021525] bg-[#05F2F2]"
                  >
                    Send Massage
                  </button>
                </div>
              </form>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
