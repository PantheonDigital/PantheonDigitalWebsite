import About from "@/components/features/About";
import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import Hero from "@/components/features/Hero";
import OurProject from "@/components/features/OurProjects";
import Process from "@/components/features/Process";
import Technology from "@/components/features/Technology";
import Testimonials from "@/components/features/Testimonials";
import WeProvide from "@/components/features/WeProvide";
import Why from "@/components/features/Why";
import AboutNumerics from "@/components/ui/AboutNumerics";

const page = () => {
  const cardsData = [
    {
      id: 1,
      icon: "/ui/1.svg",
      title: "Keyword Research & Strategy",
      description:
        "We pinpoint high-intent, high-value keywords your ideal customers are searching for—including competitor terms, trends, and commercial intent phrases—to maximize targeting and results.",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Ad Copywriting & Creative",
      description:
        "We write ad copy that drives clicks and conversions, matches your brand, addresses user needs, and meets Google Ads guidelines.",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Targeting & Campaign Setup",
      description:
        "We organize campaigns by audience and intent, using advanced targeting and scheduling to reach the right people at the right time.",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Bid & Budget Optimization",
      description:
        "We continually optimize bidding and budgets to lower CPC and boost ROAS, ensuring your ad spend is used efficiently.",
    },
    {
      id: 5,
      icon: "/ui/5.svg",
      title: "A/B Testing & Experiments",
      description:
        "We run structured A/B tests on ads, landing pages, targeting, and bidding to find what works best and continually optimize performance.",
    },
    {
      id: 6,
      icon: "/ui/4.svg",
      title: "Conversion Tracking & Analytics",
      description:
        "We link Google Ads with analytics and CRM tools to track all key actions, accurately attribute results, and optimize campaigns with real data.",
    },
    {
      id: 7,
      icon: "/ui/3.svg",
      title: "eCommerce Google Shopping Ads",
      description:
        "For eCommerce, we manage Google Shopping campaigns—optimizing feeds, titles, and bids to boost product visibility and drive high-converting traffic.",
    },
    {
      id: 8,
      icon: "/ui/1.svg",
      title: "Local Search & Google Maps Ads",
      description:
        "We optimize and manage Google Shopping campaigns to increase product visibility and attract high-converting traffic.",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      {/* hero section */}
      <Hero
        title="Performance Advertising That Works"
        subTitle="A Day in the Life of Your Google Ads"
        description={
          "We create data-driven Google Ads campaigns that attract the right audience and turn clicks into conversions — fast, scalable, and built for growth."
        }
        buttonTitle={"Create with us"}
        imageSrc={"/GooglePPCHomeBannerImage.svg"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_0_100px_rgba(236,19,19,0.2)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Google PPC"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="The Smartest Way to Get Found on Google"
        subtitle="Benefits of Google PPC"
        href=""
        list={[
          "Instant Visibility at the Top of Google",
          "Highly Targeted Reach",
          "Pay Only for Results",
          "Trackable & Measurable",
          "Fast & Scalable Growth",
          "Remarketing to Interested Users",
          "Full Control Over Budget",
          "Quick Testing & Optimization",
        ]}
      />

      {/* Why */}
      <Why
        title="Why Google PPC?"
        points={[
          {
            id: 1,
            icon: "/google-ppc/why/1.svg",
            point: "Certified Google Ads Partner",
          },
          {
            id: 2,
            icon: "/google-ppc/why/2.svg",
            point: "Track Record of Proven ROI",
          },
          {
            id: 3,
            icon: "/google-ppc/why/3.svg",
            point: "Smart Campaign Structuring",
          },
          {
            id: 4,
            icon: "/google-ppc/why/4.svg",
            point: "Conversion-First Thinking",
          },
          {
            id: 5,
            icon: "/google-ppc/why/5.svg",
            point: "Real-Time Reporting Dashboard",
          },
          {
            id: 6,
            icon: "/google-ppc/why/6.svg",
            point: "Transparent, No-Fluff Communication",
          },
        ]}
        image="/google-ppc/whyImage.svg"
      />

      {/* Our process */}
      <Process
        heading="Our Google Ads Process"
        process={[
          {
            id: 1,
            title: "Discovery & Audit",
            description:
              "We start by deeply understanding your brand—mission, audience, competitors, and identity—through audits and research. Using these insights, we create a tailored social media strategy focused on your business goals, like awareness, engagement, leads, or community building.",
            image: "/google-ppc/process/1.svg",
          },
          {
            id: 2,
            title: "Keyword + Competitor Research",
            description:
              "We build a purposeful content plan aligned with your campaigns, launches, and audience interests—defining themes, post types, tone, and frequency. This is organized in a monthly content calendar for consistent and relevant posts across all platforms.",
            image: "/google-ppc/process/2.svg",
          },
          {
            id: 3,
            title: "Campaign Architecture",
            description:
              "Our team transforms ideas into high-quality creative assets—graphics, Reels, videos, and engaging captions—ensuring every post matches your brand’s tone and identity. We share content for your feedback and only publish after your approval.",
            image: "/google-ppc/process/3.svg",
          },
          {
            id: 4,
            title: "Ad Copy + Creative",
            description:
              "We use scheduling tools like Meta Business Suite, Buffer, or Later to post approved content at optimal times, ensuring every piece is timely, error-free, and tailored for each platform. Your Instagram, LinkedIn, and Twitter channels stay active and consistent—no effort needed from you",
            image: "/google-ppc/process/4.svg",
          },
          {
            id: 5,
            title: "Launch & Monitor",
            description:
              "We actively monitor and respond to comments, mentions, DMs, and tags to foster real connections and build loyalty. Our team handles FAQs, escalates key issues, and always maintains your brand’s voice, turning followers into dedicated customers and advocates",
            image: "/google-ppc/process/5.svg",
          },
          {
            id: 6,
            title: "Optimise & Scale",
            description:
              "We track every post and campaign using analytics tools, sending you monthly reports on reach, engagement, growth, and top content. We use these insights to refine your strategy and strengthen your social media presence each month.",
            image: "/google-ppc/process/6.svg",
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
