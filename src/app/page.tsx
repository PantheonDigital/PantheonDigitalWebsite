import About from "@/components/features/About";
import ChooseUs from "@/components/features/ChooseUs";
import Clients from "@/components/features/Clients";
import FaqItem from "@/components/features/FaqItem";
import OurProject from "@/components/features/OurProjects";
import Testimonials from "@/components/features/Testimonials";
import AboutNumerics from "@/components/ui/AboutNumerics";
import Card from "@/components/ui/Card";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* starting of main section */}
      <main className="relative w-full h-full min-h-[100vh] flex flex-col row-start-2 items-center">
        <div className="w-[90%] h-auto rounded-b-4xl flex flex-col justify-center items-center mt-24 md:mt-44">
          {/* hero section background image */}
          <Image
            src="/BackgroundImageHomePage.svg"
            alt="Home Page Background Banner"
            width="0"
            height="0"
            className="w-screen h-screen absolute -z-10 top-[-3%]  object-cover mask-b-from-90% mask-b-to-100%"
          />
          <h1 className="font-geometric font-bold text-xl sm:text-4xl text-white text-center md:mt-0 ">
            Powering possibility through digital innovation
          </h1>
          <p className="text-white font-avenir-regular sm:text-xl text-xs  w-[80vw] leading-6 md:leading-8  mt-6 md:mt-12 text-center">
            At Pantheon Digital, we don't just adapt to the future — we create
            it. Pantheon Digital is where the future is imagined, engineered,
            and launched.
          </p>
        </div>

        <PrimaryButton
          className={"my-12 md:my-18"}
          label={"Get with us"}
          href={""}
          type="variant2"
        />

        {/* informational card */}
        <div className="w-screen relative bg-gradient-to-b from-[#0000] to-[#000]  h-auto rounded-b-4xl flex items-center justify-center pb-8 shadow-2xl/10 shadow-[#F61313] md:pb-32 mt-8 md:pt-8 z-40 translate-y-12">
          <div className="w-[90%] md:w-[80%] md:grid md:grid-cols-2 sm:items-center place-items-center flex flex-col gap-8 ">
            <Card
              href="/Services/seo/"
              ckey={1}
              imgHref="/mobile.svg"
              title="Digital Marketing, SEO & Social media management"
              description="Embark on a journey into cutting-edge technology with Pantheon Digital. Our specialized team transforms your concepts into reality, prioritizing excellence in both quality & functionality."
            />
            <Card
              href=""
              ckey={2}
              imgHref="/coding.svg"
              title="Custom Software designing & Development"
              description="Elevate your online presence with Pantheon Digital's exceptional design services. Our skilled experts ensure that your digital footprint not only stands out but leaves a lasting impression."
            />
            <Card
              href="/Services/crm"
              ckey={3}
              imgHref="/keyboard-open.svg"
              title="HRMS & CRM Software Services"
              description="Simplify and streamline your HR processes with Pantheon Digital's robust HRMS software. Tailored to meet your unique needs, our Human Resource Management Services empower businesses with efficient workforce management."
            />
            <Card
              href=""
              ckey={4}
              imgHref="/airdrop.svg"
              title="Cloud & DevOps services"
              description="Forge and strengthen your customer relationships with Pantheon Digital's CRM Software. Our software is meticulously designed to enhance communication, streamline interactions, and ensure that your business thrives on strong connections."
            />
          </div>
        </div>

        {/* about us section */}
        <About />

        {/* about numerics */}
        <AboutNumerics />

        {/* Reason to choose use section */}
        <ChooseUs />

        {/* Project section */}
        <div className="sm:mt-0 -mt-160 w-screen h-auto flex justify-center">
          <OurProject />
        </div>

        {/* Testimonial section */}
        <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
          <h4 className="font-avenir-medium opacity-60 text-white text-xs md:text-xl text-center">
            Testimonials
          </h4>
          <h1 className="font-geometric font-bold text-xl md:text-4xl text-white text-center my-4">
            100+ satisfied clients worldwide
          </h1>
          <Testimonials speed="normal" direction="right" testimonials={[]} />
          <Testimonials speed="normal" direction="left" testimonials={[]} />
        </div>

        {/* Our Trusted Clients */}
        <Clients />

        {/* Faq Section */}
        <div className="w-[90%] md:w-[80%] mt-12 md:mt-24">
          <h1 className="font-geometric font-bold text-lg md:text-4xl text-white text-center my-4 ">
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
      </main>
    </>
  );
}
