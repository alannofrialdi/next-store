"use client";
import { motion } from "framer-motion";
import CardProduct from "@/components/card-product";
import { forwardRef } from "react";

interface ProductSectionProps {
  t: any;
  scrollYProgress: any;
}

const ProductSection = forwardRef<HTMLDivElement, ProductSectionProps>(
  ({ t, scrollYProgress }, ref) => {
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
            className="text-3xl font-extrabold tracking-tight text-center lg:text-5xl mb-10"
          >
            {t("bestSeller")}
          </h1>
          <CardProduct />
        </motion.div>
      </section>
    );
  },
);

ProductSection.displayName = "ProductSection";

export default ProductSection;
