import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";

const Hero = ({
  title,
  description,
  buttonTitle,
  imageSrc,
}: {
  title: string;
  description: string;
  buttonTitle: string;
  imageSrc: string;
}) => {
  return (
    <div className="w-[90%] md:w-[80%] h-[60vh] flex mx-auto">
      <Image
        src={imageSrc}
        alt="Home Page Background Banner"
        width="0"
        height="0"
        className="w-full h-full absolute top-[2%] left-0 fade-bottom object-cover md:object-contain -z-10"
      />
      <div className="md:w-[40%] w-[90%] mx-auto md:mx-0">
        <h1 className="text-white font-geometric text-xl md:text-4xl text-center md:text-left ">
          {title}
        </h1>
        <p className="text-white font-avenir font-regular mt-8 text-sm md:text-base leading-6 text-center md:text-left">
          {description}
        </p>
        <PrimaryButton
          label={buttonTitle}
          type="variant2"
          className="mt-24 justify-self-center md:justify-self-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
