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
      className="md:min-h-screen flex justify-center items-center p-6 "
    >
      <Reveal>
        <Card className="w-full max-w-4xl">
          <CardContent className="flex flex-col lg:flex-row lg:items-start gap-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.350075309858!2d107.15243747440985!3d-6.21748126089591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69842e1c6cbaf5%3A0xcf526143a39f5bfa!2sPERUMAHAN%20PILAR%20GADING%20MAS!5e0!3m2!1sid!2sid!4v1719828216658!5m2!1sid!2sid"
              className="lg:w-1/2 mt-4 h-96 rounded-lg shadow-md shadow-slate-400"
              allowFullScreen
              height={400}
              loading="lazy"
            ></iframe>

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
