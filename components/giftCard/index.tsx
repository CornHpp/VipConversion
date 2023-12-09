import React from "react";
import giftPhoto from "@/assets/1.png";
import hotPhoto from "@/assets/hot.png";

interface GiftCardProps {
  // Add your prop types here
  index: number;
  immediateExchange?: () => void;
}

import Image from "next/image";

const GiftCard: React.FC<GiftCardProps> = ({ index, immediateExchange }) => {
  return (
    <div
      key={index + "a"}
      className="relative
      w-full
       border
        border-slate-300 bg-white shadow-[0_2px_8px_0_rgba(119,123,166,.1)] transition duration-500
        ease-in-out
        hover:shadow-xl 
        "
    >
      <div className="bg flex h-[120px] w-full items-center justify-center overflow-hidden bg-[#f5f8fa] lg:h-[50%]">
        <Image src={giftPhoto} alt="" className="w-[35%]"></Image>
      </div>
      <div className="flex h-[50%]  flex-col justify-between px-4 py-4">
        <div>怪企鹅定制鹅逗人</div>

        <div className="mt-[10px] items-end justify-between lg:flex">
          <div className=" text-[#f56f23]">600积分</div>
          <div
            className={`mt-[15px] flex h-[30px] 
            w-[80px] cursor-pointer
            items-center
            justify-center border border-[#00a4ff]
            text-[#00a4ff] ${index == 1 ? "grayscale" : ""}`}
            onClick={immediateExchange}
          >
            立即兑换
          </div>
        </div>
      </div>

      {index == 0 && (
        <Image
          src={hotPhoto}
          alt=""
          className="absolute right-0 top-0 h-[68px] w-[68px]"
        ></Image>
      )}
    </div>
  );
};

export default GiftCard;
