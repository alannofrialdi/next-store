import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView, mainControl, slideControl]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 1.35, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backdropFilter: "blur(2px)",
          zIndex: 10,
        }}
        transition={{ duration: 1.35, ease: "easeIn" }}
      />
    </div>
  );
};
