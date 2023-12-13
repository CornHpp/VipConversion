import React from "react";
import popupImage from "@/assets/popup.png";
import Image from "next/image";
interface PopupProps {
  hidePopup?: () => void;
}

const Popup: React.FC<PopupProps> = ({ hidePopup }) => {
  return (
    <div className=" fixed z-10 h-[100vh] w-[100vw]">
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
        className=" fixed left-0 top-0 h-[100vh] w-[100vw]"
        onClick={hidePopup}
      ></div>
      <div className="absolute left-[50%] top-[50%] z-20 flex h-[400px] w-[300px] translate-x-[-50%] translate-y-[-50%] flex-col items-center rounded-md bg-white pt-[20px] lg:h-[500px] lg:w-[400px]">
        <Image
          src={popupImage}
          alt=""
          className="w-[70%]"
          width={428}
          height={444}
        ></Image>
        <div className="mt-[20px] w-4/5 text-center">
          Exciting Rewards Await VIP Exchange, Non-stop Thrilling!
        </div>

        <div
          onClick={hidePopup}
          className="mt-[20px] w-[] cursor-pointer text-[30px] font-bold"
        >
          Join now
        </div>
      </div>
    </div>
  );
};

export default Popup;
