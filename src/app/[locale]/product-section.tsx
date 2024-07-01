"use client";
import { motion } from "framer-motion";
import CardProduct from "@/components/card-product";
import { RefObject } from "react";

interface ProductSectionProps {
  t: any;
  ref: RefObject<HTMLDivElement>;
  scrollYProgress: any;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  t,
  ref,
  scrollYProgress,
}) => {
  return (
    <section className="lg:min-h-screen mb-20">
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
  );
};

export default ProductSection;
