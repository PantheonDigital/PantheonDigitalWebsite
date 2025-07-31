import Image from "next/image";
import Link from "next/link";

interface PrimaryButtonProps {
  leftIcon?: string;
  rightIcon?: string;
  type?: "outline" | "normal" | "variant2" | "red-outline" | "gradient-outline";
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
  const commonStyles = `flex cursor-pointer text-nowrap flex-row items-center justify-between gap-2 text-sm ${className} ${
    type === "normal" &&
    "button rounded-3xl px-4 py-2 shadow-[2px_2px_0px_rgba(246,19,19,0.4)] shadow-red-900 hover:ring-2 ring-red-500 border-l-2 border-t-2 border-black duration-300 hover:border-2"
  } ${type === "variant2" && "btn-variant2 px-4 py-2"}
    ${type === "outline" && "btn-outline group px-4 py-2"}
    ${
      type === "red-outline" &&
      "px-8 py-4 shadow-[1px_1px_5px_rgba(246,19,19,0.4)] shadow-[#F61313] rounded-2xl"
    }`;

  const content = (
    <>
      <div className="flex gap-2 items-center">
        {leftIcon && (
          <Image
            src={leftIcon}
            alt="left icon"
            width={16}
            height={16}
            className="group-hover:scale-125 duration-300"
          />
        )}
        <span
          className={`font-avenir-bold text-sm group-hover:scale-105 duration-300 ${
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
          className="ml-2 group-hover:scale-105 duration-300"
          src={rightIcon}
          alt="right icon"
          width={16}
          height={16}
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
