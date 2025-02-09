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
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (language: string | any) => {
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    changeLanguage(language);
  };

  return (
    <div className="w-full px-4 py-4 bg-default_white flex items-center justify-between rounded-xl">
      {/* Logo */}
      <div>
        <Image src={Logo} alt="Logo" width={88} height={56} />
      </div>

      {/* Desktop Navigation Links */}
      <div className="md:flex hidden items-center gap-4 text-lg font-medium">
        <ul className="flex items-center gap-4">
          {["Features", "Solutions", "Packages", "Our Academy"].map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-primary_colar transition-colors">
                {link}
              </a>
            </li>
          ))}
          <li
            role="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative flex items-center gap-2 px-2 py-[5px] rounded-full bg-[#EEEEEE] cursor-pointer"
          >
            <Image src={WorledIcon} alt="World Icon" width={24} height={24} />
            <p className="text-base text-base_black font-medium">
              {selectedLanguage.toUpperCase()}
            </p>
            {isDropdownOpen && (
              <ul className="absolute mt-2 py-1 w-20 bg-white border border-gray-300 rounded-md shadow-md z-10">
                {["en", "ar"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang.toUpperCase()}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="md:flex hidden gap-4">
        <NavbarButtons text="Login" textColor="text-base_black" backgroundColor="bg-secondary_colar" />
        <NavbarButtons text="Start Now for Free" textColor="text-base_white" backgroundColor="bg-primary_colar" iconSrc={Right_arrow_White} />
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
            className={`fixed top-0 left-0 w-4/5 max-w-xs h-full bg-default_white shadow-lg z-30 p-4 transform transition-transform duration-500 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={() => setIsMenuOpen(false)} className="mb-4 text-xl p-2 hover:bg-gray-100 rounded-md focus:outline-none">
              <X size={24} strokeWidth={2} />
            </button>
            <ul className="flex flex-col gap-4">
              {["Features", "Solutions", "Packages", "Our Academy"].map((link) => (
                <li key={link}>
                  <a href="#" className="block text-lg font-medium hover:text-primary_colar transition-colors">
                    {link}
                  </a>
                </li>
              ))}
              <li
                role="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative flex items-center gap-2 px-2 py-[5px] rounded-full bg-[#EEEEEE] cursor-pointer"
              >
                <Image src={WorledIcon} alt="World Icon" width={24} height={24} />
                <p className="text-base text-base_black font-medium">
                  {selectedLanguage.toUpperCase()}
                </p>
                {isDropdownOpen && (
                  <ul className="absolute mt-2 py-1 w-20 bg-white border border-gray-300 rounded-md shadow-md z-10">
                    {["en", "ar"].map((lang) => (
                      <li
                        key={lang}
                        onClick={() => handleLanguageSelect(lang)}
                        className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                      >
                        {lang.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-4">
              <NavbarButtons text="Login" textColor="text-base_black" backgroundColor="bg-secondary_colar" />
              <NavbarButtons text="Start Now for Free" textColor="text-base_white" backgroundColor="bg-primary_colar" iconSrc={Right_arrow_White} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
