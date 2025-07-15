"use client";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleServices = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isDropDownOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDropDownOpen]);

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:block sticky top-0 z-50 mt-10  shadow-xl shadow-black">
        <header className="bg-black flex flex-row p-4 items-center justify-between px-0 md:px-16">
          <Link href="/">
            <Image
              src="/Logo.svg"
              width="275"
              height="200"
              alt="Pantheon Digitals Logo"
            />
          </Link>

          {/* button list */}
          <div className="flex flex-row gap-3">
            <PrimaryButton
              href="About/"
              leftIcon="/About-Us.svg"
              type="outline"
              label="About Us"
            />
            <PrimaryButton
              onClick={toggleServices}
              href={""}
              leftIcon="/Services.svg"
              type="outline"
              label="Services"
              rightIcon={isDropDownOpen ? "/arrow-up.svg" : "/DownArrow.svg"}
            />
            <PrimaryButton
              href=""
              leftIcon="/Blogs.svg"
              type="outline"
              label="Blogs"
            />
            <PrimaryButton
              href=""
              leftIcon="/Contact-Us.svg"
              label="Contact Us"
              className="rounded-3xl"
            />
          </div>
        </header>
        {isDropDownOpen && (
          <div className="absolute flex w-screen h-screen justify-center bg-[#00000080] top-23 z-[51]">
            <div className="-top-0.5 w-[75.3vw] min-w-[761] h-[80.5vh] absolute bg-white z-[-1] rounded-3xl bg-[linear-gradient(to_right,_#FF0000,_#0095FF)]" />

            <div className="w-[75vw] min-w-[760] h-[80vh] bg-black  p-6 rounded-3xl shadow-xl/30 shadow-white text-center">
              <p className="font-avenir text-white font-base">
                Welcome to Pantheon Digital, where innovation meets excellence.
                As a leading player in the digital landscape, we specialize in
                crafting transformative solutions that empower businesses to
                thrive in the modern era.
              </p>

              {/* category */}
              <div className="grid grid-cols-3 mt-10 gap-6">
                {/* first service start */}
                <div className="bg-[#2A2A2A] min-w-[25%] min-h-[359] rounded-3xl p-4">
                  <h1 className="text-avenir-20">Digital Marketing</h1>
                  <div className="my-4 border-[0.5] border-white"></div>
                  <ul className="text-left mt-4 h-full styled-list">
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Social Media Management
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Google PPC</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Meta Ads Campaign
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">SEO & SMO</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Posts & Reels</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Branding & Advertising
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* first service close */}

                {/* second service start */}
                <div className="bg-[#2A2A2A] min-w-[25%] min-h-[359] rounded-3xl p-4">
                  <h1 className="text-avenir-20">Graphic Designing</h1>
                  <div className="my-4 border-[0.5] border-white"></div>
                  <ul className="text-left mt-4 h-full styled-list">
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">UX/UI Design</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Brochure & PPT</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Logo Design</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Posts & Banner</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* second service close */}

                {/* third service start */}
                <div className="bg-[#2A2A2A] min-w-[25%] min-h-[359] rounded-3xl p-4">
                  <h1 className="text-avenir-20">Tech & Software</h1>
                  <div className="my-4 border-[0.5] border-white"></div>
                  <ul className="text-left mt-4 h-full styled-list">
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">HRMS Software</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">CRM Software</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Website Development
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Application Development
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Software Development
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Cloud & DevOps Services
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* third service close */}
              </div>

              {/* nav footer */}
              <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="my-auto">
                  <div className="flex flex-row w-full justify-evenly">
                    <Image
                      src="/social-icons/iso1.svg"
                      alt="iso 1"
                      width="10"
                      height="10"
                      className="w-[15%] h-[15%]"
                    />
                    <Image
                      src="/social-icons/iso2.svg"
                      alt="iso 2"
                      width="10"
                      height="10"
                      className="w-[15%] h-[15%]"
                    />
                    <Image
                      src="/social-icons/aicpa.svg"
                      alt="aicpa"
                      width="10"
                      height="10"
                      className="w-[15%] h-[15%]"
                    />
                  </div>
                  {/* social icons */}
                  <div className="flex flex-row w-full justify-evenly mt-4">
                    <Image
                      src="/social-icons/facebook.svg"
                      alt="facebook icon"
                      width="10"
                      height="10"
                      className="w-[7%] h-[7%]"
                    />
                    <Image
                      src="/social-icons/x.svg"
                      alt="x icon"
                      width="10"
                      height="10"
                      className="w-[7%] h-[7%]"
                    />
                    <Image
                      src="/social-icons/insta.svg"
                      alt="instagram icon"
                      width="10"
                      height="10"
                      className="w-[7%] h-[7%]"
                    />
                    <Image
                      src="/social-icons/linkedin.svg"
                      alt="linkedin icon"
                      width="10"
                      height="10"
                      className="w-[7%] h-[7%]"
                    />
                    <Image
                      src="/social-icons/youtube.svg"
                      alt="youtube icon"
                      width="10"
                      height="10"
                      className="w-[7%] h-[7%]"
                    />
                    <Image
                      src="/social-icons/pinterest.svg"
                      alt="pinterest icon"
                      width="10"
                      height="10"
                      className="w-[7%] h-[7%]"
                    />
                  </div>
                </div>
                <div className="col-span-2 bg-[#2A2A2A] min-h-[120] rounded-3xl justify-between flex-row flex px-6 py-2 items-center">
                  <Link href="">
                    <span className="text-avenir-16 underline">
                      Privacy Policy
                    </span>
                  </Link>
                  <Link href="">
                    <span className="text-avenir-16 underline">
                      Terms & Condition
                    </span>
                  </Link>
                  <Link href="">
                    <span className="text-avenir-16 underline">
                      Cookie Policy
                    </span>
                  </Link>
                  <Link href="">
                    <span className="text-avenir-16 underline">Blogs</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}

      {/* Mobile Header */}
      <div className="md:hidden fixed w-full top-0 z-50">
        <header className="bg-black flex flex-row p-4 items-center justify-between sticky top-0 z-60">
          <Link href="/">
            <Image
              src="/Logo.svg"
              width="200"
              height="150"
              alt="Pantheon Digitals Logo"
              className={`
                duration-300
                ${isMobileMenuOpen ? "-translate-y-100" : "translate-y-0"}
                `}
            />
          </Link>

          <button onClick={toggleMobileMenu} className="text-white z-30">
            {isMobileMenuOpen ? (
              <Image
                src="/crossIcon.svg"
                width="20"
                height="20"
                className="w-[60] h-[60] absolute top-1 -right-1"
                alt="cross icon"
              />
            ) : (
              <Image
                src="/MenuIcon.svg"
                width="10"
                height="10"
                className="w-[100%] h-[100%]"
                alt="menu icon"
              />
            )}
          </button>
        </header>

        <div
          className={`absolute top-0 left-0 w-full h-screen bg-black z-40 p-4 pt-24  flex flex-col gap-4  duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <PrimaryButton
            href=""
            leftIcon="/About-Us.svg"
            type="outline"
            label="About Us"
            className="justify-normal"
          />
          <PrimaryButton
            onClick={toggleServices}
            href=""
            leftIcon="/Services.svg"
            type="outline"
            label="Services"
            rightIcon="/DownArrow.svg"
          />
          <PrimaryButton
            href=""
            leftIcon="/Blogs.svg"
            type="outline"
            label="Blogs"
            className="justify-normal"
          />
          <PrimaryButton
            href=""
            leftIcon="/Contact-Us.svg"
            label="Contact Us"
            className="justify-normal"
          />
          <div className="absolute bottom-10 flex flex-row w-full  justify-evenly mt-4 left-0">
            <Image
              src="/social-icons/facebook.svg"
              alt="facebook icon"
              width="10"
              height="10"
              className="w-[7%] h-[7%]"
            />
            <Image
              src="/social-icons/x.svg"
              alt="x icon"
              width="10"
              height="10"
              className="w-[7%] h-[7%]"
            />
            <Image
              src="/social-icons/insta.svg"
              alt="instagram icon"
              width="10"
              height="10"
              className="w-[7%] h-[7%]"
            />
            <Image
              src="/social-icons/linkedin.svg"
              alt="linkedin icon"
              width="10"
              height="10"
              className="w-[7%] h-[7%]"
            />
            <Image
              src="/social-icons/youtube.svg"
              alt="youtube icon"
              width="10"
              height="10"
              className="w-[7%] h-[7%]"
            />
            <Image
              src="/social-icons/pinterest.svg"
              alt="pinterest icon"
              width="10"
              height="10"
              className="w-[7%] h-[7%]"
            />
          </div>
        </div>

        {isDropDownOpen && (
          <div className="absolute flex w-full h-auto justify-center bg-black  z-[60] p-4 overflow-y-auto">
            <div className="w-full bg-black p-4 rounded-3xl ">
              <button
                onClick={toggleServices}
                className="text-white mb-4 flex gap-2"
              >
                <Image
                  src="/ArrowRight.svg"
                  alt="back arrow"
                  width="20"
                  height="10"
                  className="rotate-180"
                />
                <span>Go Back</span>
              </button>
              {/* logo */}
              <div className="flex items-center justify-center w-full my-8">
                <Image
                  src="/Logo.svg"
                  alt="Pantheon Digitals Logo"
                  width="0"
                  height="0"
                  className="w-[70%] h-[20%]"
                />
              </div>
              {/* description */}
              <p className="font-avenir text-white text-sm">
                Welcome to Pantheon Digital, where innovation meets excellence.
                As a leading player in the digital landscape, we specialize in
                crafting transformative solutions that empower businesses to
                thrive in the modern era.
              </p>

              <div className="grid grid-cols-1 mt-6 gap-4">
                {/* Categories */}

                {/* first service start */}
                <div className="bg-[#2A2A2A] min-w-[25%] rounded-3xl p-4">
                  <h1 className="text-avenir-20">Digital Marketing</h1>
                  <div className="my-4 border-[0.5] border-white"></div>
                  <ul className="text-left mt-4 h-full styled-list">
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Social Media Management
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Google PPC</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Meta Ads Campaign
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">SEO & SMO</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Posts & Reels</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Branding & Advertising
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* 1st service close */}

                {/* second service start */}
                <div className="bg-[#2A2A2A] min-w-[25%]  rounded-3xl p-4">
                  <h1 className="text-avenir-20">Graphic Designing</h1>
                  <div className="my-4 border-[0.5] border-white"></div>
                  <ul className="text-left mt-4 h-full styled-list">
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">UX/UI Design</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Brochure & PPT</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Logo Design</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">Posts & Banner</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* second service close */}

                {/* third service start */}
                <div className="bg-[#2A2A2A] min-w-[25%]  rounded-3xl p-4">
                  <h1 className="text-avenir-20">Tech & Software</h1>
                  <div className="my-4 border-[0.5] border-white"></div>
                  <ul className="text-left mt-4 h-full styled-list">
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">HRMS Software</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">CRM Software</span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Website Development
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Application Development
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Software Development
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className="flex flex-row justify-between items-center"
                      >
                        <span className="text-avenir-16">
                          Cloud & DevOps Services
                        </span>
                        <Image
                          src="/ArrowRight.svg"
                          alt="arrow right"
                          width="10"
                          height="10"
                          className="w-[10%] h-[10%]"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* third service close */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
