"use client";

import NavbarButtons from "../atoms/NavbarButtons";
import { Plus ,Minus  } from "lucide-react";
import { useState } from "react";
import FaqCard from "../molecules/FaqCard";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const faqData = [
  {
    title: "What is Mutqin Company?",
    description: "Mutqin is an AI solutions company focused on developing advanced content creation and SEO tools.",
  },
  {
    title: "What is the importance of using artificial intelligence tools in the field of content creation?",
    description: "Mutqin's AI tools help improve content quality and provide an innovative solution to improve content performance across search engines.",
  },
  {
    title: "Does Mutqin provide training courses to use its tools?",
    description: "Yes, we offer customized training courses for our users to ensure they take full advantage of our tools, thus enhancing their content creation skills.",
  },
  {
    title: "How can businesses benefit from using Matkan tools in their digital marketing strategies?",
    description: "Using our tools helps boost your brand's online visibility, improve search engine rankings, and achieve better results in digital marketing campaigns.",
  },
  {
    title: "Can I try out Mutqin tools before subscribing?",
    description: "Yes, we offer a free trial period for our tools where customers can evaluate the effectiveness of our tools before deciding to subscribe.",
  },
  {
    title: "Does Mutqin provide technical support to its customers?",
    description: "Yes, we have a dedicated technical support team working around the clock to assist our customers with any issues or queries that may arise.",
  },
];

  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:py-20">
<div className=" w-full flex items-center justify-center flex-col mb-10 ">
<h1 className="text-2xl md:text-[40px] text-base_black font-bold text-center">
Frequently Asked Questions
        </h1>
        <p className="text-sm md:text-base text-base_black mt-4 mb-8 text-center md:w-[434px] w-[80%]">
        Our support team is here to help. Contact us to answer your questions as soon as possible.
        </p>
</div>
{/* Cards */}
<div className="w-full flex  flex-col gap-6 ">

{/* Card1 */}
{/* <div className=" w-full flex justify-between p-8 border-[1px] border-base_black rounded-md">
<div>
<h4 className=" text-2xl font-semibold  text-base_black">
What is Mutqin Company?
</h4>
{showDescreption && <p className=" text-xl font-normal  text-[#6B6566] max-w-[729px] mt-4">
Mutqin is an AI solutions company focused on developing advanced content creation and SEO tools.

</p>}
</div>
<div role='button' onClick={()=>{setShowDescreption(!showDescreption)}}>
{showDescreption ? 
<Minus  width={24} height={24} className=" text-base_black"/> 
:<Plus  width={24} height={24} className=" text-base_black"/>}
</div>
</div> */}
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