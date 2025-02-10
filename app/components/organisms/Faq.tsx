"use client";

import NavbarButtons from "../atoms/NavbarButtons";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import FaqCard from "../molecules/FaqCard";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      title: t("faq1Title"),
      description: t("faq1Description"),
    },
    {
      title: t("faq2Title"),
      description: t("faq2Description"),
    },
    {
      title: t("faq3Title"),
      description: t("faq3Description"),
    },
    {
      title: t("faq4Title"),
      description: t("faq4Description"),
    },
    {
      title: t("faq5Title"),
      description: t("faq5Description"),
    },
    {
      title: t("faq6Title"),
      description: t("faq6Description"),
    },
  ];

  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:pb-20 bg-custom-gradien2">
      <div className="w-full flex items-center justify-center flex-col mb-10">
        <h1 className="text-2xl md:text-[40px] text-base_black font-bold text-center">
          {t("faqTitle")}
        </h1>
        <p className="text-sm md:text-base text-base_black mt-4 mb-8 text-center md:w-[434px] w-[80%]">
          {t("faqDescription")}
        </p>
      </div>
      {/* Cards */}
      <div className="w-full flex flex-col gap-6">
        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            title={faq.title}
            description={faq.description}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
