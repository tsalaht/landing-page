import { useTranslation } from 'react-i18next';
import Navbar from "../molecules/Navbar";
import NavbarButtons from "../atoms/NavbarButtons";
import creditCard from "@/app/assets/icons/CreditCard.svg";
import gradientLine from "@/app/assets/icons/linearLine.svg";
import Play from "@/app/assets/icons/playIcone.svg";
import Image from "next/image";
import Cover from "@/app/assets/imgs/Video cover ZMLz-zmkhoc.png";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={`px-4 md:px-[120px] bg-primary_colar_500 py-6 pb-20 ${isRTL ? 'rtl' : ''}`}>
      <Navbar />
      <div className="w-full mt-8 md:mt-[72px] justify-center items-center flex flex-col">
        <h1 className={`text-4xl md:text-[75px] text-base_white font-semibold text-center md:leading-[120%] ${isRTL?'max-w-[1526px]':'max-w-[1526px]'} max-w-[1264]`}>
          <span className="text-secondary_colar">{t('hero.highlight')}</span> {t('hero.title')}
        </h1>
        <p className="text-base_white text-lg md:text-xl  text-center mt-4 md:mt-4 md:leading-[160%] max-w-[660px]">
          {t('hero.description')}
        </p>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center mt-6">
        <div className="hidden md:block absolute left-[150px] top-[20px]">
          <Image src={gradientLine} alt="gradient line" />
        </div>
        <NavbarButtons
          text={t('hero.cta')}
          textColor="text-base_black"
          backgroundColor="bg-secondary_colar"
        />
        <div className={`flex items-center mt-6 gap-2 relative z-10 ${isRTL?'flex-row-reverse':''}`}>
          <Image src={creditCard} alt={t('hero.noCreditCard')} width={24} height={24} />
          <p className="text-base_white text-base font-medium">{t('hero.noCreditCard')}</p>
        </div>
        <div className="relative bg-custom-gradient p-[6px] rounded-md mt-10 md:mt-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-default_white rounded-full">
              <Image src={Play} alt={t('hero.playButton')} width={24} height={24} />
            </div>
          </div>
          <Image src={Cover} alt={t('hero.coverImage')} />
        </div>
      </div>
    </div>
  );
}
