"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import NavbarButtons from "../atoms/NavbarButtons";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: StaticImageData | string;
  animationTransform?: string;
  scaleAnimation: number;
  onButtonClick?: () => void;
}

const AnimatedCard: React.FC<CardProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  animationTransform = "",
  scaleAnimation,
  onButtonClick,
}) => {
  return (
    <div className="p-[4px] rounded-md w-full md:w-[750px] bg-[#D9D8D8] hover:bg-custom-gradient group h-auto md:h-[478px]">
      <div className="px-4 md:px-8 w-full bg-custom-gradien2 pt-6 md:pt-8 relative overflow-hidden rounded-md h-full">
        <button
          role="button"
          onClick={onButtonClick}
          className="bg-custom-gradient rounded-[3px] px-10 py-[10px] md:px-16 md:py-[13px]"
        >
          <p className="text-base_black text-sm md:text-base font-medium">
            {buttonText}
          </p>
        </button>
        <h1 className="text-base_black text-[24px] md:text-[32px] font-medium mt-4 mb-2">
          {title}
        </h1>
        <p className="text-[#6B6566] text-[16px] md:text-[20px] font-medium">
          {description}
        </p>
        <div className="ml-0 md:ml-[-24px] mb-[32px] md:mb-[64px]">
          <NavbarButtons
            text="Start 3 Days Free Trial"
            textColor="text-base_black"
            backgroundColor="bg-transparent"
          />
        </div>
        <div
          className={`w-full flex items-center justify-center relative overflow-hidden h-[120px] md:h-[145px] duration-[0.6s] ${animationTransform}`}
        >
          <Image
            src={imageSrc}
            alt={title}
            className={`transition-transform duration-[0.6s] object-cover absolute inset-0 ${
              scaleAnimation ? `group-hover:scale-[${scaleAnimation}]` : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
