import Image from "next/image";
import NavbarButtons from "../atoms/NavbarButtons";
import Content_Image from "@/app/assets/imgs/Content.png";
import AnimatedCard from "../molecules/AnimatedCard";
export default function Everything() {
  return (
    <div className="w-full px-4 md:px-[80px] py-10 md:py-20 bg-primary_colar_500">
<div className=" w-full flex items-center justify-center flex-col">
<h1 className=" text-base_white text-[40px] font-bold text-center">
Everything you need to write and manage content in one place!
</h1>
<p className=" text-[#EEEEEE]  text-xl md:text-lg text-center mt-4 mb-20 md:mt-6 md:w-[692px] w-full">
Whether you're managing a website, handling social media, or optimizing for SEO, we're here to support you at every stage of your journey.
</p>
</div>
{/* Cards Part */}
<div className=" w-full flex items-center justify-between flex-wrap gap-y-6  ">

  <AnimatedCard
        title="Writing different types of content for social media"
        description="Create platform-specific content with trend-based ideas. Develop a structured content calendar for consistent posting."
        buttonText="Writing for Social Media"
        imageSrc={Content_Image}
        animationTransform="group-hover:translate-y-[-40px]"
        scaleAnimation={1.05}
      />
  <AnimatedCard
        title="SEO-Optimized Article Writing for Better Rankings"
        description="Write well-structured articles with strategic keywords and clear formatting. Enhance readability and audience engagement for better rankings."
        buttonText="Article Writing & SEO"
        imageSrc={Content_Image}
        animationTransform="group-hover:translate-y-[-40px]"
        scaleAnimation={1.05}
      />

</div>
<div className=" w-full flex items-center justify-between flex-wrap gap-y-6 mt-[24px]  ">

  <AnimatedCard
        title="Comprehensive Proofreading for Error-Free Content"
        description="Ensure flawless writing by refining grammar, clarity, and style. Support classical and colloquial Arabic with precise corrections."
        buttonText="Comprehensive Proofreading"
        imageSrc={Content_Image}
        animationTransform="group-hover:translate-y-[-10px]"
        scaleAnimation={1.05}
      />
  <AnimatedCard
        title="Professional Rewriting to Enhance Clarity and Style"
        description="Revamp content for better readability and engagement. Adapt style while preserving meaning for different platforms."
        buttonText="Professional Rewriting"
        imageSrc={Content_Image}
        animationTransform="group-hover:translate-y-[-10px]"
        scaleAnimation={1.05}
      />

</div>
    </div>
  );
}