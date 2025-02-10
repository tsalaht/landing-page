import Image from "next/image";
import { FC } from "react";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      className={`card flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } justify-center items-center w-full mb-10 md:mb-20 gap-6 md:gap-[300px]`}
    >
      {/* Image Section */}
      <div className={`image_part p-[14px] rounded-md ${accentColor} w-full md:w-[588px] md:h-[388px]`}>
        <Image src={imageSrc} alt="Feature Image" className="w-full h-full" />
      </div>

      {/* Text Section */}
      <div
        className={`texts_part w-full md:w-[500px] ${
          isArabic ? "text-right" : "text-left"
        }`}
      >
        <span
          className={`${accentColor} w-[68px] h-[7px] rounded-[20px] block ${
            isArabic ? "ml-auto" : "mr-auto"
          }`}
        />
        <h1 className="mt-4 text-2xl md:text-[32px] font-bold text-base_black">
          {title}
        </h1>
        <p className="text-[#5F595A] mt-4 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
