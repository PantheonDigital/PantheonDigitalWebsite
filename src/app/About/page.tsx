import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import Hero from "@/components/features/Hero";
import MissionVision from "@/components/features/MissionVision";
import Testimonials from "@/components/features/Testimonials";
import WeProvide from "@/components/features/WeProvide";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="mt-24 flex flex-col items-center w-screen">
        {/* navigation bar */}

        {/* Hero Section */}
        <Hero
          buttonTitle="Contact Us"
          title={"About us"}
          description={
            "Welcome to Pantheon Digital, where innovation meets excellence. As a leading player in the digital landscape, we specialize in crafting transformative solutions that empower businesses to thrive in the modern era."
          }
          imageSrc={"/AboutUsBackgroundImage.svg"}
          imageStyle=""
        />

        {/* descriptive section */}
        <div className="w-[90%] md:w-[80%] h-auto flex flex-col md:flex-row justify-center items-start gap-6 md:gap-24">
          {/* left */}
          <div className="md:w-[50%] mt-12">
            <h2 className="text-white font-avenir font-extrabold text-xl md:text-3xl text-center md:text-left">
              Nurturing Tomorrow: Crafting Digital Journeys with Passion
            </h2>
            <p className="text-white font-avenir text-sm md:text-xl font-medium opacity-80 mt-8 text-center md:text-left">
              We craft smart, scalable digital solutions that empower businesses
              to lead in a fast-changing world.
            </p>
          </div>

          {/* right images */}
          <div className="md:w-[60%] flex gap-4 mt-12 md:mt-0 items-center justify-center">
            <Image
              src="/AboutDescImage1.svg"
              alt="description image 1"
              width="252"
              height="410"
              className="w-[50%] h-auto"
            />
            <Image
              src="/AboutDescImage2.svg"
              alt="description image 1"
              width="252"
              height="410"
              className="translate-y-10 w-[50%] h-auto"
            />
          </div>
        </div>

        {/* Our Mission and Vision */}
        <MissionVision />

        {/* What We Provide */}
        <WeProvide
          title="We provide truly prominent IT solutions."
          subtitle="What we provide"
          cardsData={AboutWhatWeProvideData}
        />

        {/* Clients */}
        <Clients />

        {/* Testimonials */}
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

        {/* Faq section */}
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
    </>
  );
};

export default AboutUs;

const AboutWhatWeProvideData = [
  {
    id: 1,
    icon: "/About-WhatWeProvide/1.svg",
    title: "Leading with Innovation",
    description:
      "Pantheon Digital is a forward-thinking company that blends cutting-edge tech with fresh ideas to stay ahead of trends in the digital space, ensuring businesses adapt and lead in the industry.",
  },
  {
    id: 2,
    icon: "/About-WhatWeProvide/2.svg",
    title: "Crafted with Passion",
    description:
      "Our digital work is a craft, focusing on quality, precision, and a smooth user experience. We take pride in every detail, from code to website design, ensuring a seamless experience.",
  },
  {
    id: 3,
    icon: "/About-WhatWeProvide/3.svg",
    title: "You Come First",
    description:
      "We view you as a partner, understanding your business, goals, and challenges. We create a tailored plan, aiming for your success every step of the way.",
  },
  {
    id: 4,
    icon: "/About-WhatWeProvide/4.svg",
    title: "Built to Grow with You",
    description:
      "Our solutions are designed to scale with your business's digital needs, providing flexible systems and strategies for rapid growth and support throughout your journey.",
  },
  {
    id: 5,
    icon: "/About-WhatWeProvide/5.svg",
    title: "Flexible and Fast-Moving",
    description:
      "We adapt quickly to the digital world, staying in sync with your goals and staying in sync with market changes, ensuring we stay in sync with your priorities.",
  },
  {
    id: 6,
    icon: "/About-WhatWeProvide/6.svg",
    title: "Driven by Data, Inspired by Creativity",
    description:
      "We prioritize insights and data-driven decisions for creative solutions, ensuring they not only look great but also deliver measurable impact.",
  },
  {
    id: 7,
    icon: "/About-WhatWeProvide/7.svg",
    title: "Support You Can Rely On",
    description:
      "Our role extends beyond project launch, providing ongoing support, performance checks, updates, and advice, ensuring smooth and successful project operations.",
  },
  {
    id: 8,
    icon: "/About-WhatWeProvide/8.svg",
    title: "Solving Problems with Creativity",
    description:
      "We specialize in tailoring solutions to your unique business needs, focusing on complex problems and creative problem-solving rather than a one-size-fits-all approach.",
  },
  {
    id: 9,
    icon: "/About-WhatWeProvide/9.svg",
    title: "Real Results, Not Just Pretty Designs",
    description:
      "Our focus is on achieving meaningful outcomes for your business, such as increased traffic, engagement, and sales, rather than just beautiful design.",
  },
];
