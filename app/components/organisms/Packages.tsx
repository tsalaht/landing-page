import Image from "next/image";
import LeftEagle from "@/app/assets/icons/leftEgle.svg";
import righttEagle from "@/app/assets/icons/rightEagle.svg";
import start from "@/app/assets/icons/star.svg";
import whitAroow from "@/app/assets/icons/arrowRightWhite.svg";
import NavbarButtons from "../atoms/NavbarButtons";

export default function Packages() {
  return (
    <div className="w-full px-4 py-10 md:px-[120px] md:pb-20">
      <div className="w-full items-center justify-center flex flex-col mb-[10px]">
        <h1 className="text-2xl md:text-[40px] text-base_black font-bold text-center">
          Packages
        </h1>
        <p className="text-sm md:text-base text-base_black mt-4 mb-8 text-center">
          Enjoy a full suite of tools and features with Mutqin.
        </p>
        <span className="w-full block bg-custom-gradien4 h-[2px]"></span>
      </div>

      <div className="w-full items-center justify-center flex flex-col">
        <div className="w-full items-center justify-center flex flex-col">
          <p className="text-lg md:text-[24px] text-base_black font-medium text-center">
            Limited time special offer!
          </p>
          <p className="text-sm md:text-base text-base_black my-4 text-center">
            Get an extra <span className="font-bold text-primary_colar">30%</span> off all our packages!
          </p>
          <p className="text-sm md:text-base text-base_black my-4 text-center">
            Use coupon<span className="font-bold text-primary_colar"> SAVE30</span>
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-1 relative z-10 mt-[-100px]">
  <Image src={LeftEagle} alt="Left" className="z-0" />
  <div className="flex gap-4 mt-[-30px] md:mt-[-50px]">
    <input
      type="text"
      placeholder="Enter the coupon"
      className="pl-4 py-[13px] rounded-[3px] focus:outline-0 border-[1px] border-[#373E4F] w-full md:w-auto"
    />
    <button role="button" className="rounded-md px-6 py-2 bg-primary_colar">
      <p className="text-base_white text-sm md:text-lg font-semibold">Use Coupon</p>
    </button>
  </div>
  <Image src={righttEagle} alt="Right" />
</div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-6 mt-[-100px] z-30 relative bg-white">
        {/* Card1 */}
        <div className="w-full rounded-[3px] border-[1px] border-[#1B223C] p-6">
          <p className="text-xl md:text-2xl font-medium text-[#6B6566] mb-4">
            Monthly package
          </p>
          <div className="flex justify-between">
            <h1 className="text-[28px] md:text-[32px] text-base_black font-bold">
              17.99 $
            </h1>
            <div>
              <p className="text-sm md:text-xl font-medium text-[#6B6566]">/ Monthly</p>
              <p className="text-sm md:text-xl font-medium text-[#6B6566]">0.59$ / Daily</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <div className="w-full bg-secondary_colar hover:bg-[#FFAE12] rounded-md flex items-center justify-center">
              <NavbarButtons
                text="Subscribe Now"
                textColor="text-base_black"
                backgroundColor="bg-secondary_colar"
              />
            </div>
          </div>
        </div>

        {/* Card2 */}
        <div className="w-full rounded-[3px] border-[1px] border-[#1B223C]">
          <div className="w-full bg-primary_colar flex items-center justify-center gap-1 py-[9px]">
            <Image src={start} alt="star" />
            <p className="text-base_white text-lg font-medium">Most requested</p>
          </div>
          <div className="w-full p-6">
            <p className="text-xl md:text-2xl font-medium text-[#6B6566] mb-4">
              Quarterly Package (3 Months)
            </p>
            <div className="flex justify-between">
              <h1 className="text-[28px] md:text-[32px] text-base_black font-bold">
                48.6 $
              </h1>
              <div>
                <p className="text-sm md:text-xl font-medium text-[#6B6566]">/3 Months</p>
                <p className="text-sm md:text-xl font-medium text-[#6B6566]">0.54$ / Daily</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-8">
              <div className="w-full bg-primary_colar hover:bg-[#3B0CA0] rounded-md flex items-center justify-center">
                <NavbarButtons
                  text="Subscribe Now"
                  textColor="text-base_white"
                  backgroundColor="bg-primary_colar"
                  iconSrc={whitAroow}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card3 */}
        <div className="w-full rounded-[3px] border-[1px] border-[#1B223C] p-6">
          <p className="text-xl md:text-2xl font-medium text-[#6B6566] mb-4">Annual Package</p>
          <div className="flex justify-between">
            <h1 className="text-[28px] md:text-[32px] text-base_black font-bold">
              151 $
            </h1>
            <div>
              <p className="text-sm md:text-xl font-medium text-[#6B6566]">/ Annually</p>
              <p className="text-sm md:text-xl font-medium text-[#6B6566]">0.41$ / Daily</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-8">
            <div className="w-full bg-secondary_colar hover:bg-[#FFAE12] rounded-md flex items-center justify-center">
              <NavbarButtons
                text="Subscribe Now"
                textColor="text-base_black"
                backgroundColor="bg-secondary_colar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
