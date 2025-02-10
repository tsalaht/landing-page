import { useTranslation } from 'react-i18next';
import NavbarButtons from "../atoms/NavbarButtons";
import Image from "next/image";
import Logo from "@/app/assets/icons/footerLogo.svg";
import bigLogo from "@/app/assets/icons/bigLogo.svg";
import worde from "@/app/assets/icons/MUTQINAI.svg";
import facebook from "@/app/assets/icons/fb.svg";
import instagram from "@/app/assets/icons/insta.svg";
import twitter from "@/app/assets/icons/twitter.svg";
import tiktok from "@/app/assets/icons/tiktok.svg";
import linkdin from "@/app/assets/icons/linkdin.svg";
import youtub from "@/app/assets/icons/youtub.svg";
import arrowWhite from "@/app/assets/icons/arrowRightWhite.svg";

export default function Footer() {
  const { t,i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <div className={`w-full px-4 md:px-[120px] py-10 md:py-20 relative overflow-hidden ${isArabic ? 'text-right':''}`}>
      <div className="absolute left-0 top-[-350px] w-full -z-10 h-full">
        <Image src={bigLogo} alt="Container" />
      </div>
      <div className="absolute left-0 bottom-[-320px] w-full -z-10 h-full">
        <Image src={worde} alt="worde" />
      </div>

      <div className={`w-full flex flex-col md:flex-row justify-between gap-10 ${isArabic?'md:flex-row-reverse':''}`}>
        {/* Part One */}
        <div className="max-w-[570px]">
          <div className={`w-full flex ${isArabic ? 'flex-row-reverse' : ''} text-center`}>

          <Image src={Logo} alt="Logo" className="mb-6" />
          </div>
          <p className="text-base_black text-xl font-medium mb-4">
            {t("platform_description_1")}
          </p>
          <p className="text-base_black text-xl font-medium">
            {t("platform_description_2")}
          </p>
        </div>

        {/* Part Two */}
        <div>
          <h4 className="text-xl font-semibold text-base_black mb-3">{t("features_title")}</h4>
          {[...Array(7)].map((_, i) => (
            <p key={i} className="text-lg text-[#6B6566] font-normal mb-2">
              {t(`feature_${i + 1}`)}
            </p>
          ))}
        </div>

        {/* Part Three */}
        <div>
          <h4 className="text-xl font-semibold text-base_black mb-3">{t("solutions_title")}</h4>
          {[...Array(6)].map((_, i) => (
            <p key={i} className="text-lg text-[#6B6566] font-normal mb-2">
              {t(`solution_${i + 1}`)}
            </p>
          ))}
        </div>

        {/* Part Four */}
        <div className="flex flex-col items-start w-[330px]">
          <h4 className="text-[18px] font-semibold  text-base_black ">{t("social_media_title_footer")}</h4>
          <div className="flex items-center gap-[30.4px] mt-3 mb-4">
            <Image src={facebook} alt="Facebook" />
            <Image src={twitter} alt="Twitter" />
            <Image src={instagram} alt="Instagram" />
            <Image src={linkdin} alt="LinkedIn" />
            <Image src={youtub} alt="YouTube" />
            <Image src={tiktok} alt="TikTok" />
          </div>
          <div className="bg-base_white border-[1px] rounded-md px-4 py-6 flex-col flex items-center gap-3 border-base_black w-[296px]">
            <h4 className="text-xl font-normal text-base_black">{t("get_started_title")}</h4>
            <Image src={facebook} alt="fb" />
            <NavbarButtons
              text={t("join_community_button")}
              textColor="text-base_white"
              backgroundColor="bg-primary_colar"
              iconSrc={arrowWhite}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
