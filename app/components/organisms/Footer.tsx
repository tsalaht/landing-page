import NavbarButtons from "../atoms/NavbarButtons";
import Image from "next/image";
import Logo from "@/app/assets/icons/footerLogo.svg";
import Container from "@/app/assets/imgs/footer.png";
import facebook from "@/app/assets/icons/fb.svg";
import instagram from "@/app/assets/icons/insta.svg";
import twitter from "@/app/assets/icons/twitter.svg";
import tiktok from "@/app/assets/icons/tiktok.svg";
import linkdin from "@/app/assets/icons/linkdin.svg";
import youtub from "@/app/assets/icons/youtub.svg";
import arrowWhite from "@/app/assets/icons/arrowRightWhite.svg";

export default function Footer() {
  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:py-20 relative">
      <div className="absolute left-0 top-0 w-full -z-10 h-full">
        <Image src={Container} alt="Container" className="h-full w-full" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-10">
        {/* Part One */}
        <div className="max-w-[570px]">
          <Image src={Logo} alt="Logo" className="mb-6" />
          <p className="text-base_black text-xl font-medium mb-4">
            Mutqin is your one-stop platform for AI-powered content writing. We offer advanced tools that help individuals and businesses create unique, engaging, and error-free content.
          </p>
          <p className="text-base_black text-xl font-medium">
            We strive to be your first destination for writing professional content using the latest artificial intelligence technologies.
          </p>
        </div>

        {/* Part Two */}
        <div>
          <h4 className="text-xl font-semibold text-base_black mb-3">Features</h4>
          {[
            "Cross-platform compatibility",
            "Accurate record",
            "Real-time search",
            "Voice interaction",
            "Custom responses",
            "Multilingual",
            "Find out more",
          ].map((feature, index) => (
            <p key={index} className="text-lg text-[#6B6566] font-normal mb-2">
              {feature}
            </p>
          ))}
        </div>

        {/* Part Three */}
        <div>
          <h4 className="text-xl font-semibold text-base_black mb-3">Solutions</h4>
          {[
            "Writing articles",
            "Social media content writing",
            "Search Engine Optimization",
            "Content Strategies",
            "Email Marketing",
            "Find out more",
          ].map((solution, index) => (
            <p key={index} className="text-lg text-[#6B6566] font-normal mb-2">
              {solution}
            </p>
          ))}
        </div>

        {/* Part Four */}
        <div className="flex flex-col items-start">
          <h4 className="text-xl font-semibold text-base_black">Follow us on social media</h4>
          <div className="flex items-center gap-[30.4px] mt-3 mb-4">
            {[facebook, twitter, instagram, linkdin, youtub].map((icon, index) => (
              <Image key={index} src={icon} alt={`icon-${index}`} />
            ))}
          </div>
          <div className="bg-base_white border-[1px] rounded-md px-4 py-6 flex-col flex items-center gap-3 border-base_black">
            <h4 className="text-xl font-normal text-base_black">Get Started Today</h4>
            <Image src={facebook} alt="fb" />
            <NavbarButtons text="Join the Community" textColor="text-base_white" backgroundColor="bg-primary_colar" iconSrc={arrowWhite} />
          </div>
        </div>
      </div>
    </div>
  );
}