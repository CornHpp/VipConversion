"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GiftCard from "@/components/giftCard";
import { Select } from "antd";

export default function Home() {
  const router = useRouter();

  const [giftList, setGiftList] = useState([{}, {}, {}, {}, {}, {}]);

  const clickMore = () => {
    setGiftList([...giftList, {}, {}, {}, {}]);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const options = [
    { value: "all", label: "all" },
    { value: "Bronze", label: "Bronze" },
    { value: "Silver", label: "Silver" },
    { value: "Gold", label: "Gold" },
    { value: "Platinum", label: "Platinum" },
    { value: "Diamond", label: "Diamond" },
    { value: "Elite", label: "Elite" },
  ];

  return (
    <div className="w-screem max-w-screen-xl px-4 md:w-full">
      <div className="text-2xl lg:text-3xl">
        Wager.game VIP Product Redemption
      </div>
      <div className="mt-6 flex items-center ">
        <div className="lg:flex lg:items-center">
          <div className="lg:mr-[10px]">Arrangement:</div>
          <Select
            defaultValue="all"
            style={{ width: 80 }}
            onChange={handleChange}
            options={options}
          />
        </div>
        <div
          onClick={() => {
            router.push("/address");
          }}
          className="ml-4 cursor-pointer text-[#00a4ff]"
        >
          Manage address book&gt;
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
        className="mx-auto mt-10 w-[120px] cursor-pointer pb-8 text-center text-[#00a4ff]"
      >
        more&gt;
      </div>
    </div>
  );
}
