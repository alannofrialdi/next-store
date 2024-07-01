"use client";
import FormComponent from "@/components/form-control";
import { Reveal } from "@/components/reveal";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ContactSectionProps {
  t: any;
}

const ContactSection: React.FC<ContactSectionProps> = ({ t }) => {
  return (
    <section
      id="contact"
      className="md:min-h-screen flex justify-center items-center p-6"
    >
      <Reveal>
        <Card className="w-full max-w-4xl">
          <CardHeader className="text-center">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-[#1f1f1f] dark:text-[#f1f1f1]">
              {t("contact")}
            </h1>
          </CardHeader>
          <CardContent className="flex flex-col lg:flex-row lg:items-start gap-4">
            <div className="w-full lg:w-1/2 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.350075309858!2d107.15243747440985!3d-6.21748126089591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69842e1c6cbaf5%3A0xcf526143a39f5bfa!2sPERUMAHAN%20PILAR%20GADING%20MAS!5e0!3m2!1sid!2sid!4v1719828216658!5m2!1sid!2sid"
                className="w-full h-full rounded-lg shadow-md shadow-slate-400"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex flex-col w-full lg:w-1/2 px-4">
              <FormComponent t={t} />
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  );
};

export default ContactSection;
