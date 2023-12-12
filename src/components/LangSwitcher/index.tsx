"use client";

import i18n from "../../../i18n";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Select } from "antd";

export const LangSwitcher = () => {
  const { lang } = useParams();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      className="mr-[10px]"
      onChange={(e) => {
        const value = e;
        const correctPathname = pathname.replace(`/${lang}`, `/${value}`);
        console.log(correctPathname);
        router.push(correctPathname);
      }}
      defaultValue={lang}
    >
      {i18n.locales
        .filter((x) => x !== "default")
        .map((res) => (
          <option key={res} value={res}>
            {res}
          </option>
        ))}
    </Select>
  );
};
