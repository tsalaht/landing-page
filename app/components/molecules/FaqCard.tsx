"use client";

import { Plus, Minus } from "lucide-react";
import { FC } from "react";
import clsx from "clsx";
import { useTranslation } from 'react-i18next';
interface FaqCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqCard: FC<FaqCardProps> = ({ title, description, isOpen, onToggle }) => {
  const { i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';
  return (
    <div className={`w-full flex ${isArabic? ' flex-row-reverse':''} justify-between p-8 border border-base_black rounded-md`}>
      <div className={`${isArabic? '  text-right':''}`}>
        <h4 className="md:text-[20px] text-xl font-semibold text-base_black">{title}</h4>
        <div
          className={clsx(
            "overflow-hidden transition-all duration-300 ease-in-out",
            {
              "max-h-0": !isOpen,
              "max-h-96": isOpen,
            }
          )}
        >
          <p className="md:text-xl text-lg font-normal text-[#6B6566] max-w-[729px] mt-4">
            {description}
          </p>
        </div>
      </div>
      <button
        aria-label={isOpen ? "Collapse section" : "Expand section"}
        onClick={onToggle}
        className="flex items-center justify-center"
      >
        {isOpen ? (
          <Minus width={24} height={24} className="text-base_black" />
        ) : (
          <Plus width={24} height={24} className="text-base_black" />
        )}
      </button>
    </div>
  );
};

export default FaqCard;
