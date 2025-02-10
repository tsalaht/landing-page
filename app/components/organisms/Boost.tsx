import NavbarButtons from "../atoms/NavbarButtons";
import Image from "next/image";
import Line from "@/app/assets/icons/Line2.svg";
import Line2 from "@/app/assets/icons/lineargradient3.svg";
import pice1 from "@/app/assets/imgs/Union.png";
import pice2 from "@/app/assets/imgs/Subtract.png";
import { useTranslation } from "react-i18next";

export default function Boost() {
  const { t,i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <div className="w-full px-4 md:px-[120px] md:mb-6">
      <div className={`w-full px-4 md:px-[120px] py-10 md:py-[120px] ${isArabic? 'md:py-[120px]':'md:py-[80px]'} bg-primary_colar_500 rounded-md`}>
        <div className={`w-full relative ${isArabic ?'text-right flex-row-reverse flex':''}`}>
          {/* Content Section */}
          <div className="w-full md:w-[477px]">
            <h1 className="text-[32px] md:text-[40px] font-bold text-base_white">
              {t("boostTitle")}
            </h1>
            <p className="text-[16px] md:text-[20px] font-normal text-white mt-4 mb-[40px]">
              {t("boostDescription")}
            </p>
            <div className={` w-full ${isArabic ?'text-right flex-row-reverse flex':''}`}>
            <NavbarButtons
              text={t("boostButton")}
              textColor="text-base_black"
              backgroundColor="bg-secondary_colar"
            />
            </div>
           
          </div>

          {/* Images */}
          <Image
            src={pice1}
            alt={t("boostImageAlt1")}
            className={`hidden md:block absolute ${isArabic? 'left-[140px] top-[-120px]':'right-[80px] top-[-80px]' }  `}
          />
   { !isArabic &&  <Image
          src={Line}
          alt="Line"
          className="hidden md:block absolute right-[-120px] bottom-[-80px]"
        />}
   { isArabic &&  <Image
          src={Line2}
          alt="Line"
          className="hidden md:block absolute left-[-120px] bottom-[-120px]"
        />}
          <Image
            src={pice2}
            alt={t("boostImageAlt2")}
            className={`hidden md:block absolute ${isArabic? 'left-[-120px] bottom-[-120px]':'right-[-120px] bottom-[-80px]' }  `}
          />
        </div>
      </div>
    </div>
  );
}
