import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-screen relative flex flex-col items-center justify-center h-auto bg-gradient-to-b mt-0 from-[#202020] via-[#202020] to-[#86868600] z-10 pt-16">
      <div className="flex items-center flex-col md:flex-row md:mx-40 mt-24 w-[80vw] gap-8">
        {/* left side */}
        <div className="md:w-[50%] w-full md:flex flex-col justify-center text-center md:text-left">
          <h4 className="text-sm md:text-xl font-avenir text-white/50">
            About Us
          </h4>
          <h1 className="font-geometric text-white text-xl md:text-4xl font-extrabold mt-2">
            Nurturing Tomorrow: Crafting Digital Journeys with Passion
          </h1>
          <p className="font-avenir text-white mt-8 md:text-xl font-medium">
            Welcome to Pantheon Digital, where innovation meets excellence. As a
            leading player in the digital landscape, we specialize in crafting
            transformative solutions that empower businesses to thrive in the
            modern era.
          </p>

          <div className="flex flex-row-reverse md:flex-row items-center justify-evenly md:justify-normal w-full mt-12 gap-4">
            <PrimaryButton
              label={"Get in touch"}
              href={""}
              className="rounded-lg"
            />
            <PrimaryButton label="About Us" href={""} type="red-outline" />
          </div>
        </div>

        {/* right side */}
        <div className=" md:w-[50%] md:h-[500px] w-full h-ful mt-12 md:mt-0 flex justify-end">
          {/* <div className="border-2 border-red-500 absolute md:p-10 rounded-full md:left-[61.4%] md:bottom-[77.5%] bottom-[75.5%] custom-ping " />
          <div className="border-2 border-red-500 absolute md:p-10 rounded-full md:left-[61.4%] md:bottom-[77.5%] bottom-[75.5%] custom-ping custom-delay-1" />
          <div className="border-2 border-red-500 absolute md:p-10 rounded-full md:left-[61.4%] md:bottom-[77.5%] bottom-[75.5%]  custom-ping custom-delay-2" /> */}
          <Image
            src="/YoutubeLogo.svg"
            alt="Youtube logo"
            width="0"
            height="0"
            className="md:relative absolute  md:left-[27%] md:bottom-[-10%] bottom-[75.5%] w-[15%] h-[15%]  cursor-pointer transition-all hover:scale-110"
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

      {/* about information in numerical */}
      <div className="w-full flex items-center justify-center mt-24">
        <div className="grid w-[90%] md:w-[80%] place-items-center gap-8 grid-cols-2 md:grid-cols-4 auto-cols-fr p-8 md:p-15 rounded-4xl bg-[#313131] shadow-[inset_-10px_10px_8px_rgba(0,0,0,.25)]">
          {/* 1 */}
          <div className="flex flex-col gap-2 ">
            <div className="flex gap-2">
              <Image
                src="/favorite-chart.svg"
                alt="Happy Clients"
                width="0"
                height="0"
                className="w-[27] h-[27] md:w-[40] md:h-[40] "
              />
              <span className="font-avenir font-extrabold text-xl md:text-4xl text-white">
                112
              </span>
            </div>
            <p className="text-white font-avenir text-xs md:text-base align-top font-bold">
              Happy Client
            </p>
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src="/status-up.svg"
                alt="Finished Projects"
                width="0"
                height="0"
                className="w-[27] h-[27] md:w-[40] md:h-[40] "
              />
              <span className="font-avenir font-extrabold text-xl md:text-4xl text-white">
                98
              </span>
            </div>
            <p className="text-white font-avenir text-xs md:text-base align-top font-bold">
              Finished Projects
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src="/personalcard.svg"
                alt="skilled experts"
                width="0"
                height="0"
                className="w-[27] h-[27] md:w-[40] md:h-[40]"
              />
              <span className="font-avenir font-extrabold text-xl md:text-4xl text-white">
                12
              </span>
            </div>
            <p className="text-white font-avenir text-xs md:text-base align-top font-bold">
              Skilled Experts
            </p>
          </div>

          {/* 4 */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Image
                src="/chart-2.svg"
                alt="Years of experience"
                width="0"
                height="0"
                className="w-[27] h-[27] md:w-[40] md:h-[40]"
              />
              <span className="font-avenir font-extrabold text-xl md:text-4xl text-white">
                112
              </span>
            </div>
            <p className="text-white font-avenir text-xs md:text-base align-top font-bold">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
