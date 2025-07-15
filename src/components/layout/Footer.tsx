import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../ui/PrimaryButton";

const Footer = () => {
  return (
    <>
      {/* newsletter section / direct contact secion. */}
      <div className="w-[90%] md:w-[80%] mx-auto bg-[#202020] rounded-t-3xl md:rounded-t-5xl h-auto py-8 md:py-16 mt-24 flex flex-col gap-8 items-center justify-center">
        <h4 className="font-geometric text-white text-xs md:text-2xl font-extrabold">
          We’re Delivering the best customer Experience
        </h4>
        <PrimaryButton
          label="+91 93547 61565"
          type="normal"
          href=""
          className="rounded-lg"
        />
      </div>

      {/* main footer section for full page */}
      <footer className="flex flex-col items-center rounded-t-3xl md:rounded-t-5xl shadow-[0_0px_200px_rgba(246,19,19,.3)] w-screen sm:h-auto md:h-screen bg-linear-to-br from-[#000] via-[#000] to-[#F61313]">
        <Image
          src="/Logo.svg"
          alt=""
          width="0"
          height="0"
          className="md:w-[25%] md:h-[20%] w-[240] h-[30] my-8"
        />
        <h1 className="mx-10 text-center font-avenir text-base text-white">
          Passionate digital crafting, limitless tomorrows. Join us in shaping
          innovative experiences with creativity and dedication.
        </h1>

        {/* main div for services */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-cols-fr w-[80%] mt-16">
          {/* section 1 */}
          <div className="h-auto text-center md:text-left">
            <h4 className="font-avenir text-white text-lg font-extrabold text-center md:text-left">
              Digital Marketing
            </h4>
            <ul className="styled-list">
              <li>
                <Link href="">Social management</Link>
              </li>
              <li>
                <Link href="">Google PPC</Link>
              </li>
              <li>
                <Link href="">Meta Ads</Link>
              </li>
              <li>
                <Link href="">SEO & SMO</Link>
              </li>
              <li>
                <Link href="">Post & Reels</Link>
              </li>
              <li>
                <Link href="">Branding & Advertising</Link>
              </li>
            </ul>
          </div>
          {/* section 2 */}
          <div className="h-auto text-center md:text-left mt-8">
            <h4 className="font-avenir text-white text-lg font-extrabold text-center md:text-left">
              Graphics
            </h4>
            <ul className="styled-list">
              <li>
                <Link href="">UI/UX Designing</Link>
              </li>
              <li>
                <Link href="">Graphics Designing</Link>
              </li>
              <li>
                <Link href="">Brochure Designing</Link>
              </li>
              <li>
                <Link href="">Logo Designing</Link>
              </li>
              <li>
                <Link href="">Post Designing</Link>
              </li>
            </ul>
          </div>
          {/* section 3 */}
          <div className="h-auto text-center md:text-left mt-8">
            <h4 className="font-avenir text-white text-lg font-extrabold text-center md:text-left">
              Software
            </h4>
            <ul className="styled-list">
              <li>
                <Link href="">HRMS Software</Link>
              </li>
              <li>
                <Link href="">CRM Software</Link>
              </li>
              <li>
                <Link href="">Website Development</Link>
              </li>
              <li>
                <Link href="">Application Development</Link>
              </li>
              <li>
                <Link href="">Software Development</Link>
              </li>
              <li>
                <Link href="">Cloud & DevOps Services</Link>
              </li>
            </ul>
          </div>

          {/* section 4 */}
          <div className="h-full mt-4">
            {/* row 1 for iso certificates */}
            <div className="flex flex-row justify-evenly">
              <Image
                src="/social-icons/iso1.svg"
                alt="iso 1"
                width="10"
                height="10"
                className="w-[25%] h-[25%]"
              />
              <Image
                src="/social-icons/iso2.svg"
                alt="iso 2"
                width="10"
                height="10"
                className="w-[25%] h-[25%]"
              />
              <Image
                src="/social-icons/aicpa.svg"
                alt="aicpa"
                width="10"
                height="10"
                className="w-[25%] h-[25%]"
              />
            </div>

            {/* row 2 for social icons */}
            <div className="flex flex-row justify-between mt-8">
              <Image
                src="/social-icons/facebook.svg"
                alt="facebook icon"
                width="10"
                height="10"
                className="w-[9%] h-[9%]"
              />
              <Image
                src="/social-icons/x.svg"
                alt="x icon"
                width="10"
                height="10"
                className="w-[9%] h-[9%]"
              />
              <Image
                src="/social-icons/insta.svg"
                alt="instagram icon"
                width="10"
                height="10"
                className="w-[9%] h-[9%]"
              />
              <Image
                src="/social-icons/linkedin.svg"
                alt="linkedin icon"
                width="10"
                height="10"
                className="w-[9%] h-[9%]"
              />
              <Image
                src="/social-icons/youtube.svg"
                alt="youtube icon"
                width="10"
                height="10"
                className="w-[9%] h-[9%]"
              />
              <Image
                src="/social-icons/pinterest.svg"
                alt="pinterest icon"
                width="10"
                height="10"
                className="w-[9%] h-[9%]"
              />
            </div>
          </div>
        </div>

        {/* for privacy policy and terms and condition */}
        <div className="w-[90%] md:w-[80%] flex justify-evenly mt-16">
          <h4 className="text-white font-avenir font-semibold text-xs md:text-xl md:px-2 py-8 text-center underline">
            Privacy & Policy
          </h4>
          <h4 className="text-white font-avenir font-semibold text-xs md:text-xl md:px-2 py-8 text-center underline">
            Terms & Condition
          </h4>
          <h4 className="text-white font-avenir font-semibold text-xs md:text-xl md:px-2 py-8 text-center underline">
            Cookie Policy
          </h4>
          <h4 className="text-white font-avenir font-semibold text-xs md:text-xl md:px-2 py-8 text-center underline">
            Blogs
          </h4>
        </div>

        {/* for copywrite and other details */}
        <div className="bg-transparent border-none md:border-1 md:bg-black rounded-full w-[80%]  md:mb-16 border-primary">
          <h4 className="text-white font-avenir font-normal font-base px-1 py-8 text-center">
            CIN: U74999DL2021PTC379806 © Copyright 2016 - 2025, INT. All rights
            reserved.
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
