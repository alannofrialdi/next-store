"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import CardProduct from "@/components/card-product";
import { useRef, useEffect, useState } from "react";

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
  const [offset, setOffset] = useState<OffsetType>(["0 1", "0.6 1"]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOffset(["0 1", "0.6 1"]);
      } else {
        setOffset(["0 1", "1.33 1"]);
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
      <div className="min-h-dvh">
        <section
          id="brand"
          className="max-h-screen grid grid-rows-3  content-center lg:grid-rows-3 place-items-center px-4"
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

        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          className="mb-10"
        >
          <section
            id="products"
            className="flex flex-col justify-center items-center"
          >
            <h1 className="font-bold md:text-3xl lg:text-4xl text-2xl mb-4">
              {t("bestSeller")}
            </h1>
            <CardProduct />
          </section>
        </motion.div>
      </div>
    </div>
  );
}
