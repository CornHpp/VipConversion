"use client";
import React, { useState } from "react";
import giftPhoto from "@/assets/1.png";
import Image from "next/image";
import { Button } from "antd";
import LevelTabel from "@/components/levelTable";

const AddressPage: React.FC = () => {
  return (
    <div className=" px-4">
      <div
        className="flex flex-col rounded-lg border  border-[#d9d9d9] bg-white
     px-4 py-6
     transition
    duration-500
    ease-in-out hover:shadow-xl lg:min-h-[600px] lg:min-w-[1000px]
    "
      >
        <div className="mb-[20px] w-[90%] text-[20px]">
          Exchange terms inquiry
        </div>

        <LevelTabel></LevelTabel>
      </div>
    </div>
  );
};

export default AddressPage;
