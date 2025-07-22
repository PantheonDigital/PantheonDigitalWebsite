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
      title: "Social Media Post Creation",
      description:
        "Share thumb-stopping content that speaks your audience’s language and drives growth.",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Reels Production",
      description:
        "Leverage trending reel formats and creative edits to keep your brand top-of-mind.",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Platform Strategy",
      description:
        "Custom strategies for platforms like Instagram, Facebook, and YouTube that maximize reach.",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Performance Tracking",
      description:
        "Detailed analytics to measure what’s working and optimize future content.",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      {/* hero section */}
      <Hero
        title="Post & Reels"
        subTitle="Captivate and Connect with Eye-Catching Posts & Reels"
        description={
          "Unleash the power of social storytelling with creative visuals and messaging that boost engagement and amplify your brand voice."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/Posts&ReelsImageBanner.svg"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_0_100px_rgba(236,19,19,0.2)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Post & Reels"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="The Growth Engine for Modern Businesses—Posts & Reels"
        subtitle="Benefits of Post & Reels"
        href=""
        list={[
          "Expand brand reach",
          "Boost engagement",
          "Tell your story quickly",
          "Use trending formats",
          "Grow followers",
          "Drive traffic",
          "Showcase offers creatively",
          "Get real-time feedback",
          "Build brand trust",
          "Gain higher visibility",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Post & Reels Process"
        process={[
          {
            id: 1,
            title: "Strategy & Ideation",
            description:
              "We start by understanding your goals and target audience, then brainstorm creative post and reel concepts based on the latest trends and what resonates with your community.",
            image: "/postAndReels/1.svg",
          },
          {
            id: 2,
            title: "Content Planning",
            description:
              "A tailored content calendar is built to ensure consistent posting, aligning each piece with your campaigns, special dates, and the best times to maximize results.",
            image: "/postAndReels/2.svg",
          },
          {
            id: 3,
            title: "Scripting & Storyboarding",
            description:
              "We draft concise scripts and outline the visual flow for every post or reel, focusing on catchy hooks and clear calls to action to keep viewers engaged.",
            image: "/postAndReels/3.svg",
          },
          {
            id: 4,
            title: "Design & Production",
            description:
              "Our team creates high-quality visuals—photos, videos, and graphics—then enhances them with eye-catching edits, brand elements, and trending music.",
            image: "/postAndReels/4.svg",
          },
          {
            id: 5,
            title: "Review & Optimization",
            description:
              "Drafts are reviewed carefully, refining visuals and messaging for clarity and impact, and making sure every detail meets platform standards.",
            image: "/postAndReels/5.svg",
          },
          {
            id: 6,
            title: "Scheduling & Publishing",
            description:
              "Your content is scheduled for optimal times and published across chosen platforms, ensuring each post and reel gets the attention it deserves.",
            image: "/postAndReels/6.svg",
          },
          {
            id: 7,
            title: "Analytics & Improvement",
            description:
              "We track key metrics after publishing, analyze what worked best, and use those learnings to continuously refine your future content strategy.",
            image: "/postAndReels/7.svg",
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
      <div className="sm:mt-0 -mt-160 w-screen h-auto flex justify-center">
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
