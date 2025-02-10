"use client";
import Image from "next/image";
import Logo from "@/app/assets/icons/logo.svg";
import WorledIcon from "@/app/assets/icons/world.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "@/app/providers/redux/slices/languageSlice";
import { useTranslation } from "react-i18next";
import NavbarButtons from "../atoms/NavbarButtons";
import Right_arrow_White from "@/app/assets/icons/arrowRightWhite.svg";

export default function Navbar() {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageToggle = () => {
    const newLanguage: any = selectedLanguage === "en" ? "ar" : "en";
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  return (
    <div
      className={`w-full px-4 py-4 bg-default_white flex items-center justify-between rounded-xl ${
        selectedLanguage === "ar" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Logo */}
      <div>
        <Image src={Logo} alt={t("logo_alt")} width={88} height={56} />
      </div>

      {/* Desktop Navigation Links */}
      <div className={`md:flex hidden items-center gap-4 text-lg font-medium`}>
  <ul className={`flex items-center ${selectedLanguage === "ar" ? "flex-row-reverse" : ""} gap-[24px]`}>
    {["features", "solutions", "packages", "academy"].map((key) => (
      <li key={key} className="px-2 relative group block py-3 overflow-hidden">
        {/* Visible Navigation Link */}
        <a href="#" className="whitespace-nowrap hover:text-primary_colar transition-colors block">
          {t(`navbar.${key}`)}
        </a>

        {/* Animated Hover Text */}
        <p
          className={`absolute opacity-0 translate-y-[-90px] top-full left-1/2 transform -translate-x-1/2 text-lg text-primary_colar_500 w-full transition-transform transition-opacity duration-700 ease-in-out group-hover:opacity-100 group-hover:translate-y-0`}
        >
          {t(`navbar.${key}`)}
        </p>
      </li>
    ))}
  </ul>
</div>





      {/* Buttons */}
  <div className={`md:flex hidden gap-4 items-center ${selectedLanguage === "ar" ? "flex-row-reverse" : ""}`}>
        <li
          role="button"
          onClick={handleLanguageToggle}
          className="flex items-center gap-2 px-2 py-[5px] rounded-full bg-[#EEEEEE] cursor-pointer"
        >
          <Image src={WorledIcon} alt={t("language_toggle_icon_alt")} width={24} height={24} />
          <p className="text-base text-base_black font-medium">
            {selectedLanguage === "en" ? "AR" : "EN"}
          </p>
        </li>
        <NavbarButtons text={t("login")} textColor="text-base_black" backgroundColor="bg-secondary_colar" />
        <NavbarButtons
          text={t("start_now")}
          textColor="text-base_white"
          backgroundColor="bg-primary_colar"
          iconSrc={Right_arrow_White}
        />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md hover:bg-gray-100 focus:outline-none">
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>

      {/* Mobile Side Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-20 transition-opacity duration-500 ease-in-out"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div
            className={`fixed top-0 ${
              selectedLanguage === "ar" ? "right-0" : "left-0"
            } w-4/5 max-w-xs h-full bg-default_white shadow-lg z-30 p-4 transform transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={() => setIsMenuOpen(false)} className="mb-4 text-xl p-2 hover:bg-gray-100 rounded-md focus:outline-none">
              <X size={24} strokeWidth={2} />
            </button>
            <ul className="flex flex-col gap-4">
              {["features", "solutions", "packages", "academy"].map((key) => (
                <li key={key}>
                  <a href="#" className="block text-lg font-medium hover:text-primary_colar transition-colors">
                    {t(`navbar.${key}`)}
                  </a>
                </li>
              ))}
              <li
                role="button"
                onClick={handleLanguageToggle}
                className="flex items-center gap-2 px-2 py-[5px] rounded-full bg-[#EEEEEE] cursor-pointer"
              >
                <Image src={WorledIcon} alt={t("language_toggle_icon_alt")} width={24} height={24} />
                <p className="text-base text-base_black font-medium">
                  {selectedLanguage === "en" ? "AR" : "EN"}
                </p>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-4">
              <NavbarButtons text={t("login")} textColor="text-base_black" backgroundColor="bg-secondary_colar" />
              <NavbarButtons
                text={t("start_now")}
                textColor="text-base_white"
                backgroundColor="bg-primary_colar"
                iconSrc={Right_arrow_White}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
