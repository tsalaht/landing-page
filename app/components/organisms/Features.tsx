import Image from "next/image";
import Image1 from "@/app/assets/imgs/image1.png";
import Image2 from "@/app/assets/imgs/image2.png";
import Image3 from "@/app/assets/imgs/image3.png";
import Image4 from "@/app/assets/imgs/image4.png";
import Image5 from "@/app/assets/imgs/image5.png";
import FeatureCard from "../molecules/FeatureCard";
import NavbarButtons from "../atoms/NavbarButtons";
import Right_arrow_White from '@/app/assets/icons/arrowRightWhite.svg';

export default function Features() {
  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:py-20">
<div className=" w-full items-center flex flex-col justify-center md:px-[300px] mb-[80px]">
    
<h1 className=" text-primary_colar font-bold text-[40px]">
Features
</h1>
<p className=" text-[#5F595A] text-base md:text-lg text-center mt-4 md:mt-6">
We offer a unique set of features that meet the needs of individuals and businesses in writing content using artificial intelligence.
</p>
</div>

    <FeatureCard
          imageSrc={Image1}
          title="Advanced AI Solutions"
          description="Cutting-edge AI solutions to streamline your content creation process and boost productivity."
          accentColor="bg-cold_green" 
          reverse={false} 
        />
    <FeatureCard
          imageSrc={Image2}
          title="Support all types of content"
          description="Whether you need to write articles, social media posts, advertising copy, or even prepare reports and reviews, the site offers you a variety of options to meet your needs."
          accentColor="bg-[#6EDBFF]" 
          reverse={true}
        />
    <FeatureCard
          imageSrc={Image3}
          title="Advanced proofreading"
          description="We offer powerful proofreading tools that ensure content is free of grammatical and spelling errors, adding professionalism to written texts."
          accentColor="bg-[#FF7AD1]" 
          reverse={false} 
        />
    <FeatureCard
          imageSrc={Image4}
          title="Custom templates"
          description="The site has a rich library of templates for each type of content, helping you save time and effort in writing texts."
          accentColor="bg-[#B880FF]" 
          reverse={true} 
        />
            <FeatureCard
          imageSrc={Image5}
          title="Integration with the latest AI technologies"
          description="We provide accurate and fast results thanks to our use of the latest AI algorithms, ensuring improved content quality while saving time."
          accentColor="bg-cold_green" 
          reverse={false} 
        />
        <div className=" w-full items-center justify-center flex">
         <NavbarButtons text="Start 3 Days Free Trial" textColor="text-base_white" backgroundColor="bg-primary_colar" iconSrc={Right_arrow_White} />
        </div>
    </div>
  );
}