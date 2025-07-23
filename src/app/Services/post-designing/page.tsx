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
      title: "Social Media Posts",
      description:
        "Eye-catching designs for Instagram, Facebook, LinkedIn, and more. Perfect for daily updates, promotions, or storytelling.",
      icon: "/ui/1.svg",
    },
    {
      id: 2,
      title: "Event & Sale Banners",
      description:
        "Professionally crafted visuals for special offers, sales, and events. Designed to grab attention and boost conversions.",
      icon: "/ui/2.svg",
    },
    {
      id: 3,
      title: "Website Sliders & Headers",
      description:
        "Engaging banners optimized for websites and landing pages. Clean, responsive, and aligned with your brand aesthetics.",
      icon: "/ui/3.svg",
    },
    {
      id: 4,
      title: "Ad Creatives",
      description:
        "Custom graphics for Google, Meta, and other digital ads. Designed for high click-through and visual impact.",
      icon: "/ui/4.svg",
    },
    {
      id: 5,
      title: "Branded Templates",
      description:
        "Reusable design templates for consistent branding across all platforms. Helps your team maintain visual consistency with ease.",
      icon: "/ui/5.svg",
    },
    {
      id: 6,
      title: "Custom Dimensions & Formats",
      description:
        "Designs made to fit any platform or requirement. From print-ready banners to story formats—we’ve got it covered.",
      icon: "/ui/1.svg",
    },
  ];

  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      {/* hero section */}
      <Hero
        title="Post & Banner"
        subTitle="Creative visuals that grab attention and drive engagement."
        description={
          "We create visually striking posts and banners tailored for social media, websites, and campaigns. Each design aligns with your brand and delivers your message with impact."
        }
        buttonTitle={"Let’s Grow"}
        imageSrc={"/PostAndBannerImage.svg"}
        imageStyle="w-full sm:w-[60%] h-full"
      />

      {/* what we provide for web dev */}
      <div className="w-screen flex flex-col justify-center items-center bg-black rounded-b-4xl shadow-[0_0_100px_rgba(236,19,19,0.2)] translate-y-10 z-10">
        <WeProvide
          title={"What We Offer in Post & Banner services"}
          subtitle={"What we provide"}
          cardsData={cardsData}
        />
      </div>

      {/* Technologies */}
      <Technology
        heading=""
        icons={[]}
        title="Visuals that speak for your brand."
        subtitle="Benefits of Post & Banner designing"
        href=""
        list={[
          "Improved brand visibility",
          "Higher audience engagement",
          "Consistent visual identity",
          "Better click-through rates",
          "Clear message delivery",
          "Stronger campaign support",
        ]}
      />

      {/* Our process */}
      <Process
        heading="Our Post & Banner Designing Process"
        process={[
          {
            id: 1,
            title: "Brief & Goal Understanding",
            description:
              "We begin by discussing your campaign goals, target audience, and platform requirements. This helps us understand what message you want to convey and how to best represent your brand visually.",
            image: "/post-and-banners/1.svg",
          },
          {
            id: 2,
            title: "Concept & Copy Planning",
            description:
              "After understanding the brief, we develop creative concepts and draft compelling content or copy. This step ensures that the visuals align with the message and objective of the post or banner.",
            image: "/post-and-banners/2.svg",
          },
          {
            id: 3,
            title: "Design & Visual Creationt",
            description:
              "Our designers create visually appealing posts and banners that reflect your brand’s identity. We focus on layout, typography, and imagery to make each design eye-catching and effective.",
            image: "/post-and-banners/3.svg",
          },
          {
            id: 4,
            title: "Review & Feedback",
            description:
              "Once the design is ready, we share it for your review. Your suggestions and feedback are carefully considered to make the necessary refinements and improvements.",
            image: "/post-and-banners/4.svg",
          },
          {
            id: 5,
            title: "Final Approval & Delivery",
            description:
              "After final approval, we export the design in all required formats and sizes. Whether it's for social media, web, or print, your creatives are optimized for high performance.",
            image: "/post-and-banners/5.svg",
          },
          {
            id: 6,
            title: "Optional Edits & Support",
            description:
              "We offer support for any minor edits or adjustments you may need later. Our goal is to ensure your creative continues to perform effectively across platforms.",
            image: "/post-and-banners/6.svg",
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
