import Navbar from "../molecules/Navbar";
import NavbarButtons from "../atoms/NavbarButtons";
import creditCard from "@/app/assets/icons/CreditCard.svg";
import gradientLine from "@/app/assets/icons/linearLine.svg";
import Play from "@/app/assets/icons/playIcone.svg";
import Image from "next/image";
import Cover from "@/app/assets/imgs/Video cover ZMLz-zmkhoc.png";
import Right_arrow_White from '@/app/assets/icons/arrowRightWhite.svg';
export default function HeroSection() {
  return (
    <div className="px-4 md:px-[120px] bg-primary_colar_500 py-6 pb-20">
      <Navbar />
      <div className="w-full mt-8 md:mt-[72px]">
      <h1 className="text-4xl md:text-[100px] text-base_white font-semibold text-center md:leading-[1.2]">
  <span className="text-secondary_colar">AI-Powered</span> Platform for Content Writing Projects
</h1>
        <p className="text-base_white text-lg md:text-2xl font-medium text-center mt-4 md:mt-4">
          AI-powered content creation and marketing for fast, high-quality results.
        </p>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center mt-6">
        <div className="hidden md:block absolute left-[150px] top-[20px] ">
          <Image src={gradientLine} alt="gradient line" />
        </div>
        <NavbarButtons
          text="Start 3 Days Free Trial"
          textColor="text-base_black"
          backgroundColor="bg-secondary_colar"
        />
        <div className="flex items-center mt-6 gap-2  relative z-10">
          <Image src={creditCard} alt="World Icon" width={24} height={24} />
          <p className="text-base_white text-base font-medium">No credit card required</p>
        </div>
        <div className="relative bg-custom-gradient p-[6px] rounded-md mt-10 md:mt-20 ">
          {/* Centered Absolute Element */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-default_white rounded-full">
              <Image src={Play} alt="World Icon" width={24} height={24} />
            </div>
          </div>

          {/* Cover Image */}
          <Image src={Cover} alt="cover"  />
        </div>
      </div>
    </div>
  );
}