"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import swiper1 from "@/app/assets/imgs/swiper1.png";
import swiper2 from "@/app/assets/imgs/swiper2.png";
import swiper3 from "@/app/assets/imgs/swiper3.png";
import swiper4 from "@/app/assets/imgs/swiper4.png";
import swiper5 from "@/app/assets/imgs/swiper5.png";
import swiper6 from "@/app/assets/imgs/swiper6.png";
import swiper7 from "@/app/assets/imgs/swiper7.png";
import swiper8 from "@/app/assets/imgs/swiper8.png";

export default function SwiperComponent() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const cards = [
    {
      title: t("contentWritersTitle"),
      image: swiper1,
      description: t("contentWritersDescription"),
    },
    {
      title: t("contentManagersTitle"),
      image: swiper2,
      description: t("contentManagersDescription"),
    },
    {
      title: t("proofreadersTitle"),
      image: swiper3,
      description: t("proofreadersDescription"),
    },
    {
      title: t("seoExpertsTitle"),
      image: swiper4,
      description: t("seoExpertsDescription"),
    },
    {
      title: t("editorsMagazinesTitle"),
      image: swiper5,
      description: t("editorsMagazinesDescription"),
    },
    {
      title: t("educationalCopywritersTitle"),
      image: swiper6,
      description: t("educationalCopywritersDescription"),
    },
    {
      title: t("podcastCreatorsTitle"),
      image: swiper7,
      description: t("podcastCreatorsDescription"),
    },
    {
      title: t("videoEditorsTitle"),
      image: swiper8,
      description: t("videoEditorsDescription"),
    },
  ];

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1500);
  };

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAnimation();
    return stopAnimation;
  }, []);

  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:py-20 ">
      <div className=" w-full flex items-center justify-start gap-[48px] mb-10">
        <span className=" bg-custom-gradien3 h-[2px] flex-1"></span>
<h4 className="text-[40px] font-bold text-base_black">
{t("Customized_solutions_for")}
</h4>
<span className=" bg-custom-gradien3 h-[2px] flex-1"></span>
      </div>
      <div className={`md:flex hidden w-full justify-center gap-[12px] ${isArabic? 'flex-row-reverse':''}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              stopAnimation();
              setActiveIndex(index);
            }}
            onMouseLeave={startAnimation}
            className={`group p-[2px] h-[420px] ${
              activeIndex === index ? "bg-custom-gradient" : "bg-custom-gradien5"
            } rounded-md cursor-pointer transition-all`}
          >
            <div
              className={`w-[74px] h-full bg-custom-gradien2 rounded-md overflow-hidden ${
                activeIndex === index ? "w-full" : ""
              } `}
            >
              <div
                className={`w-full ${
                  activeIndex === index ? "flex" : "hidden"
                } px-6 py-[64px] items-center gap-10 bg-custom-gradien2 rounded-md ${isArabic? 'flex-row-reverse':''}`}
              >
                <div className="max-w-[529px] flex flex-col gap-4">
                  <h2 className={`text-[32px] font-bold mt-2 text-base_black ${isArabic ? 'text-right':''}`}>
                    {card.title}
                  </h2>
                  <p className={`text-[20px] mt-2 text-[#6B6566] ${isArabic ? 'text-right':''}`}>
                    {card.description}
                  </p>
                  <div className={`flex gap-2 w-full ${isArabic? 'flex-row-reverse':''}`}>
                    {cards.map((_, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className={`bg-[#CCCCCC] ${
                          activeIndex === bulletIndex ? "w-[72px]" : "w-[40px]"
                        } mx-1 h-[7px] rounded-md relative`}
                      >
                        <div
                          className={`absolute w-[48px] h-full left-0 rounded-md ${
                            activeIndex === bulletIndex
                              ? "bg-primary_colar"
                              : "bg-[#CCCCCC]"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[300px] max-h-[300px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full rounded-[3px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex flex-col items-center justify-start w-full gap-3">
        {cards.map((card, index) => (
          <div key={index} className="w-full">
            <h2 className="text-[24px] font-bold mt-2 text-base_black">
              {card.title}
            </h2>
            <p className="text-[16px] mt-2 text-[#6B6566]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}