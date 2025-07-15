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
  const commonStyles = `flex cursor-pointer flex-row items-center justify-normal md:justify-between gap-3  ${className} ${
    type === "normal" &&
    "button rounded-3xl shadow-[2px_2px_0px_rgba(246,19,19,0.4)] shadow-red-900"
  } ${type === "variant2" && "btn-variant2"}
    ${type === "outline" && "btn-outline"}
    ${
      type === "red-outline" &&
      "px-8 py-4 shadow-[1px_1px_5px_rgba(246,19,19,0.4)] shadow-[#F61313] rounded-2xl"
    }`;

  const content = (
    <>
      {leftIcon && (
        <Image src={leftIcon} alt="left icon" width={20} height={20} />
      )}
      <span
        className={`font-avenir font-extrabold text-sm md:text-base ${
          type === "variant2" ? "text-black" : "text-white"
        }
        ${type === "red-outline" && "underline"}
        `}
      >
        {label}
      </span>
      {rightIcon && (
        <Image
          className="justify-self-end-safe"
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
      <Link href={href} className={commonStyles}>
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
