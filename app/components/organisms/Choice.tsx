import { useTranslation } from 'react-i18next';
import NavbarButtons from "../atoms/NavbarButtons";

export default function Choice() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className={`w-full px-4 md:px-[120px] py-10 md:pt-20 ${isRTL ? 'rtl' : ''}`}>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-base_black text-3xl md:text-[56px] text-center md:leading-[1.2]">
          {t('choice.title')}
        </h1>
        <p className={`text-[#5F595A] text-base md:text-lg text-center mt-4 md:mt-6 ${isRTL ? ' md:w-[600px]' : ' md:w-[900px]'}`}>
          {t('choice.description')}
        </p>
        <div className="mt-6 md:mt-10">
          <NavbarButtons
            text={t('choice.button')}
            textColor="text-base_black"
            backgroundColor="bg-secondary_colar"
          />
        </div>
      </div>
    </div>
  );
}
