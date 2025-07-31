"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import GetInTouch from "@/components/features/GetInTouch";
import Link from "next/link";
import Clients from "@/components/features/Clients";
import Testimonials from "@/components/features/Testimonials";
import AboutNumerics from "@/components/ui/AboutNumerics";
import FaqItem from "@/components/features/FaqItem";

const Support = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [countryCode, setCountryCode] = useState("+91");
  const [contact, setContact] = useState<number>();
  const [companyName, setCompanyName] = useState<string>("");
  const [issueType, setIssueType] = useState("Select one");
  const [isIssueDropDownOpen, setIsIssueDropDownOpen] =
    useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [priority, setPriority] = useState<
    "Low" | "Medium" | "High" | "Urgent"
  >();
  const [accept, setAccept] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    companyName: "",
    issueType: "",
    projectId: "",
    description: "",
    priority: "",
    accept: "",
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      setIsIssueDropDownOpen(false);
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachment(file);
      console.log("Selected file:", file.name);
    }
  };

  const issues = [
    "Digital Marketing",
    "Graphic Designing",
    "UI/UX Design",
    "Logo/Brochure/Post Design",
    "HRMS Software",
    "CRM Software",
    "Website Development",
    "Application Development",
    "Custom Software",
    "DevOps or Cloud Services",
  ];

  const handlePriority = (p: "Low" | "Medium" | "High" | "Urgent") => {
    setPriority(p);
  };

  const validateForm = () => {
    const newError = {
      name: name ? "" : "Full name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ""
        : "Valid email is required",
      contact:
        contact && contact.toString().length >= 10
          ? ""
          : "Valid contact number is required",
      companyName: companyName ? "" : "Company name is required",
      issueType:
        issueType.toLowerCase() !== "select one"
          ? ""
          : "Please select an issue type",
      projectId: projectId ? "" : "Project Name/ID is required",
      description: description ? "" : "Issue description is required",
      priority: priority ? "" : "Please select a priority level",
      accept: accept ? "" : "You must accept the terms",
    };

    setErrors(newError);
    return Object.values(newError).every((e) => !e);
  };

  const onHandleSubmit = async () => {
    console.log("button is clicked");

    if (validateForm()) {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          contact,
          companyName,
          issueType,
          projectId,
          issue_description: description,
          priority_level: priority,
          attachment: attachment || "",
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Support ticket submitted!");
      } else {
        alert("Failed to submit support ticket");
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="bg-[#212121] w-[90%] sm:w-[80%] h-full sm:mt-24 mt-32 flex flex-col items-center rounded-4xl sm:p-8 p-4">
        <h1 className="font-geometric font-bold text-white text-xl sm:text-5xl sm:mt-12 mt-4">
          Support
        </h1>
        <p className="sm:w-[70%] w-full font-avenir-medium text-white text-sm sm:text-2xl text-center mt-4 sm:mt-12">
          For any technical issues, design feedback, or project-related queries,
          reach out to our dedicated support team below.
        </p>

        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16 mt-12 sm:mt-24">
          {/* Full name */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Full name <sup>*</sup>
            </h4>
            <input
              className={`w-full ${
                errors.name ? "error-input-box" : "input-box"
              }`}
              placeholder="e.g., Sam Smith"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
            />
            {errors.name && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Registered Email <sup>*</sup>
            </h4>
            <input
              className={`w-full ${
                errors.email ? "error-input-box" : "input-box"
              }`}
              placeholder="e.g., abc@company.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
            />
            {errors.email && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone number */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Phone Number <sup>*</sup>
            </h4>
            <div className="flex gap-2 relative">
              <input
                type="tel"
                className="input-box w-[55px]"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />
              <input
                type="tel"
                maxLength={10}
                className={`w-full grow ${
                  errors.contact ? "error-input-box" : "input-box"
                }`}
                placeholder="000  000  0000"
                value={contact}
                onChange={(e) => {
                  setContact(Number(e.target.value));
                  setErrors((prev) => ({ ...prev, contact: "" }));
                }}
              />
              {errors.contact && (
                <p className="text-red-500 absolute -bottom-6 font-avenir-medium-italic text-sm mt-1">
                  {errors.contact}
                </p>
              )}
            </div>
          </div>

          {/* Company name */}
          <div className="w-full mt-6 sm:mt-0">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Company Name <sup>*</sup>
            </h4>
            <input
              className={`w-full ${
                errors.companyName ? "error-input-box" : "input-box"
              }`}
              placeholder="xyz inc."
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setErrors((prev) => ({ ...prev, companyName: "" }));
              }}
            />
            {errors.companyName && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.companyName}
              </p>
            )}
          </div>

          {/* Issue Dropdown */}
          <div className="relative">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Issue Type <sup>*</sup>
            </h4>
            <button
              className={`w-full flex items-center cursor-pointer ${
                errors.issueType ? "error-input-box" : "input-box"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsIssueDropDownOpen(!isIssueDropDownOpen);
              }}
            >
              <p className="flex grow text-white font-avenir-medium text-md">
                {issueType}
              </p>
              <Image
                src="/DownArrow.svg"
                alt=""
                width="20"
                height="20"
                className={`transition-transform ${
                  isIssueDropDownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {errors.issueType && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.issueType}
              </p>
            )}
            <div
              className={`bg-[#212121] w-[350px] absolute right-0 top-28 overflow-hidden border border-zinc-700 rounded-lg duration-300 z-10 ${
                isIssueDropDownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
              }`}
            >
              {issues.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setIssueType(item);
                    setIsIssueDropDownOpen(false);
                    setErrors((prev) => ({ ...prev, issueType: "" }));
                  }}
                  className="w-full hover:bg-zinc-700 text-left px-4 py-2"
                >
                  <p className="text-white font-avenir-medium text-sm sm:text-xl">
                    {item}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Project Name / Id */}
          <div className="w-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Project Name / ID <sup>*</sup>
            </h4>
            <input
              className={`w-full ${
                errors.projectId ? "error-input-box" : "input-box"
              }`}
              placeholder="e.g., xyz website development"
              value={projectId}
              onChange={(e) => {
                setProjectId(e.target.value);
                setErrors((prev) => ({ ...prev, projectId: "" }));
              }}
            />
            {errors.projectId && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.projectId}
              </p>
            )}
          </div>

          {/* Project Brief + Upload */}
          <div className="w-full col-span-full relative">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Describe your issue <sup>*</sup>
            </h4>
            <textarea
              placeholder="Please provide as much detail as possible..."
              className={`w-full h-[200px] ${
                errors.description ? "error-input-box" : "input-box"
              }`}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setErrors((prev) => ({ ...prev, description: "" }));
              }}
            />
            {errors.description && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.description}
              </p>
            )}
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              hidden
            />
            {attachment && (
              <h4
                className={`lg:absolute right-12 ${
                  errors.description ? "lg:bottom-10" : "lg:bottom-4"
                } text-white font-avenir-medium font-sm sm:font-xl`}
              >
                File attached: {attachment.name}
              </h4>
            )}
            <button
              onClick={() => fileInputRef.current?.click()}
              className={`lg:absolute ${
                errors.description ? "lg:bottom-10" : "lg:bottom-4"
              } right-3 cursor-pointer`}
            >
              <Image
                src="/upload-image.svg"
                alt="Upload"
                width="24"
                height="24"
              />
            </button>
          </div>

          {/* Priority Level */}
          <div className="w-full col-span-full">
            <h4 className="font-avenir-demi text-white text-sm sm:text-xl">
              Priority Level <sup>*</sup>
            </h4>
            <div
              className={`flex flex-col sm:flex-row sm:gap-16 gap-4 ${
                errors.priority ? "bg-[#210000]" : "bg-black"
              } p-4 mt-4`}
            >
              {(["Low", "Medium", "High", "Urgent"] as const).map((p) => (
                <label
                  key={p}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="priority-level"
                    className="accent-[#F61313]"
                    onChange={() => {
                      handlePriority(p);
                      setErrors((prev) => ({ ...prev, priority: "" }));
                    }}
                  />
                  <span className="text-white text-sm sm:text-xl">{p}</span>
                </label>
              ))}
            </div>
            {errors.priority && (
              <p className="text-red-500 font-avenir-medium-italic text-sm mt-1">
                {errors.priority}
              </p>
            )}
          </div>

          {/* Consent */}
          <div className="flex gap-2 items-start relative">
            <input
              type="checkbox"
              className="cursor-pointer accent-[#F61313]"
              onChange={(e) => {
                setAccept(e.target.checked);
                setErrors((prev) => ({ ...prev, accept: "" }));
              }}
            />
            <p className="text-white font-avenir-medium text-base -translate-y-1.5">
              By submitting the form I agree with the Pantheon Digital’s{" "}
              <Link href="/Privacy-Policy/">
                <span className="font-avenir-bold underline">
                  Privacy Policy
                </span>
              </Link>{" "}
              &{" "}
              <Link href="/Terms-Of-Use/">
                <span className="font-avenir-bold underline">Terms of Use</span>
              </Link>
            </p>
            {errors.accept && (
              <p className="text-red-500 absolute -bottom-3 font-avenir-medium-italic text-sm mt-1">
                {errors.accept}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="sm:w-[60%] w-full flex justify-self-end">
            <PrimaryButton
              onClick={onHandleSubmit}
              label="Submit Ticket"
              className="w-full rounded-lg justify-center"
            />
          </div>
        </div>
      </div>

      {/* Talk to expert */}
      <div className="w-[90%] sm:w-[80%] bg-[#212121] p-8 sm:p-12 mt-12 sm:mt-24 rounded-3xl flex flex-col relative">
        <Image
          src="/YoutubeLogo.svg"
          alt="youtube logo"
          width="30"
          height="30"
          className="sm:w-[80] sm:h-auto absolute right-15 top-15 cursor-pointer hover:scale-110 duration-300"
        />
        <h1 className="text-white font-avenir-demi text-lg sm:text-4xl ">
          Talk to our expert now!
        </h1>

        <p className="text-[#c1c1c1]  text-sm sm:text-2xl mt-4 sm:mt-8  sm:w-[60%] w-full ">
          note: the person you’re about to call is a technical project expert
          and may or may not have knowledge about support of the particular
          project.
        </p>
        <p className="text-[#c1c1c1] font-avenir-medium text-sm sm:text-2xl mt-4 sm:mt-8  sm:w-[60%] w-full">
          {" "}
          If you’re facing issue with any project, visit{" "}
          <Link href="/Support/">
            <span className="underline  font-avenir-bold text-white text-sm sm:text-2xl">
              support page
            </span>
          </Link>{" "}
          and raise a issue
        </p>

        <div className="h-[.5] bg-[#c1c1c1] sm:my-8 my-4" />

        {/* contact details */}
        <div>
          <div className="flex gap-4 sm:gap-8 items-center">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <Image
                className=""
                src="/Contact-Us.svg"
                alt="telephone"
                width="15"
                height="15"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-8">
              <Link href="tel:+91 93547 61565">
                <span className="text-white font-avenir-demi text-xs sm:text-2xl">
                  +91 93547 61565
                </span>
              </Link>

              <p className="text-white text-4xl sm:block hidden">|</p>

              <Link href="tel:+91 93547 61565">
                <span className="text-white font-avenir-demi text-xs sm:text-2xl">
                  +91 93547 61565
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* contact details close */}

        {/* contact details */}
        <div className="mt-4">
          <div className="flex gap-4 sm:gap-8 items-center">
            <div className="w-10 min-w-10 min-h-10 h-10 rounded-full bg-black flex items-center justify-center">
              <Image
                className=""
                src="/mail.svg"
                alt="mail"
                width="20"
                height="20"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-8">
              <Link href="mailto:info@pantheondigitals.com">
                <span className="text-white font-avenir-demi text-xs sm:text-2xl">
                  info@pantheondigitals.com
                </span>
              </Link>

              <p className="text-white text-4xl hidden sm:block">|</p>

              <Link href="mailto:business@pantheondigitals.com">
                <span className="text-white font-avenir-demi text-xs sm:text-2xl">
                  business@pantheondigitals.com
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* contact details close */}
      </div>

      {/* Get in touch */}
      <GetInTouch />

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

export default Support;
