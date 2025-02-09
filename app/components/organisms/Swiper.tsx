"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import swiper1 from "@/app/assets/imgs/swiper1.png";
import swiper2 from "@/app/assets/imgs/swiper2.png";
import swiper3 from "@/app/assets/imgs/swiper3.png";
import swiper4 from "@/app/assets/imgs/swiper4.png";
import swiper5 from "@/app/assets/imgs/swiper5.png";
import swiper6 from "@/app/assets/imgs/swiper6.png";
import swiper7 from "@/app/assets/imgs/swiper7.png";
import swiper8 from "@/app/assets/imgs/swiper8.png";

export default function SwiperComponent() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const cards = [
    { title: "Content Writers", image: swiper1, description: "Produce high-quality, engaging content for your audience using our tools, from writing articles to creating premium promotional texts." },
    { title: "Content Managers", image: swiper2, description: "Plan, organize, and review content with ease and professionalism." },
    { title: "Proofreaders", image: swiper3, description: "Achieve the highest levels of linguistic and grammatical accuracy." },
    { title: "SEO Experts", image: swiper4, description: "Optimize your content to be search engine friendly." },
    { title: "Editors and Digital Magazines", image: swiper5, description: "Publish organized editorial articles using specialized tools." },
    { title: "Educational Copywriters", image: swiper6, description: "Create high-quality educational courses in an organized manner." },
    { title: "Podcast Creators", image: swiper7, description: "Write professional episode scripts and podcast descriptions." },
    { title: "Video Editors", image: swiper8, description: "Create video scripts and meta descriptions to engage audiences." },
  ];

  // Start the infinite animation
  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1500);
  };

  // Stop the animation
  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAnimation(); // Start the animation on component mount
    return stopAnimation; // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full px-4 md:px-[4px] py-10 md:py-20 overflow-x-auto">
      <div className="md:flex hidden w-full justify-center gap-[12px]">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              stopAnimation(); 
              setActiveIndex(index); 
            }}
            onMouseLeave={startAnimation} 
            className={`group p-[2px] h-[428px] ${
              activeIndex === index ? 'bg-custom-gradient' : 'bg-base_black'
            } rounded-md cursor-pointer transition-all`}
          >
            <div className={`w-[74px] h-full bg-custom-gradien2 rounded-md overflow-hidden ${
              activeIndex === index ? "w-full" : ""
            }`}>
           
              <div
                className={`w-full ${
                  activeIndex === index ? "flex" : "hidden"
                } px-6 py-[64px] items-center gap-10 bg-custom-gradien2 rounded-md`}
              >
                <div className="max-w-[529px] flex flex-col gap-4">
                  <h2 className="text-[32px] font-bold mt-2 text-base_black">
                    {card.title}
                  </h2>
                  <p className="text-[20px] mt-2 text-[#6B6566]">
                    {card.description}
                  </p>
                  <div className="flex gap-2 w-full">
                    {cards.map((_, bulletIndex) => (
                      <div
                        key={bulletIndex}
                        className={`bg-[#CCCCCC] ${
                          activeIndex === bulletIndex ? 'w-[72px]' : 'w-[40px]'
                        } mx-1 h-[7px] rounded-md relative`}
                      >
                        <div
                          className={`absolute w-[48px] h-full left-0 rounded-md ${
                            activeIndex === bulletIndex ? 'bg-primary_colar' : 'bg-[#CCCCCC]'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[300px] max-h-[300px]">
                  <Image src={card.image} alt={card.title} className="w-full h-full rounded-[3px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" md:hidden flex flex-col items-center justify-start w-full gap-3">
{cards.map((card, index) =>(
<div key={index} className=" w-full">
<h2 className="text-[24px] font-bold mt-2 text-base_black">
                    {card.title}
                  </h2>
                  <p className="text-[16px] mt-2 text-[#6B6566]">
                    {card.description}
                  </p>
</div>

) )}
      </div>
    </div>
  );
}
