"use client";
import React, { useState } from "react";
import giftPhoto from "@/assets/1.png";
import Image from "next/image";
import { Button } from "antd";
import GiftImg from "@/components/giftImg";

const AddressPage: React.FC = () => {
  return (
    <div
      className="flex flex-col rounded-lg border  border-[#d9d9d9] bg-white
    px-6 py-6 transition duration-500
    ease-in-out hover:shadow-xl lg:min-h-[600px] lg:min-w-[1000px]
    "
    >
      <div className="mb-[20px] w-[90%] text-[20px]">Exchange record</div>
      <div className="flex flex-col  items-center border-b-[1px] pb-[10px] lg:flex-row">
        <GiftImg width="100px" height="100px" showTitle={false}></GiftImg>

        <div className="mt-[20px] lg:ml-[20px] lg:mt-[0]">
          <div className="font-bold">怪企鹅定制鹅逗人</div>
          <div className="my-2">浙江省杭州市上城区xxx街道xxx路xxx号</div>
          <div>
            2023-12-12 12:12:12{" "}
            <span className="ml-[10px] text-[#f56f23]">600积分</span>
          </div>
        </div>
      </div>

      <div
        onClick={() => {}}
        className="mx-auto mt-6 w-[120px] cursor-pointer text-center text-[#00a4ff]"
      >
        more&gt;
      </div>
    </div>
  );
};

export default AddressPage;
