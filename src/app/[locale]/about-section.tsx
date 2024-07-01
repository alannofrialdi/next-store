import { Reveal } from "@/components/reveal";
import Image from "next/image";

interface AboutSectionProps {
  t: any;
}

const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section id="about" className="lg:min-h-screen my-20">
      <Reveal>
        <div className="flex gap-4 p-20  lg:flex-row flex-col items-center justify-center">
          <Image
            src={"/abt.jpg"}
            alt="nike"
            width={300}
            height={250}
            className="rounded shadow-xl shadow-slate-800 hover:scale-110 transition duration-500 cursor-pointer"
          />
          <div className="tracking-wide flex flex-col w-fit mt-8">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-center lg:text-5xl text-[#1f1f1f] dark:text-[#f1f1f1]">
              {t("about").toUpperCase()}
            </h1>
            <TypographyP t={t} />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

const TypographyP: React.FC<{ t: any }> = ({ t }) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-center line-clamp-4 lg:line-clamp-none hover:line-clamp-none md:px-4 text-[#1f1f1f] dark:text-[#f1f1f1]">
      {t("descAbout")}
    </p>
  );
};

export default AboutSection;
