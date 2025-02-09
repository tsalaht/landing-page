import Image from "next/image";
import NavbarButtons from "../atoms/NavbarButtons";
import { FC } from "react";

interface FeatureCardProps {
  imageSrc: any;
  title: string;
  description: string;
  accentColor?: string;
  reverse?: boolean;
}

const FeatureCard: FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
  accentColor = "bg-cold_green",
  reverse = false,
}) => {
  return (
    <div
      className={`card flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } justify-between items-center w-full mb-10 md:mb-20 gap-6 md:gap-0`}
    >
      {/* Image Section */}
      <div className={`image_part p-2 rounded-md ${accentColor} w-full md:w-auto`}>
        <Image src={imageSrc} alt="Feature Image" className="w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="texts_part w-full md:w-[500px]">
        <span className={`${accentColor} w-[68px] h-[7px] rounded-[20px] block`} />
        <h1 className="mt-4 text-2xl md:text-[32px] font-bold text-base_black">
          {title}
        </h1>
        <p className="text-[#5F595A] mt-4 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
