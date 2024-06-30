"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const handleChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}${pathname.slice(3)}`);
    });
    router.refresh();
  };

  return (
    <Select
      onValueChange={handleChange}
      disabled={isPending}
      defaultValue={localeActive}
    >
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Translate" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="en">English - US</SelectItem>
          <SelectItem value="id">Indonesian - ID</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
