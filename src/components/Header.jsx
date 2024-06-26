import React from "react";
import { images } from "../assests";

const Header = () => {
  return (
    <header className="flex justify-between items-center  mt-[24px] pb-[24px] pl-[40px] pr-[16px] border-b-[2px] border-[#D9D9D91A] shadow-sm">
      <div className="bg-[#E7E7E7] flex items-center h-[50px]  text-[rgb(220,74,45)] text-[20px] py-[17px] px-[22px] font-['Satoshi Variable']">
        Logo
      </div>
      <div className="flex  border-[1px] w-[470px] border-[#E7E7E7] rounded-full py-[8px] px-[15px] ">
        <div className="flex items-center gap-2 bg-[#DC4A2D] py-[8px] px-[15px] text-white rounded-full">
          <div>
            <img src={images.briefcase_icon} alt="job_preview" />
          </div>
          Jobs
        </div>
        <div className="flex ml-[60px] mr-[70px] items-center gap-2 text-[#B0B0B0]">
          <div className="flex">
            <img src={images.message_icon} alt="message_box" />
            <sup className="text-[12px] mt-[7px] ml-[-4px] text-[#DC4A2D]">
              &#9679;
            </sup>
          </div>
          Messages
        </div>
        <div className="flex items-center gap-2 text-[#B0B0B0]">
          <div>
            <img src={images.coins_hand_icon} alt="payment_icon" />
          </div>
          Payments
        </div>
      </div>
      <div className="flex items-center justify-evenly w-[134px]">
        <div className="flex">
          <img src={images.bell_icon} alt="bell_icon" />
          <sup className="text-[12px] mt-[8px] ml-[-10px] text-[#DC4A2D]">
            &#9679;
          </sup>
        </div>
        <div>
          <img src={images.userPorfile} alt="profile_icon" />
        </div>
        <div>
          <img src={images.downarrow} alt="down_arrow" />
        </div>
      </div>
    </header>
  );
};

export default Header;
