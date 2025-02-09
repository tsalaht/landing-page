import NavbarButtons from "../atoms/NavbarButtons";

export default function Choice() {
  return (
    <div className="w-full px-4 md:px-[120px] py-10 md:py-20">
      <div className="flex flex-col items-center justify-center md:px-[300px]">
        <h1 className="text-base_black text-3xl md:text-[56px] text-center md:leading-[1.2]">
          Mutqin is your first choice for content writing!
        </h1>
        <p className="text-[#5F595A] text-base md:text-lg text-center mt-4 md:mt-6">
          At Mutqin, we empower you to produce high-quality content at lightning speed, blending efficiency with effectiveness across a diverse range of writing styles and formats. Our commitment to accuracy is unwavering, upheld through meticulous periodic reviews that refine and perfect every piece.
        </p>
        <div className="mt-6 md:mt-10">
          <NavbarButtons
            text="Our Ai Solutions"
            textColor="text-base_black"
            backgroundColor="bg-secondary_colar"
          />
        </div>
      </div>
    </div>
  );
}