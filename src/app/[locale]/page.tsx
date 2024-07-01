"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import CardProduct from "@/components/card-product";
import { useRef, useEffect, useState } from "react";
import { ModeToggle } from "@/components/theme-switcher";
import Link from "next/link";
import BrandSection from "./brand-section";
import ProductSection from "./product-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";

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
    handleResize(setOffset, setMobile);

    const resizeListener = () => handleResize(setOffset, setMobile);

    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    const alertShown = sessionStorage.getItem("alertShown");

    if (!alertShown) {
      alert(
        "Hello, this website made by Alan @alannofr 😁 just to inform u, this web have different behavior in dark mode and this is responsive website. so enjoy! btw this web not completed yet.",
      );

      sessionStorage.setItem("alertShown", "true");
    }
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
        <BrandSection t={t} mobile={mobile} />
        <ProductSection ref={ref} t={t} scrollYProgress={scrollYProgress} />
        <AboutSection t={t} />
        <ContactSection t={t} />
        <section id="footer" className="my-2">
          <p className="text-sm text-center text-muted-foreground">
            Created by{" "}
            <Link
              href="https://www.instagram.com/alannofr/"
              className="font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              @alannof
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
