"use client";
import React, { useState } from "react";
import { Button } from "antd";
import GiftImg from "@/components/giftImg";
import { useRouter } from "next/navigation";

const AddressPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="px-4">
      <div
        className="flex flex-col rounded-lg  border border-[#d9d9d9]
    bg-white px-6 py-6 transition
    duration-500 ease-in-out hover:shadow-xl lg:min-h-[600px]
    lg:min-w-[1000px]
    "
      >
        <div>
          <div className="mb-[20px] w-[90%] text-[20px]">
            VIP redemption products
          </div>

          <div
            className="bg-[rgba(0,164,255,.1)] px-[16px]
       py-[8px] text-[#00a4ff] lg:w-[100%]"
          >
            Products cannot be returned or exchanged after successful
            redemption.
          </div>

          <div className="mt-6 lg:flex">
            <GiftImg></GiftImg>
            <div className="text-[14px] text-[#999] lg:ml-6">
              <div className="mt-4 flex items-center">
                <div className=" w-[140px]"> Redeem product: </div>
                <span className="text-[#333]">怪企鹅定制鹅豆人</span>
              </div>

              <div className="mt-2 flex items-center">
                <div className="w-[140px]">Redemption level </div>
                <span className="text-[#333]">600积分</span>
              </div>
              <div className="mt-2 flex items-center">
                <div className="w-[140px]">Current level</div>
                <span className="text-[#333]">0积分</span>
              </div>
              <div className="mt-2 flex items-center">
                <div className="w-[140px]">Consignee </div>
                {/* <span className="text-[#333]">新增收货地址</span> */}
                <span
                  onClick={() => {
                    router.push("/address");
                  }}
                  className="cursor-pointer text-[#00a4ff]"
                >
                  Add consignment information
                </span>
              </div>
              {/* <div className="mt-2 flex items-center">
                <div className="w-[140px]">{t("giftdetail.phone")} </div>
                <span className="text-[#333]">新增收货地址</span>
              </div> */}
              {/* <div className="mt-2 flex items-center">
                <div className="w-[140px]">收货地址 </div>
                <span className="text-[#333]">新增收货地址</span>
              </div> */}
            </div>
          </div>

          <div className="mt-[50px] flex items-center">
            <Button
              onClick={() => {
                router.back();
              }}
              className="h-[40px] w-[100px] lg:w-[200px]"
            >
              Cancel
            </Button>
            <Button
              type="primary"
              className="ml-[50px] h-[40px] w-[100px] bg-[#4096FF] text-white lg:w-[200px] "
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
