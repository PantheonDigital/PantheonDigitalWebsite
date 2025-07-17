import Link from "next/link";
import Image from "next/image";

const Technology = ({
  heading,
  icons,
  list,
  title,
  subtitle,
  href,
}: {
  heading: string;
  icons: string[];
  list: string[];
  title: string;
  subtitle?: string;
  href: string;
}) => {
  return (
    <div className="w-screen h-auto flex justify-center pt-12 md:pt-24 bg-gradient-to-b from-[#202020] via-[#202020] to-[#86868600] z-0">
      <div className="w-[90%] md:w-[80%] flex items-center flex-col gap-8 md:gap-16 mt-12">
        {heading?.length > 0 && (
          <h1 className="font-geometric font-bold text-xl md:text-4xl text-white">
            {heading}
          </h1>
        )}

        {/* icons list */}
        <div
          className={`w-full grid md:grid-cols-8 grid-cols-4 place-items-center auto-cols-fr gap-5 md:gap-10 ${
            icons?.length > 0 ? "block" : "hidden"
          }`}
        >
          {icons?.length > 0 &&
            icons?.map((item: string) => (
              <Image
                src={item}
                alt="technology img"
                width="0"
                height="0"
                className="bg-white rounded-lg w-[70%] h-full hover:scale-120 duration-300"
              />
            ))}
        </div>

        {/* description section */}

        <div
          className={`flex flex-col md:flex-row w-full ${
            icons?.length > 0 && "mt-12 md:mt-24"
          }`}
        >
          {/* left */}
          <div className="w-full p-4 flex flex-col justify-around">
            <div className="w-full md:w-[70%]">
              <h1 className="text-center md:text-left font-geometric text-xl md:text-4xl text-[#FFCC03]">
                {title}
              </h1>
              <h3 className="text-white font-avenir text-center md:text-left text-lg md:text-3xl mt-4">
                {subtitle}
              </h3>
            </div>
            <Link
              href={href}
              className="w-full mt-12 md:mt-0 flex flex-row justify-center md:justify-normal gap-8 group"
            >
              <span className="text-white">Connect with us</span>
              <Image
                src="/ArrowRight.svg"
                alt={"right arrow"}
                width={"0"}
                height={"0"}
                className="w-[30] -translate-x-5 group-hover:translate-x-0 duration-300"
              />
            </Link>
          </div>

          <div className="h-full border-1 border-white my-8 md:my-0" />

          {/* right */}
          <ul className="w-full px-4 md:px-16 flex flex-col justify-between list-outside list-image-[url('/CheckList2.svg')]">
            {list?.length > 0 &&
              list?.map((item, idx) => (
                <li className={`${idx === 0 ? "mt-0" : "mt-4 md:mt-6"} ml-8 `}>
                  <p className="text-white ml-2 font-avenir -translate-y-1">
                    {item} 
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
