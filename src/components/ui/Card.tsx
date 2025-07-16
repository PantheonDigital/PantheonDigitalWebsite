import Image from "next/image";
import Link from "next/link";

const Card = ({
  imgHref,
  title,
  description,
  key,
  type = "normal",
  href,
}: {
  key: string | number;
  imgHref: string;
  title: string;
  description: string;
  type?: "square" | "normal";
  href: string;
}) => {
  return (
    <div
      key={key}
      className={` bg-white rounded-2xl group p-4 ${
        type === "square"
          ? "w-[100%] md:min-h-[300px] h-auto"
          : "md:w-[37vw] md:min-h-[240] w-[90vw]"
      }`}
    >
      <Image
        src={imgHref}
        alt="card image"
        width="0"
        height="0"
        className={type !== "square" ? "w-[9%] h-auto" : "w-[15%] h-auto"}
      />
      <h1 className="text-sm md:text-base font-avenir mt-3 font-extrabold">
        {title}
      </h1>
      <p className="text-xs md:text-sm font-avenir leading-6 font-medium mt-3">
        {description}
      </p>

      {type === "normal" && (
        <div className="w-full flex items-center mt-10  justify-end">
          <Image
            src="/microscope.svg"
            alt="microscope image"
            width="0"
            height="0"
            className={`md:opacity-100 opacity-0 w-[7%] h-[7%] translate-x-20 ${
              type === "normal" &&
              "group-hover:translate-x-0 group-hover:rotate-30"
            } duration-300`}
          />
          <Image
            src="/microscope-down.svg"
            alt="microscope image"
            width="0"
            height="0"
            className="block md:hidden w-[6%] h-[6%]"
          />

          <Link href={href}>
            <h4
              className={`${
                type === "normal" && "group-hover:opacity-100 whitespace-nowrap"
              } ml-2 font-avenir text-xs md:text-lg font-semibold  md:opacity-0 duration-300`}
            >
              Read More
            </h4>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
