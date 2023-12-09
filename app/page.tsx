"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GiftCard from "@/components/giftCard";
export default function Home() {
  const router = useRouter();

  const [giftList, setGiftList] = useState([{}, {}, {}, {}, {}]);

  const clickMore = () => {
    setGiftList([...giftList, {}, {}, {}, {}]);
  };
  return (
    <div className="w-screem max-w-screen-xl px-4 md:w-full">
      <div className="text-2xl lg:text-3xl">Wager.game VIP 产品兑换</div>
      <div className="mt-6 flex items-center">
        <div>
          排列方式: <span>全部</span>
        </div>
        <div
          onClick={() => {
            router.push("/address");
          }}
          className="ml-4 cursor-pointer text-[#00a4ff]"
        >
          邮寄地址管理&gt;
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {giftList.map((item, index) => {
          return (
            <GiftCard
              index={index}
              key={index}
              immediateExchange={() => {
                router.push("/giftdetail");
              }}
            />
          );
        })}
      </div>

      <div
        onClick={clickMore}
        className="mx-auto mt-10 w-[120px] cursor-pointer pb-8 text-[#00a4ff]"
      >
        查看更多产品&gt;
      </div>
    </div>
  );
}
