import Image from "next/image";

function AboutNumerics() {
  return (
    <div className="w-full flex items-center justify-center mt-12 sm:mt-24">
      <div className="grid w-[90%] md:w-[80%] place-items-center gap-4 md:gap-8 grid-cols-[2fr_1fr_2fr] md:grid-cols-7 auto-cols-fr  p-8 md:px-24 rounded-4xl bg-[#313131] shadow-[inset_-10px_10px_8px_rgba(0,0,0,.25)]">
        {/* 1 */}
        <div className="ml-[25%] sm:ml-0 flex flex-col gap-2">
          <div className=" flex gap-2">
            <Image
              src="/favorite-chart.svg"
              alt="Happy Clients"
              width="0"
              height="0"
              className="w-[27] h-[27] md:w-[40] md:h-[40] "
            />
            <span className="font-geometric font-extrabold text-xl md:text-4xl text-white">
              112
            </span>
          </div>
          <p className=" text-white font-avenir-demi text-xs md:text-base align-top font-bold">
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
            <span className="font-geometric font-extrabold text-xl md:text-4xl text-white">
              98
            </span>
          </div>
          <p className="text-white font-avenir-demi text-xs md:text-base align-top font-bold">
            Finished Projects
          </p>
        </div>

        {/* second vertical line */}
        <div className="h-full hidden md:block  border-[0.5] border-[#A8A8A8] rounded-full" />

        {/* horizontal line for mobile view */}
        <div className="w-full block md:hidden  border-[0.5] border-[#A8A8A8] rounded-full col-span-3" />

        {/* 3 */}
        <div className="ml-[25%] sm:ml-0 flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              src="/personalcard.svg"
              alt="skilled experts"
              width="0"
              height="0"
              className="w-[27] h-[27] md:w-[40] md:h-[40]"
            />
            <span className="font-geometric font-extrabold text-xl md:text-4xl text-white">
              12
            </span>
          </div>
          <p className="text-white font-avenir-demi text-xs md:text-base align-top font-bold">
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
            <span className="font-geometric font-extrabold text-xl md:text-4xl text-white">
              112
            </span>
          </div>
          <p className="text-white font-avenir-demi text-xs md:text-base align-top font-bold">
            Years of Experience
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutNumerics;
