import Image, { StaticImageData } from "next/image";
import Right_arrow from "@/app/assets/icons/rightArrow.svg"; // Default icon
import classNames from "classnames"; // Utility for conditionally joining class names

interface DynamicButtonProps {
  text?: string;
  textColor?: string;
  backgroundColor?: string;
  iconSrc?: StaticImageData | string;
}

const NavbarButtons = ({
  text = "Login",
  textColor = "text-base_black",
  backgroundColor = "bg-secondary_colar",
  iconSrc = Right_arrow,
}: DynamicButtonProps) => {
  // Define hover classes based on the current background color
  const hoverStyles =
    backgroundColor === "bg-secondary_colar" || backgroundColor === "bg-[#FFCA64]"
      ? "hover:bg-[#FFAE12] hover:shadow-[#FFAE12]/50"
      : backgroundColor === "bg-primary_colar" || backgroundColor === "bg-[#692BEF]"
      ? "hover:bg-[#3B0CA0] hover:shadow-[#3B0CA0]/50"
      : "";

  return (
    <button
      role="button"
      className={classNames(
        `rounded-md flex gap-1 items-center px-6 py-[13.5px] cursor-pointer relative overflow-hidden group transition-all duration-300`,
        backgroundColor,
        hoverStyles
      )}
    >
      {/* Hover Animated Text */}
      <p
        className={`absolute bottom-[80px] left-1/2 transform -translate-x-1/2 text-lg ${textColor} w-full font-semibold transition-all duration-500 group-hover:bottom-[-30px]`}
      >
        {text}
      </p>
      {/* Main Button Text */}
      <p className={`text-lg ${textColor} font-semibold cursor-pointer`}>
        {text}
      </p>
      {iconSrc && (
        <Image src={iconSrc} alt="Button Icon" className="w-6 h-6" />
      )}
    </button>
  );
};

export default NavbarButtons;
