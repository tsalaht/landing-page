import NavbarButtons from "../atoms/NavbarButtons";
import Image from "next/image";
import Line from "@/app/assets/icons/Line2.svg";
import pice1 from "@/app/assets/imgs/Union.png";
import pice2 from "@/app/assets/imgs/Subtract.png";

export default function Boost() {
  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:py-20 bg-primary_colar">
      <div className="w-full relative">
        {/* Content Section */}
        <div className="w-full md:w-[477px]">
          <h1 className="text-[32px] md:text-[40px] font-bold text-base_white">
            Boost your writing productivity
          </h1>
          <p className="text-[16px] md:text-[20px] font-normal text-white mt-4 mb-[40px]">
            Using a content writer is like having access to a whole team of
            content-writing experts who will write powerful content for you with
            the click of a button.
          </p>
          <NavbarButtons
            text="Start 3 Days Free Trial"
            textColor="text-base_black"
            backgroundColor="bg-secondary_colar"
          />
        </div>

        {/* Images */}
        <Image
          src={pice1}
          alt="pice1"
          className="hidden md:block absolute right-[80px] top-[-80px]"
        />
        <Image
          src={Line}
          alt="Line"
          className="hidden md:block absolute right-[-120px] bottom-[-80px]"
        />
        <Image
          src={pice2}
          alt="pice2"
          className="hidden md:block absolute right-[-120px] bottom-[-80px]"
        />
      </div>
    </div>
  );
}