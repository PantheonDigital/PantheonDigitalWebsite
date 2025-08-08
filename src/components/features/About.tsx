import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-screen mask-t-from-92% sm:mask-t-from-80% relative flex flex-col items-center justify-center h-auto bg-gradient-to-b mt-0 from-[#202020] via-[#202020] to-[#86868600] z-10 pt-8 md:pt-24">
      <div className="flex items-center flex-col md:flex-row md:mx-40 mt-24 w-[80vw] gap-8">
        {/* left side */}
        <div className="md:w-[50%] w-full md:flex flex-col justify-center text-center md:text-left">
          <h4 className="text-sm md:text-xl font-avenir-medium  text-white/50">
            About Us
          </h4>
          <h1 className="font-geometric text-white text-xl md:text-4xl font-extrabold mt-2">
            Nurturing Tomorrow: Crafting Digital Journeys with Passion
          </h1>
          <p className="font-avenir-medium text-white mt-8 md:text-xl leading-6 md:leading-9">
            Welcome to Pantheon Digital, where innovation meets excellence. As a
            leading player in the digital landscape, we specialize in crafting
            transformative solutions that empower businesses to thrive in the
            modern era.
          </p>

          <div className=" hidden md:flex flex-row-reverse md:flex-row items-center justify-evenly md:justify-normal w-full mt-12 gap-4">
            <PrimaryButton
              label={"Get in touch"}
              href={"/Contact_Us"}
              className="rounded-lg"
            />
            <PrimaryButton
              label="About Us"
              href={"/About"}
              type="red-outline"
            />
          </div>
        </div>

        {/* right side */}
        <div className=" md:w-[50%] md:h-[500px] w-full h-ful mt-12 md:mt-0 flex justify-end">
          <Image
            src="/YoutubeLogo.svg"
            alt="Youtube logo"
            width="0"
            height="0"
            className="md:relative absolute animate-bounce  md:left-[27%] md:bottom-[-10%] bottom-[83.5%] w-[15%] h-[15%]  cursor-pointer transition-all hover:scale-110"
          />
          <Image
            src="/AboutUsSectionImage.svg"
            alt="home page vertical image"
            width="10"
            height="0"
            className="md:w-[508] w-full h-full"
          />
        </div>
      </div>

      <div className=" md:hidden flex flex-row-reverse md:flex-row items-center justify-evenly md:justify-normal w-full mt-12 gap-4">
        <PrimaryButton
          label={"Get in touch"}
          href={"/Contact_Us"}
          className="rounded-lg"
        />
        <PrimaryButton label="About Us" href={"/About"} type="red-outline" />
      </div>

    </div>
  );
};

export default About;
