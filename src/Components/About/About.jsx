import React from "react";

const About = () => {
  return (
    <div className="my-10 md:my-25 max-w-310 mx-auto px-3">
      <div className="space-y-1">
        <h2 className="font-bold text-2xl md:text-2xl text-[#05F2F2]">
          About me
        </h2>
        <h3 className="text-lg font-bold text-[#7588A3]">
          Building Scalable and interactive web solution
        </h3>
      </div>

      <div className="mt-4">
        <p className="text-[#7588A3]">
          I'm <span className="text-[#ffffff]">Jubayer Hossain</span> from
          Dhaka, Bangladesh. I am a frontend developer. Experienced Frontend Web
          Developer specializing in JavaScript, React.js, Next.js, Node.js and
          modern framework and libraries. My journey started about a year ago
          with <strong>Programming Hero</strong> . In this time, I have done
          some project among them, I was involved one full-stack project.
        </p>

        <div className="mt-8 space-y-2.5">
          <h3 className="text-[22px] font-semibold text-[#05F2F2]">
            Goal and Study
          </h3>
          <p className="text-[#7588A3]">
            My study background was a BBA from Shaikh Burhanuddin Post Graduate
            College. Although my study background was not in the technology
            field, I found my passion for the technology field. I want to face
            and overcome every challenge in the technology field with my
            patience and hard work. I love to do coding. I am a{" "}
            <strong className="border-b text-lg text-[#ffffff]">
              Passionate Full-Stack Engineer.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
