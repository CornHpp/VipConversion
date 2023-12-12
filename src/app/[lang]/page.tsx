"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GiftCard from "@/components/giftCard";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const router = useRouter();

  const [giftList, setGiftList] = useState([{}, {}, {}, {}, {}, {}]);

  const clickMore = () => {
    setGiftList([...giftList, {}, {}, {}, {}]);
  };

  const { t } = useTranslation("common");
  return (
    <div className="w-screem max-w-screen-xl px-4 md:w-full">
      <div className="text-2xl lg:text-3xl">{t("home.title")}</div>
      <div className="mt-6 flex items-center">
        <div>
          {t("home.arrang")}: <span>全部</span>
        </div>
        <div
          onClick={() => {
            router.push("/address");
          }}
          className="ml-4 cursor-pointer text-[#00a4ff]"
        >
          {t("home.address")}&gt;
        </div>
      </div>

      <div className="card flex flex-wrap justify-between lg:justify-start">
        {giftList.map((item, index) => {
          return (
            <div
              key={index}
              className=" cardFour mt-[23px]
            h-[260px] w-[48%]  lg:mr-[42px]
            lg:mt-[40px] lg:h-[230px] lg:w-[280px]"
            >
              <GiftCard
                index={index}
                immediateExchange={() => {
                  router.push("/giftdetail");
                }}
              />
            </div>
          );
        })}
      </div>

      <div
        onClick={clickMore}
        className="mx-auto mt-10 w-[120px] cursor-pointer pb-8 text-[#00a4ff]"
      >
        {t("home.more")}&gt;
      </div>
    </div>
  );
}
