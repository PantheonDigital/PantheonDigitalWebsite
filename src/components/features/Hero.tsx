import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";

const Hero = ({
  title,
  subTitle,
  description,
  buttonTitle,
  imageSrc,
  imageStyle,
}: {
  title: string;
  subTitle?: string;
  description: string;
  buttonTitle: string;
  imageSrc: string;
  imageStyle: string;
}) => {
  return (
    <div className="w-[90%] md:w-[80%] h-[60vh] flex mx-auto">
      <Image
        src={imageSrc}
        alt="Home Page Background Banner"
        width="0"
        height="0"
        className={`blur-xs mask-x-from-70% mask-x-to-90% md:blur-none absolute top-[2%] right-0 fade-bottom object-cover md:object-contain -z-10  ${
          imageStyle ? imageStyle : "w-full h-full"
        }`}
      />
      <div className="md:w-[40%] w-[90%] mx-auto md:mx-0">
        <h1 className="text-white font-geometric text-xl md:text-4xl text-center md:text-left ">
          {title}
        </h1>
        <p className="text-white font-avenir font-regular mt-8 text-sm md:text-base leading-6 text-center md:text-left">
          {subTitle}
        </p>
        <p className="text-white font-avenir font-regular mt-8 text-sm md:text-base leading-6 text-center md:text-left">
          {description}
        </p>
        <PrimaryButton
          label={buttonTitle}
          type="variant2"
          className={`mt-24 justify-self-center md:justify-self-auto`}
        />
      </div>
    </div>
  );
};

export default Hero;
