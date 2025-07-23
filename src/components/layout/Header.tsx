"use client";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileDropDown, setIsMobileDropDown] = useState<boolean>(false);

  const toggleServices = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileDropDown(!isMobileDropDown);
  };

  useEffect(() => {
    console.log("isMobileDropDown changed to:", isMobileDropDown);
  }, [isMobileDropDown]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeDropDownMenu = () => {
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    if (isDropDownOpen) {
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
      <div className="hidden lg:block sticky top-0 z-50 mt-10 shadow-xl gap-32 shadow-black">
        <header className="bg-black flex flex-row p-4 items-center justify-between px-0 md:px-16">
          <Link href="/">
            <Image
              src="/Logo.svg"
              width="0"
              height="0"
              className="w-[275px] h-auto mr-32"
              alt="Pantheon Digitals Logo"
            />
          </Link>

          {/* button list */}
          <div className="flex flex-row gap-3">
            <PrimaryButton
              onClick={closeDropDownMenu}
              href="/About/"
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
              className={isDropDownOpen ? "bg-[#868686]" : "bg-transparent"}
            />
            <PrimaryButton
              href=""
              onClick={closeDropDownMenu}
              leftIcon="/Blogs.svg"
              type="outline"
              label="Blogs"
            />
            <PrimaryButton
              href=""
              onClick={closeDropDownMenu}
              leftIcon="/Contact-Us.svg"
              label="Contact Us"
              className="rounded-3xl"
            />
          </div>
        </header>

        {/* dropdown body -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-= */}
        <button
          onClick={() => setIsDropDownOpen(false)}
          className={`${
            isDropDownOpen
              ? "opacity-100 translate-y-3 block"
              : "opacity-0 -translate-y-3 hidden"
          } absolute flex w-screen h-screen justify-center duration-300 bg-[#00000080] top-23 z-[51]`}
        >
          <div className="-top-0.5 w-[75.3vw] min-w-[761] h-[80.5vh] absolute bg-white z-[-1] rounded-3xl bg-[linear-gradient(to_right,_#FF0000,_#0095FF)]" />

          <div className="w-[75vw] min-w-[760] h-[80vh] .macos-scrollbar overflow-y-scroll bg-black  p-6 rounded-3xl shadow-xl/30 shadow-white text-center">
            <p className="font-avenir-regular text-white text-base ">
              Welcome to Pantheon Digital, where innovation meets excellence. As
              a leading player in the digital landscape, we specialize in
              crafting transformative solutions that empower businesses to
              thrive in the modern era.
            </p>

            {/* category */}
            <div className="grid grid-cols-3 mt-10 gap-6">
              {/* first service start */}
              <div className="bg-[#2A2A2A] min-w-[25%] min-h-[359] rounded-3xl p-4">
                <h1 className="font-avenir-bold text-white text-xl font-bold text-left">
                  Digital Marketing
                </h1>
                <div className="my-4 border-[0.5] border-white"></div>
                <ul className="text-left mt-4 h-full styled-list">
                  <li>
                    <Link
                      onClick={() => setIsDropDownOpen(false)}
                      href="/Services/social-management/"
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Social Media Management
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/google-ppc/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white ">
                        Google PPC
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/meta-ads/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Meta Ads Campaign
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/seo/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        SEO & SMO
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/posts-and-reels/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Posts & Reels
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/branding-and-ads/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Branding & Advertising
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* first service close */}

              {/* second service start */}
              <div className="bg-[#2A2A2A] min-w-[25%] min-h-[359] rounded-3xl p-4">
                <h1 className="font-avenir-bold font-bold text-xl text-left text-white">
                  Graphic Designing
                </h1>
                <div className="my-4 border-[0.5] border-white"></div>
                <ul className="text-left mt-4 h-full styled-list">
                  <li>
                    <Link
                      href="/Services/ui-ux"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        UX/UI Design
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/brochure-and-ppt/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Brochure & PPT
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/logo-designing/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Logo Design
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/post-designing/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Posts & Banner
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* second service close */}

              {/* third service start */}
              <div className="bg-[#2A2A2A] min-w-[25%] min-h-[359] rounded-3xl p-4">
                <h1 className="font-avenir-bold font-bold text-xl text-left text-white">
                  Tech & Software
                </h1>
                <div className="my-4 border-[0.5] border-white"></div>
                <ul className="text-left mt-4 h-full styled-list">
                  <li>
                    <Link
                      href="https://www.zfour.in/"
                      target="_blank"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        HRMS Software
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/crm"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        CRM Software
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/website-development/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Website Development
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/application-development"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Application Development
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/software-development/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Software Development
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Services/cloud-and-devops/"
                      onClick={() => setIsDropDownOpen(false)}
                      className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1 group"
                    >
                      <span className="font-avenir-medium font-medium text-base text-white">
                        Cloud & DevOps Services
                      </span>
                      <Image
                        src="/ArrowRight.svg"
                        alt="arrow right"
                        width="10"
                        height="10"
                        className="w-[10%] h-[10%] opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 duration-300"
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
                  <Link
                    className="w-[7%] h-[7%] hover:scale-120 duration-300"
                    href="https://www.facebook.com/people/Pantheon-Digitals/100090577747427/#"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/facebook.svg"
                      alt="facebook icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[7%] h-[7%] hover:scale-120 duration-300"
                    href="https://x.com/PantheonDigi"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/x.svg"
                      alt="x icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[7%] h-[7%] hover:scale-120 duration-300"
                    href="https://www.instagram.com/pantheondigitals/"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/insta.svg"
                      alt="instagram icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[7%] h-[7%] hover:scale-120 duration-300"
                    href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH0bqQBFX6_kAAAAZgwY1kQJ_M9XEiW2MgEn9JGXzKTXud2Y708iYiT2Mjj6zTHnUYndWoWgeHoi2QqDr1vYMG3a6d3hIcV5OOcdhKWInnOeyIh0J58gE15Ws1MwNTcsg57jWg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpantheon-digitals%2F"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/linkedin.svg"
                      alt="linkedin icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[7%] h-[7%] hover:scale-120 duration-300"
                    href="https://www.youtube.com/@pantheondigital"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/youtube.svg"
                      alt="youtube icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                  <Link
                    className="w-[7%] h-[7%] hover:scale-120 duration-300"
                    href="https://in.pinterest.com/pantheondigitals/"
                    target="_blank"
                  >
                    <Image
                      src="/social-icons/pinterest.svg"
                      alt="pinterest icon"
                      width="10"
                      height="10"
                      className="w-full h-full"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-span-2 bg-[#2A2A2A] min-h-[120] rounded-3xl justify-between flex-row flex px-6 py-2 items-center">
                <Link
                  href=""
                  onClick={() => setIsDropDownOpen(false)}
                  className="hover:scale-110 duration-300"
                >
                  <span className="font-avenir-medium hover:font-avenir-bold font-medium text-base text-white underline">
                    Privacy Policy
                  </span>
                </Link>
                <Link
                  href=""
                  onClick={() => setIsDropDownOpen(false)}
                  className="hover:scale-110 duration-300"
                >
                  <span className="font-avenir-medium hover:font-avenir-bold font-medium  text-base text-white underline">
                    Terms & Condition
                  </span>
                </Link>
                <Link
                  href=""
                  onClick={() => setIsDropDownOpen(false)}
                  className="hover:scale-110 duration-300"
                >
                  <span className="font-avenir-medium hover:font-avenir-bold font-medium  text-base text-white underline">
                    Cookie Policy
                  </span>
                </Link>
                <Link
                  href=""
                  onClick={() => setIsDropDownOpen(false)}
                  className="hover:scale-110 duration-300"
                >
                  <span className="font-avenir-medium hover:font-avenir-bold font-medium  text-base text-white underline">
                    Blogs
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}
      {/* ====================================================================================================================== */}

      {/* Mobile Header */}
      <div className="lg:hidden fixed w-full top-0 z-50">
        <header className="bg-black shadow-xl shadow-black flex flex-row p-4 items-center justify-between sticky top-0 z-[60]">
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

          <button onClick={toggleMobileMenu} className="text-white">
            <Image
              src="/MenuIcon.svg"
              width="20"
              height="20"
              className={`w-[20] h-[20] duration-300 ${
                isMobileMenuOpen ? "-translate-y-100" : "translate-y-0"
              }`}
              alt="menu icon"
            />
          </button>
        </header>

        {/* transparent background */}
        {isMobileMenuOpen && (
          <button
            onClick={closeMobileMenu}
            className="w-full h-[100dvh] bg-black/50 absolute left-0 top-0 "
          />
        )}

        <div
          className={`absolute top-0 right-0 w-[80%] h-[100dvh] bg-black z-[60] p-4 pt-18 md:pt-24 flex flex-col gap-4  duration-300 overflow-x-hidden overflow-y-scroll  ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-1 -right-1"
            onClick={toggleMobileMenu}
          >
            <Image
              src="/crossIcon.svg"
              width="20"
              height="20"
              className={`w-[60] h-[60] duration-300`}
              alt="cross icon"
            />
          </button>
          {/* buttons */}
          <div className="flex flex-col gap-4 grow ">
            <PrimaryButton
              href="/About"
              onClick={closeMobileMenu}
              leftIcon="/About-Us.svg"
              type="outline"
              label="About Us"
              className="justify-normal"
            />
            <PrimaryButton
              onClick={toggleMobileServices}
              href=""
              leftIcon="/Services.svg"
              type="outline"
              label="Services"
              rightIcon={isMobileDropDown ? "/arrow-up.svg" : "/DownArrow.svg"}
            />

            {isMobileDropDown && (
              <div className="flex w-full h-auto min-h-[400px] justify-center bg-black z-[60] overflow-x-hidden overflow-y-scroll">
                <div className="w-full bg-black rounded-3xl ">
                  <div className="grid grid-cols-1 mt-6 gap-4">
                    {/* Categories */}

                    {/* first service start */}
                    <div className="bg-[#2A2A2A] min-w-[25%] rounded-3xl p-4">
                      <h1 className="font-avenir-bold font-bold text-lg text-left text-white">
                        Digital Marketing
                      </h1>
                      <div className="my-4 border-[0.5] border-white"></div>
                      <ul className="text-left mt-4 h-full styled-list">
                        <li>
                          <Link
                            href="/Services/social-management/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
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
                            href="/Services/google-ppc/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              Google PPC
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
                            href="/Services/meta-ads/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
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
                            href="/Services/seo/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              SEO & SMO
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
                            href="/Services/posts-and-reels/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              Posts & Reels
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
                            href="/Services/branding-and-ads/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
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
                      <h1 className="font-avenir-bold font-bold text-lg text-left text-white">
                        Graphic Designing
                      </h1>
                      <div className="my-4 border-[0.5] border-white"></div>
                      <ul className="text-left mt-4 h-full styled-list">
                        <li>
                          <Link
                            href="/Services/ui-ux/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              UX/UI Design
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
                            href="/Services/brochure-and-ppt/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              Brochure & PPT
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
                            href="/Services/logo-designing/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              Logo Design
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
                            href="/Services/post-designing/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              Posts & Banner
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
                    {/* second service close */}

                    {/* third service start */}
                    <div className="bg-[#2A2A2A] min-w-[25%]  rounded-3xl p-4">
                      <h1 className="font-avenir-bold font-bold text-lg text-left text-white">
                        Tech & Software
                      </h1>
                      <div className="my-4 border-[0.5] border-white"></div>
                      <ul className="text-left mt-4 h-full styled-list">
                        <li>
                          <Link
                            href="https://www.zfour.in/"
                            target="_blank"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              HRMS Software
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
                            href="/Services/crm/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
                              CRM Software
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
                            href="/Services/website-development"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
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
                            href="/Services/application-development"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
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
                            href="/Services/software-development/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
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
                            href="/Services/cloud-and-devops/"
                            onClick={closeMobileMenu}
                            className="flex flex-row justify-between items-center hover:bg-black/25 hover:rounded-lg py-2 px-1"
                          >
                            <span className="font-avenir-medium font-medium text-sm sm:text-base text-white">
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

            <PrimaryButton
              href=""
              onClick={closeMobileMenu}
              leftIcon="/Blogs.svg"
              type="outline"
              label="Blogs"
              className="justify-normal"
            />

            <PrimaryButton
              href=""
              onClick={closeMobileMenu}
              leftIcon="/Contact-Us.svg"
              label="Contact Us"
              className="justify-normal"
            />
          </div>
          {/* social icons */}
          <div className=" flex flex-row w-full  justify-evenly mt-4 left-0">
            <Link
              target="_blank"
              className="w-[30%] h-[30%]"
              href="https://www.facebook.com/people/Pantheon-Digitals/100090577747427/#"
            >
              <Image
                src="/social-icons/facebook.svg"
                alt="facebook icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              target="_blank"
              href="https://x.com/PantheonDigi"
              className="w-[30%] h-[30%]"
            >
              <Image
                src="/social-icons/x.svg"
                alt="x icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://www.instagram.com/pantheondigitals/"
              target="_blank"
            >
              <Image
                src="/social-icons/insta.svg"
                alt="instagram icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH0bqQBFX6_kAAAAZgwY1kQJ_M9XEiW2MgEn9JGXzKTXud2Y708iYiT2Mjj6zTHnUYndWoWgeHoi2QqDr1vYMG3a6d3hIcV5OOcdhKWInnOeyIh0J58gE15Ws1MwNTcsg57jWg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpantheon-digitals%2F"
              target="_blank"
            >
              <Image
                src="/social-icons/linkedin.svg"
                alt="linkedin icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://www.youtube.com/@pantheondigital"
              target="_blank"
            >
              <Image
                src="/social-icons/youtube.svg"
                alt="youtube icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
            <Link
              className="w-[30%] h-[30%]"
              href="https://in.pinterest.com/pantheondigitals/"
              target="_blank"
            >
              <Image
                src="/social-icons/pinterest.svg"
                alt="pinterest icon"
                width="10"
                height="10"
                className="w-full h-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
