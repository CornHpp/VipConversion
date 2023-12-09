import React from "react";
import Image from "next/image";
import giftPhoto from "@/assets/1.png";

interface Props {
  // Define your component's props here
  width?: string;
  height?: string;
  showTitle?: boolean;
}

const GiftImg: React.FC<Props> = (props) => {
  const { width, height, showTitle = true } = props;
  return (
    <div
      className={`flex h-[130px] w-full flex-shrink-0 flex-col items-center bg-[#f5f8fa] lg:h-[140px] lg:w-[190px]`}
      style={{ width: width, height: height }}
    >
      <Image
        src={giftPhoto}
        alt="detail"
        className="mx-auto h-[98px] w-auto"
      ></Image>
      {showTitle && <div className="text-sm">怪企鹅定制鹅豆人</div>}
    </div>
  );
};

export default GiftImg;
