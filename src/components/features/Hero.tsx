import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Hero = ({
  title,
  subTitle,
  description,
  buttonTitle,
  imageSrc,
  imageStyle,
  scrollAnimation,
}: {
  title: string;
  subTitle?: string;
  description: string;
  buttonTitle: string;
  imageSrc: string;
  imageStyle: string;
  scrollAnimation?: boolean;
}) => {
  return (
    <>
      {!scrollAnimation && (
        <div className="w-[90%] md:w-[80%] h-[60vh] flex mx-auto">
          <Image
            src={imageSrc}
            alt="Home Page Background Banner"
            width="0"
            height="0"
            className={`blur-xs mask-radial-at-center mask-radial-from-100% md:blur-none absolute top-[2%] right-0 fade-bottom object-cover md:object-contain -z-10  ${
              imageStyle ? imageStyle : "w-full h-full"
            }`}
          />
          <div className="lg:w-[40%] w-[90%] mx-auto md:mx-0">
            <h1 className="text-white font-geometric text-xl sm:text-4xl  text-center lg:text-left ">
              {title}
            </h1>
            <p className="text-white font-avenir font-medium mt-8 text-base sm:text-sm lg:text-base leading-6 text-center lg:text-left">
              {subTitle}
            </p>
            <p className="text-white font-avenir font-regular mt-8 text-base sm:text-xs leading-6 text-center lg:text-left">
              {description}
            </p>
            <PrimaryButton
              label={buttonTitle}
              type="variant2"
              className={`mt-[20%] justify-self-center lg:justify-self-auto`}
            />
          </div>
        </div>
      )}

      {scrollAnimation && (
        <div className="w-[90%] md:w-[80%] h-auto flex mx-auto">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-white font-geometric text-xl sm:text-4xl  text-center">
                  {title}
                </h1>
                <p className="text-white font-avenir font-regular mt-8 text-base sm:text-sm lg:text-base leading-6 text-center ">
                  {subTitle}
                </p>
                <p className="text-white sm:mb-24 mb-6  font-avenir font-regular mt-8 text-base sm:text-sm leading-6 text-center ">
                  {description}
                </p>
              </>
            }
          >
            <img
              src={`/CrmHeroBannerImage.svg`}
              alt="hero"
              height={"0"}
              width={"0"}
              className="w-full mx-auto rounded-2xl object-contain h-full "
              draggable={false}
            />
          </ContainerScroll>
        </div>
      )}
    </>
  );
};

export default Hero;
