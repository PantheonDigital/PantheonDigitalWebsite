import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";

const OurProject = () => {
  return (
    <div className="w-full md:w-[80%] mt-32 md:mt-24 relative ">
      <div className="w-[90%] mx-auto">
        <h4 className=" font-avenir-20 opacity-60 text-white text-center">
          Our best projects
        </h4>
        <h1 className="font-geometric text-4xl text-white text-center mt-4">
          We delivered best solution
        </h1>
      </div>
      {/* cards for reason to choose us */}
      <div className=" px-7 w-full h-auto flex overflow-x-scroll md:overflow-x-hidden md:grid md:auto-cols-fr md:grid-cols-2 gap-6 md:gap-10 mt-12">
        <ProjectCard
          src="/Project1.svg"
          title="Mobile Application"
          subtitle="Loading Walla"
        />
        <ProjectCard
          src="/Project2.svg"
          title="Software Solution"
          subtitle="ZFour HRMS Software"
        />
        <Link
          href="/"
          className="absolute  px-1 py-5 md:px-4 md:py-11 rounded-full bg-white md:top-[50%] md:left-[50%] -top-20 left-[75%] z-20 md:-translate-x-[50%] -rotate-20 transition-all hover:scale-110"
        >
          <div className="border-2 border-red-500 absolute p-8 md:p-16 rounded-full translate-x-[-8%] md:translate-x-[-15%] translate-y-[-32%] md:translate-y-[-37%] custom-ping " />
          <div className="border-2 border-red-500 absolute p-8 md:p-16 rounded-full translate-x-[-8%] md:translate-x-[-15%] translate-y-[-32%] md:translate-y-[-37%] custom-ping custom-delay-1" />
          <div className="border-2 border-red-500 absolute p-8 md:p-16 rounded-full translate-x-[-8%] md:translate-x-[-15%] translate-y-[-32%] md:translate-y-[-37%] custom-ping custom-delay-2" />

          <span className="text-black text-sm md:text-2xl font-bold ">
            Projects
          </span>
        </Link>
        <ProjectCard
          src="/Project3.svg"
          title="Marketing & Branding"
          subtitle="Social Post, logo, ppc & more"
        />
        <ProjectCard
          src="/Project4.svg"
          title="Website Development"
          subtitle="Loading Walla website"
        />
      </div>
    </div>
  );
};

export default OurProject;
