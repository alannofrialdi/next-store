import { useTranslations } from "next-intl";
import Image from "next/image";
import LocalSwitcher from "@/components/local-switcher";
import NavbarMenu from "@/components/nav-bar";
export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className="flex items-center justify-center mt-20">
      {t("ourProducts")}
    </div>
  );
}
