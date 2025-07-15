import Image from "next/image";

const Card = ({
  imgHref,
  title,
  description,
}: {
  imgHref: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="md:w-[37vw] md:min-h-[240] w-[90vw] bg-white rounded-2xl p-4">
      <Image
        src={imgHref}
        alt="card image"
        width="0"
        height="0"
        className="w-[9%] h-[25%]"
      />
      <h1 className="text-sm md:text-base font-avenir mt-3 font-extrabold">
        {title}
      </h1>
      <p className="text-xs md:text-sm font-avenir font-medium mt-3">
        {description}
      </p>

      <div className="w-full flex justify-center items-center">
        <Image
          src="/microscope.svg"
          alt="microscope image"
          width="0"
          height="0"
          className="md:block hidden w-[7%] h-[7%] ml-[90%]"
        />
        <Image
          src="/microscope-down.svg"
          alt="microscope image"
          width="0"
          height="0"
          className="block md:hidden w-[6%] h-[6%] ml-[60%]"
        />
        <h4 className="ml-2 font-avenir text-xs font-semibold md:hidden block">
          Read More
        </h4>
      </div>
    </div>
  );
};

export default Card;
