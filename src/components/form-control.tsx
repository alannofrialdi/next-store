"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMemo } from "react";

interface FormComponentProps {
  t: any;
}

const FormComponent: React.FC<FormComponentProps> = ({ t }) => {
  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, {
          message: t("usernameRequired"),
        }),
        email: z.string().email({
          message: t("invalidEmail"),
        }),
      }),
    [t],
  );

  // Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const notify = () => {
    toast.success("Successfully submitted! but this action not added yet :(", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    notify();
    console.log(values);
  }

  return (
    <>
      <ToastContainer />
      <Form {...form}>
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-center my-4  text-[#1f1f1f] dark:text-[#f1f1f1]">
          {t("contact")}
        </h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("name")} {...field} />
                </FormControl>
                <FormDescription>{t("niceToKnowYou")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("email")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("email")} {...field} />
                </FormControl>
                <FormDescription>{t("weWillNotShareEmail")}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{t("submit")}</Button>
        </form>
      </Form>
    </>
  );
};

export default FormComponent;
