import { useTranslation } from "react-i18next";
import Image1 from "@/app/assets/imgs/image1.png";
import Image2 from "@/app/assets/imgs/image2.png";
import Image3 from "@/app/assets/imgs/image3.png";
import Image4 from "@/app/assets/imgs/image4.png";
import Image5 from "@/app/assets/imgs/image5.png";
import FeatureCard from "../molecules/FeatureCard";
import NavbarButtons from "../atoms/NavbarButtons";
import Right_arrow_White from '@/app/assets/icons/arrowRightWhite.svg';

export default function Features() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const features = [
    {
      imageSrc: Image1,
      title: t("features.advancedAISolutions"),
      description: t("features.advancedAISolutionsDescription"),
      accentColor: "bg-cold_green",
    },
    {
      imageSrc: Image2,
      title: t("features.supportAllContent"),
      description: t("features.supportAllContentDescription"),
      accentColor: "bg-[#6EDBFF]",
    },
    {
      imageSrc: Image3,
      title: t("features.advancedProofreading"),
      description: t("features.advancedProofreadingDescription"),
      accentColor: "bg-[#FF7AD1]",
    },
    {
      imageSrc: Image4,
      title: t("features.customTemplates"),
      description: t("features.customTemplatesDescription"),
      accentColor: "bg-[#B880FF]",
    },
    {
      imageSrc: Image5,
      title: t("features.integration"),
      description: t("features.integrationDescription"),
      accentColor: "bg-cold_green",
    },
  ];

  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:pt-[20px]">
      <div className="w-full items-center flex flex-col justify-center md:px-[300px] mb-[80px]">
        <h1 className="text-primary_colar font-bold text-[40px]">
          {t("features.title")}
        </h1>
        <p className="text-[#5F595A] text-base md:text-lg text-center mt-4 md:mt-6">
          {t("features.description")}
        </p>
      </div>

      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          imageSrc={feature.imageSrc}
          title={feature.title}
          description={feature.description}
          accentColor={feature.accentColor}
          reverse={isArabic ? index % 2 === 0 : index % 2 !== 0}
        />
      ))}

      <div className="w-full items-center justify-center flex">
        <NavbarButtons
          text={t("features.trialButton")}
          textColor="text-base_white"
          backgroundColor="bg-primary_colar"
          iconSrc={Right_arrow_White}
        />
      </div>
    </div>
  );
}
