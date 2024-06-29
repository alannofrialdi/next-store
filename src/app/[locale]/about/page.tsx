import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Index");

  return (
    <div className="text-center pt-10">
      <h1>{t("company")}</h1>
    </div>
  );
}
