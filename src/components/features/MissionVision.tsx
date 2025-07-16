import Image from "next/image";

const MissionVision = () => {
  return (
    <>
      {/* heading */}
      <h1 className="font-geometric text-xl md:text-4xl font-bold text-white mt-32">
        Our Mission & Vision
      </h1>

      {/* Mission */}
      <div className="w-[90%] md:w-[80%] h-auto px-7 pb-7 py-10 md:py-20 flex flex-col md:flex-row mt-12 bg-[#202020] rounded-3xl gap-8 md:gap-16">
        {/* left side =========================== */}
        <div className="md:w-[40%] w-full h-auto flex flex-col gap-8 md:gap-24 justify-between">
          <div className="flex gap-4 items-center justify-center md:justify-normal">
            {/* image and heading */}
            <Image
              src="/OurMission.svg"
              alt="our mission goal image"
              width="0"
              height="0"
              className="w-[42] h-[37] md:w-[84] md:h-[74]"
            />
            <h1 className="font-avenir font-extrabold text-lg md:text-3xl text-white">
              Our <br className="md:block hidden" /> Mission
            </h1>
          </div>

          {/* image */}
          <Image
            src="/AboutDescImage1.svg"
            alt="mission image"
            width="0"
            height="0"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* right side =========================== */}
        <ul className="w-full py-1 md:p-5  flex flex-col justify-between list-image-[url(/CheckList.svg)] list-inside md:list-outside gap-4 md:gap-12">
          <li>
            <p className="font-avenir text-sm md:text-xl ml-4 text-white font-extralight">
              <span className="font-bold "> Solutions That Work:</span> We focus
              on delivering high-quality digital solutions that are thoughtfully
              tailored to meet your unique business goals.
            </p>
          </li>

          <li>
            <p className="font-avenir text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold "> Smart, Scalable & Affordable:</span>{" "}
              Our services are designed to grow with you—cost-effective without
              cutting corners on quality or performance.
            </p>
          </li>

          <li>
            <p className="font-avenir text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold "> You First, Always:</span> We take
              care of the digital side so you can focus on what you do
              best—running your business. Your success is our priority.
            </p>
          </li>

          <li>
            <p className="font-avenir text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold ">Built on Trust:</span> We’re not just
              here for a project; we’re here for the long run. Our goal is to
              build meaningful, long-term partnerships that evolve with your
              needs.
            </p>
          </li>

          <li>
            <p className="font-avenir text-sm md:text-xl ml-4 text-white -translate-y-1 ">
              <span className="font-bold "> Honest & Clear Communication:</span>{" "}
              We believe in doing things the right way—with transparency,
              integrity, and open communication every step of the journey.
            </p>
          </li>
        </ul>
      </div>

      {/* Vision */}
      <div className="w-[90%] md:w-[80%] h-auto px-7 pb-7 py-10 md:py-20 flex flex-col md:flex-row mt-12 bg-[#202020] rounded-3xl gap-8 md:gap-16">
        {/* left side =========================== */}
        <div className="md:w-[40%] w-full h-auto flex flex-col gap-8 md:gap-16 justify-between">
          <div className="flex gap-4 items-center justify-center md:justify-normal">
            {/* image and heading */}
            <Image
              src="/OurVision.svg"
              alt="our vision goal image"
              width="49"
              height="62"
              className="w-[25] h-[31] md:w-[49] md:h-[62]"
            />
            <h1 className="font-avenir font-extrabold  text-xl md:text-3xl text-white">
              Our <br className="md:block hidden" /> Vision
            </h1>
          </div>

          {/* image */}
          <Image
            src="/VisionImage.svg"
            alt="mission image"
            width="0"
            height="0"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* right side =========================== */}
        <ul className="w-full md:p-5 flex flex-col justify-between gap-4 md:gap-12">
          <li>
            <p className="font-avenir text-sm md:text-xl md:ml-4  text-white font-extralight">
              To harness the{" "}
              <span className="font-extrabold">
                power of AI and emerging technologies
              </span>{" "}
              to redefine how brands engage, innovate, and scale in the digital
              world." . To leverage the transformative potential of AI and
              cutting-edge technologies to revolutionize brand engagement,
              innovation, and scalability in the digital era.
            </p>
          </li>

          <li>
            <p className="font-avenir text-sm md:text-xl md:ml-4  text-white font-extralight">
              By integrating intelligent automation, data-driven insights, and
              advanced digital solutions, we empower brands to create meaningful
              customer interactions, streamline operations, and unlock new
              growth opportunities.
            </p>
          </li>

          <li>
            <p className="font-avenir text-sm md:text-xl md:ml-4  text-white font-extralight">
              As the digital landscape evolves, we remain agile and
              forward-thinking, ensuring that businesses not only keep pace with
              change but stay ahead of the curve. 
            </p>
          </li>
        </ul>
      </div>

      {/* about information in numerical */}
      <div className="w-full flex items-center justify-center mt-12 md:mt-24">
        <div className="grid w-[90%] md:w-[80%] place-items-center gap-4 md:gap-8 grid-cols-3 md:grid-cols-7 auto-cols-fr  p-8 md:px-24 rounded-4xl bg-[#313131] shadow-[inset_-10px_10px_8px_rgba(0,0,0,.25)]">
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

          {/* first vertical line */}
          <div className="h-full  border-[0.5] border-[#A8A8A8] rounded-full" />

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

          {/* second vertical line */}
          <div className="h-full hidden md:block  border-[0.5] border-[#A8A8A8] rounded-full" />

          {/* horizontal line for mobile view */}
          <div className="w-full block md:hidden  border-[0.5] border-[#A8A8A8] rounded-full col-span-3" />

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

          {/* third vertical line */}
          <div className="h-full  border-[0.5] border-[#A8A8A8] rounded-full" />

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
    </>
  );
};

export default MissionVision;
