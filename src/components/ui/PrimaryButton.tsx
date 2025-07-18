import Image from "next/image";
import Link from "next/link";

interface PrimaryButtonProps {
  leftIcon?: string;
  rightIcon?: string;
  type?: "outline" | "normal" | "variant2" | "red-outline";
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton = ({
  leftIcon,
  rightIcon,
  type = "normal",
  label,
  href,
  onClick,
  className = "",
}: PrimaryButtonProps) => {
  const commonStyles = `flex cursor-pointer flex-row items-center justify-between md:gap-3 ${className} ${
    type === "normal" &&
    "button rounded-3xl shadow-[2px_2px_0px_rgba(246,19,19,0.4)] shadow-red-900"
  } ${type === "variant2" && "btn-variant2"}
    ${type === "outline" && "btn-outline group"}
    ${
      type === "red-outline" &&
      "px-8 py-4 shadow-[1px_1px_5px_rgba(246,19,19,0.4)] shadow-[#F61313] rounded-2xl"
    }`;

  const content = (
    <>
      <div className="flex lg:gap-3 sm:gap-1">
        {leftIcon && (
          <Image
            src={leftIcon}
            alt="left icon"
            width={20}
            height={20}
            className="group-hover:scale-150 duration-300"
          />
        )}
        <span
          className={`font-avenir mr-3 text-nowrap font-extrabold text-sm md:text-md lg:text-base  group-hover:scale-110 duration-300 ${
            type === "variant2" ? "text-black" : "text-white"
          }
        ${type === "red-outline" && "underline"}
        `}
        >
          {label}
        </span>
      </div>
      {rightIcon && (
        <Image
          className="justify-self-end-safe group-hover:scale-110 duration-300 mr-3"
          src={rightIcon}
          alt="right icon"
          width={20}
          height={20}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={commonStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonStyles} type="button">
      {content}
    </button>
  );
};

export default PrimaryButton;
