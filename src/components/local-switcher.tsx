"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LocalSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();

  const handleChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}/home`);
    });
  };

  return (
    <Select
      onValueChange={handleChange}
      disabled={isPending}
      defaultValue={localeActive}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Translate" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="id">Indonesian</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
