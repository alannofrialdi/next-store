"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { CarouselProduct } from "@/components/carousel-product";

interface ProductSectionProps {
  t: any;
  scrollYProgress: any;
}

const ProductSection = forwardRef<HTMLDivElement, ProductSectionProps>(
  ({ t, scrollYProgress }, ref) => {
    return (
      <section className="min-h-screen">
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
          <CarouselProduct />
        </motion.div>
      </section>
    );
  },
);

ProductSection.displayName = "ProductSection";

export default ProductSection;
