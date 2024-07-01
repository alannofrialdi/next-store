"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import CardProduct from "@/components/card-product";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Reveal } from "@/components/reveal";
import { ModeToggle } from "@/components/theme=switcher";
import Link from "next/link";

type OffsetType = (
  | `${number} ${number}`
  | `${number} ${number}px`
  | `${number} ${number}vw`
  | `${number} ${number}vh`
  | `${number} ${number}%`
)[];

const handleResize = (
  setOffset: React.Dispatch<React.SetStateAction<OffsetType>>,
  setMobile: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (window.innerWidth < 768) {
    setOffset(["0 1", "0.5 1.4"]);
    setMobile(true);
  } else {
    setOffset(["0 1", "0.5 1"]);
    setMobile(false);
  }
};

export default function Home() {
  const t = useTranslations("Index");
  const ref = useRef<HTMLDivElement>(null);

  const [offset, setOffset] = useState<OffsetType>(["0 1", "0.33 1"]);
  const [mobile, setMobile] = useState<boolean>(false);

  const phone = "6282124995966";
  const message = "Welcome to Alan Store, Get in touch with admin!";
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  useEffect(() => {
    // Set initial state based on current window size
    handleResize(setOffset, setMobile);

    const resizeListener = () => handleResize(setOffset, setMobile);

    window.addEventListener("resize", resizeListener);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div>
      <main className="min-h-dvh">
        <div className="fixed left-2 top-1/2 z-10 flex flex-col gap-4">
          <Link href={url}>
            <Image src={"/whatsapp.png"} alt="wa" width={40} height={40} />
          </Link>
          <ModeToggle />
        </div>

        <section
          id="brand"
          className="min-h-screen grid grid-rows-3 content-center lg:grid-rows-1 place-items-center p-6 mt-4 lg:grid-cols-2"
        >
          <motion.div
            initial={{ y: "-30%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1, transition: { duration: 1.5 } }}
            className="dark:bg-slate-200 rounded p-10 dark:shadow-lg dark:shadow-slate-400 dark:animate-pulse"
          >
            <Image
              src={"/nike.png"}
              alt="nike"
              width={mobile ? 200 : 400}
              height={mobile ? 200 : 400}
            />
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
              className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl"
            >
              Alan Store
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="font-bold text-2xl lg:text-4xl"
            >
              {t("comfortable")}
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="font-bold text-2xl lg:text-4xl"
            >
              {t("quality")}
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              className="font-bold text-2xl lg:text-4xl"
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
              className="text-3xl font-extrabold tracking-tight text-center lg:text-5xl mb-10 "
            >
              {t("bestSeller")}
            </h1>
            <CardProduct />
          </motion.div>
        </section>

        <section id="about" className="lg:min-h-screen">
          <Reveal>
            <div className="flex gap-4 p-20 bg-slate-500 dark:bg-transparent lg:flex-row flex-col items-center justify-center">
              <Image
                src={"/abt.jpg"}
                alt="nike"
                width={300}
                height={250}
                className="rounded shadow-xl shadow-slate-800 hover:scale-110 transition duration-500 cursor-pointer"
              />
              <div className="tracking-wide flex flex-col w-fit mt-4">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-center lg:text-5xl text-[#1f1f1f] dark:text-[#f1f1f1]">
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

const TypographyP = () => {
  const t = useTranslations("Index");
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-center line-clamp-3 hover:line-clamp-none md:px-4 text-[#1f1f1f] dark:text-[#f1f1f1]">
      {t("descAbout")}
    </p>
  );
};
