import About from "@/components/features/About";
import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import Hero from "@/components/features/Hero";
import OurProject from "@/components/features/OurProjects";
import Process from "@/components/features/Process";
import Technology from "@/components/features/Technology";
import Testimonials from "@/components/features/Testimonials";
import WeProvide from "@/components/features/WeProvide";
import AboutNumerics from "@/components/ui/AboutNumerics";

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/ui/1.svg",
      title: "Brand Identity Development:",
      description:
        "Create a unique brand image with tailored logos, visual styles, and brand guidelines that set you apart",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Brand Strategy & Positioning",
      description:
        "Define your market positioning and messaging to highlight your unique value and connect with your target audience.",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Creative Advertising Campaigns",
      description:
        "Design and execute multi-channel ad campaigns that boost awareness and drive results across digital and print platforms",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Consistent Brand Voice",
      description:
        "Establish and maintain a clear, memorable brand voice across all touchpoints for cohesive communication.",
    },
    {
      id: 5,
      icon: "/ui/4.svg",
      title: "Performance Analytics & Reporting",
      description:
        "Monitor campaign effectiveness with regular analytics and actionable insights for ongoing improvement.",
    },
    {
      id: 6,
      icon: "/ui/4.svg",
      title: "Rebranding & Brand Refresh",
      description:
        "Revitalize established brands through comprehensive rebranding, updated visuals, and repositioning strategies",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center overflow-x-hidden">
      {/* hero section */}
      <Hero
        title="Branding & Advertising"
        subTitle="Build Brands That Inspire. Launch Campaigns That Perform."
        description={
          "Shape a distinctive brand identity and reach your ideal audience with high-impact advertising that delivers real business growth."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/BrandingAndAdsBannerImage.svg"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_40px_100px_rgba(236,19,19,0.1)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Branding & Advertising"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="The Growth Engine for Modern Businesses with branding"
        subtitle="Benefits of Branding & Ads"
        href=""
        list={[
          "Boost recognition",
          "Build loyalty",
          "Increase trust",
          "Enable premium pricing",
          "Drive word-of-mouth",
          "Attract talent",
          "Ease product launches",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Branding & Advertising Process"
        process={[
          {
            id: 1,
            title: "Discovery & Research",
            description:
              "We analyze your business, audience, and competitors to uncover your unique edge. Insightful findings guide every step ahead.",
            image: "/branding/1.svg",
          },
          {
            id: 2,
            title: "Brand Strategy",
            description:
              "We define your brand’s voice, values, and positioning for clear, consistent messaging. This foundation shapes your identity and marketing efforts.",
            image: "/branding/2.svg",
          },
          {
            id: 3,
            title: "Visual Identity Creation",
            description:
              "Our designers craft logos, colors, and brand assets that embody your vision. Cohesive visuals help you stand out and connect with customers.",
            image: "/branding/3.svg",
          },
          {
            id: 4,
            title: "Campaign Planning",
            description:
              "We design advertising campaigns tailored to your goals and target market. Each plan sets the stage for creative, results-driven promotion.",
            image: "/branding/4.svg",
          },
          {
            id: 5,
            title: "Content Development",
            description:
              "We produce compelling copy and visuals to bring your brand story to life. Engaging content drives awareness and inspires action.",
            image: "/branding/5.svg",
          },
          {
            id: 6,
            title: "Launch & Promotion",
            description:
              "Your brand and ads roll out across key channels for maximum impact. We ensure timely execution and broad audience reach.",
            image: "/branding/6.svg",
          },
          {
            id: 7,
            title: "Analytics & Optimization",
            description:
              "We track performance, analyze results, and refine strategies. Continuous improvement ensures your brand and campaigns keep growing.",
            image: "/branding/7.svg",
          },
        ]}
      />

      {/* Our Trusted Clients */}
      <Clients />

      {/* Testimonial section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h4 className="font-avenir-20 opacity-60 text-white text-xs md:text-xl text-center">
          Testimonials
        </h4>
        <h1 className="font-geometric text-xl md:text-4xl text-white text-center my-4">
          100+ satisfied clients worldwide
        </h1>
        <Testimonials speed="normal" direction="right" testimonials={[]} />
        <Testimonials speed="normal" direction="left" testimonials={[]} />
      </div>

      {/* About Numerics */}
      <AboutNumerics />

      <div className="mt-12 md:mt-24" />
      {/* About Section */}
      <About />

      {/* Project section */}
      <div className="sm:mt-0 mt-12 w-screen h-auto flex justify-center">
        <OurProject />
      </div>

      {/* Faq Section */}
      <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
        <h1 className="font-geometric text-lg md:text-4xl text-white text-center my-4 ">
          Frequently Asked Questions
        </h1>
        <div className=" w-[80%] md:w-[60%] border-b-1 border-white mx-auto mb-8" />
        <FaqItem
          ques="What sets Pantheon Digital apart from other digital agencies?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="Do you run Meta Ads and Google PPC campaigns both?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="How does your SMO and SEO approach help my company?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
        <FaqItem
          ques="Will Pantheon Digital enable me to create and keep my app or website?"
          ans="Pantheon Digital builds digital ecosystems rather than just campaigns. Not only for short-term outcomes but also for long-term corporate effect, our holistic strategy integrates marketing, technology, and design."
        />
      </div>
    </div>
  );
};

export default page;
