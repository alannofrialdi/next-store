"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import CardProduct from "@/components/card-product";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

type OffsetType = (
  | `${number} ${number}`
  | `${number} ${number}px`
  | `${number} ${number}vw`
  | `${number} ${number}vh`
  | `${number} ${number}%`
)[];

export default function Home() {
  const t = useTranslations("Index");
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<OffsetType>(["0 1", "0.33 1"]);
  const [mobile, setMobile] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  console.log(scrollYProgress);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOffset(["0 1", "0.5 1.4"]);
        setMobile(true);
      } else {
        setOffset(["0 1", "0.5 1"]);
        setMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <main className="min-h-dvh">
        <section
          id="brand"
          className="min-h-screen grid grid-rows-3  content-center lg:grid-rows-3 place-items-center px-4 mt-5"
        >
          <motion.div
            initial={{ y: "-30%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1, transition: { duration: 1.5 } }}
          >
            <Image src={"/nike.png"} alt="nike" width={200} height={200} />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="font-bold text-6xl md:text-8xl lg:text-9xl"
            >
              Alan Store
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="font-bold text-2xl md:text-3xl lg:text-4xl"
            >
              {t("comfortable")}
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="font-bold text-2xl md:text-3xl lg:text-4xl"
            >
              {t("quality")}
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="font-bold text-2xl md:text-3xl lg:text-4xl"
            >
              {t("cheap")}
            </motion.p>
          </motion.div>
        </section>

        <section className="lg:min-h-screen my-10">
          <motion.div
            ref={ref}
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
            className="flex flex-col justify-center items-center"
          >
            <h1
              id="products"
              className="text-3xl font-extrabold tracking-tight text-center lg:text-5xl mb-10"
            >
              {t("bestSeller")}
            </h1>
            <CardProduct />
          </motion.div>
        </section>

        <section id="about" className="lg:min-h-screen ">
          <Reveal>
            <div className="flex gap-4 p-20 bg-slate-500 lg:flex-row flex-col items-center justify-center">
              <Image
                // hidden={mobile}
                src={"/abt.jpg"}
                alt="nike"
                width={300}
                height={250}
                className="rounded shadow-xl shadow-slate-800 hover:scale-110 transition duration-500 cursor-pointer"
              />
              <div className="tracking-wide flex flex-col w-fit mt-4">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-center lg:text-5xl">
                  {t("about")}
                </h1>
                <TypographyP />
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}

 function TypographyP() {
  const t = useTranslations("Index");
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-center  line-clamp-3 hover:line-clamp-none md:px-4">
      {t("descAbout")}
    </p>
  );
}
