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
      title: "Audience Research & Targeting",
      description:
        "We find high-intent, high-value keywords your customers are searching for—covering competitor terms, trends, negatives, and commercial intent phrases to ensure precise targeting.",
    },
    {
      id: 2,
      icon: "/ui/2.svg",
      title: "Campaign Strategy & Funnel Design",
      description:
        "We write ad headlines and descriptions that capture clicks and drive conversions, always matching your brand voice, addressing user pain points, and including clear calls to action—all in line with Google Ads policies",
    },
    {
      id: 3,
      icon: "/ui/3.svg",
      title: "Ad Creative & Copywriting",
      description:
        "We separate branded, non-branded, competitor, and remarketing traffic, using advanced targeting and scheduling to reach the right audience at the right time.",
    },
    {
      id: 4,
      icon: "/ui/4.svg",
      title: "Ad Setup & Optimization",
      description:
        "We continuously optimize bidding and budgets to lower CPC and boost ROAS, ensuring your ad spend is always efficient.",
    },

    {
      id: 5,
      icon: "/ui/5.svg",
      title: "Analytics & Reporting",
      description:
        "We run structured A/B tests on creatives, landing pages, targeting, and bidding to identify and scale what works best, ensuring continuous campaign improvement.",
    },
    {
      id: 6,
      icon: "/ui/4.svg",
      title: "Retargeting & Custom Audiences",
      description:
        "We connect Google Ads with analytics and CRM tools to track key actions, accurately attribute results, and optimize campaigns using real data.",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      {/* hero section */}
      <Hero
        title="Grow Your Business with High Converting Meta Ads"
        subTitle="A Day in the Life of Your Meta Ads"
        description={
          "Expertly crafted Facebook & Instagram ad campaigns to drive real results – more leads, sales, and ROI."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/MetaAdsBannerImage.svg"}
        imageStyle="w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen mt-24 md:mt-0 flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_0_100px_rgba(236,19,19,0.2)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Application Development"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="Meta Ads: The Growth Engine for Modern Businesses"
        subtitle="Benefits of Meta Ads"
        href=""
        list={[
          "Highly Targeted Advertising",
          "Huge Audience Reach",
          "Cost-Effective for Any Budget",
          "Performance-Driven ROI",
          "Advanced Analytics & Insights",
          "Powerful Retargeting",
          "Smart Automation & AI Tools",
          "Full Funnel Campaigns",
        ]}
      />

      {/* Why */}
      <Why
        title="Why Meta Ads"
        points={[
          {
            id: 1,
            icon: "/meta-ads/why/1.svg",
            point: "Unmatched Targeting Capabilities",
          },
          {
            id: 2,
            icon: "/meta-ads/why/2.svg",
            point: "Massive Reach",
          },
          {
            id: 3,
            icon: "/meta-ads/why/3.svg",
            point: "Visual & Engaging Ad Formats",
          },
          {
            id: 4,
            icon: "/meta-ads/why/4.svg",
            point: "Cost-Effective & Scalable",
          },
          {
            id: 5,
            icon: "/meta-ads/why/5.svg",
            point: "Real-Time Analytics & Optimization",
          },
          {
            id: 6,
            icon: "/meta-ads/why/6.svg",
            point: "Retargeting Power",
          },
          {
            id: 7,
            icon: "/meta-ads/why/7.svg",
            point: "AI-Powered Automation",
          },
          {
            id: 8,
            icon: "/meta-ads/why/8.svg",
            point: "Perfect for eCommerce",
          },
          {
            id: 9,
            icon: "/meta-ads/why/9.svg",
            point: "Great for Community Building",
          },
        ]}
        image="/meta-ads/WhyMetaImage.svg"
      />

      {/* Our process */}
      <Process
        heading="Our Meta Ads Process"
        process={[
          {
            id: 1,
            title: "Discovery Call",
            description:
              "We start with a personalized 20–30 minute call to understand your business, goals, audience, and current marketing efforts. This helps us tailor a strategy aligned with your growth objectives.",
            image: "/meta-ads/process/1.svg",
          },
          {
            id: 2,
            title: "Account Audit",
            description:
              "If you're already running Meta Ads, we’ll audit your ad account to identify what’s working, what’s not, and uncover wasted ad spend or missed opportunities. Expect a detailed performance breakdown.",
            image: "/meta-ads/process/2.svg",
          },
          {
            id: 3,
            title: "Strategy & Funnel Mapping",
            description:
              "Based on the discovery and audit, we craft a custom advertising strategy and full-funnel plan — from awareness to conversion — outlining targeting, ad stages, messaging, and budget allocation.",
            image: "/meta-ads/process/3.svg",
          },
          {
            id: 4,
            title: "Ad Creative Development",
            description:
              "Our creative team designs scroll-stopping visuals and writes persuasive copy tailored to your audience. We handle everything from static image ads to carousels, videos, and Instagram stories.",
            image: "/meta-ads/process/4.svg",
          },
          {
            id: 5,
            title: "Launch & Monitor",
            description:
              "We launch your campaigns with structured A/B testing to validate creatives, audiences, and placements. During this stage, we closely monitor metrics to ensure a smooth and successful rollout.",
            image: "/meta-ads/process/5.svg",
          },
          {
            id: 6,
            title: "Optimise & Scale",
            description:
              "Using performance data, we optimize campaigns to improve ROAS (Return on Ad Spend). We test new angles, audiences, and creatives while gradually scaling what works best for maximum results.",
            image: "/meta-ads/process/6.svg",
          },
          {
            id: 7,
            title: "Monthly Reporting",
            description:
              "Every month, you’ll receive a detailed report covering KPIs like reach, clicks, conversions, and spend — along with our insights, recommendations, and next steps for continuous growth.",
            image: "/meta-ads/process/7.svg",
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
