import { motion } from "framer-motion";
import Image from "next/image";

interface BrandSectionProps {
  t: any;
  mobile: boolean;
}

const BrandSection: React.FC<BrandSectionProps> = ({ t, mobile }) => {
  return (
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
  );
};

export default BrandSection;
