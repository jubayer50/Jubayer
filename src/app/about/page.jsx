import About from "@/Components/About/About";
import ImageJubayer from "@/assets/Images/jubayer.png";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="max-w-310 mx-auto my-20 px-3">
      <div className="flex flex-col-reverse md:flex-row items-center  gap-7 justify-between">
        <div>
          <About></About>
        </div>

        <div className="bg-[#011b30] rounded-lg border-4 border-[#05F2F250]">
          <Image
            src={ImageJubayer}
            alt="Jubayer"
            width={700}
            height={700}
            className="w-130 rounded-sm overflow-hidden"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
