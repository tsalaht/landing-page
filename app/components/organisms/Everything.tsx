import Image from "next/image";
import { useTranslation } from "react-i18next";
import NavbarButtons from "../atoms/NavbarButtons";
import Content_Image from "@/app/assets/imgs/Content.png";
import AnimatedCard from "../molecules/AnimatedCard";

export default function Everything() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div
      className={`w-full px-4 md:px-[120px] py-10 md:py-20 bg-primary_colar_500 ${
        isArabic ? "rtl" : "ltr"
      }`}
    >
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-base_white text-[40px] font-bold text-center">
          {t("everything_title")}
        </h1>
        <p className="text-[#EEEEEE] text-xl md:text-lg text-center mt-4 mb-20 md:mt-6 md:w-[692px] w-full">
          {t("everything_description")}
        </p>
      </div>

      {/* Cards Part */}
      <div className="w-full flex items-center justify-between flex-wrap gap-y-6">
        <AnimatedCard
          title={t("social_media_title")}
          description={t("social_media_description")}
          buttonText={t("social_media_button")}
          imageSrc={Content_Image}
          animationTransform="group-hover:translate-y-[-40px]"
          scaleAnimation={1.05}
        />
        <AnimatedCard
          title={t("seo_article_title")}
          description={t("seo_article_description")}
          buttonText={t("seo_article_button")}
          imageSrc={Content_Image}
          animationTransform="group-hover:translate-y-[-40px]"
          scaleAnimation={1.05}
        />
      </div>

      <div className="w-full flex items-center justify-between flex-wrap gap-y-6 mt-[24px]">
        <AnimatedCard
          title={t("proofreading_title")}
          description={t("proofreading_description")}
          buttonText={t("proofreading_button")}
          imageSrc={Content_Image}
          animationTransform="group-hover:translate-y-[-10px]"
          scaleAnimation={1.05}
        />
        <AnimatedCard
          title={t("rewriting_title")}
          description={t("rewriting_description")}
          buttonText={t("rewriting_button")}
          imageSrc={Content_Image}
          animationTransform="group-hover:translate-y-[-10px]"
          scaleAnimation={1.05}
        />
      </div>
    </div>
  );
}
