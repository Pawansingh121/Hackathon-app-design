import React from "react";
import AI from "../assets/icons/Group 1000002515.svg";
import Data from "../assets/icons/Group 1000002516.svg";
import AIC from "../assets/icons/Group 1000002518.svg";
const stats = () => {
  return (
    <div className="w-full h-[200px] bg-[#002A3B]">
      <div className="grid grid-cols-3">
        <div className="flex pl-[184px] pt-[72px]">
          <div className="h-[55px] w-[55px] bg-[#F2F4FF] rounded-[15px]">
            <img className="" src={AI} alt="" />
          </div>
          <div className="pl-[22px] pt-2">
            <p className="text-[24px] font-inter font-[700] leading-[20px] text-[#FFFFFF]">
              100K+
            </p>
            <p className="text-[16px] pt-[4px] font-inter font-[500] text-[#FFFFFF]">
              AI model submissions
            </p>
          </div>
          <div className="h-[38px] w-[1px] bg-[#C4C4C4] ml-[75px]" />
        </div>
        <div className="flex pl-[184px] pt-[72px]">
          <div className="h-[55px] w-[55px] bg-[#F2F4FF] rounded-[15px]">
            <img className="" src={Data} alt="" />
          </div>
          <div className="pl-[22px] pt-2">
            <p className="text-[24px] font-inter font-[700] leading-[20px] text-[#FFFFFF]">
              50K+
            </p>
            <p className="text-[16px] pt-[4px] font-inter font-[500] text-[#FFFFFF]">
              Data Scientists
            </p>
          </div>
          <div className="h-[38px] w-[1px] bg-[#C4C4C4] ml-[75px]" />
        </div>
        <div className="flex pl-[184px] pt-[72px]">
          <div className="h-[55px] w-[55px] bg-[#F2F4FF] rounded-[15px]">
            <img className="" src={AIC} alt="" />
          </div>
          <div className="pl-[22px] pt-2">
            <p className="text-[24px] font-inter font-[700] leading-[20px] text-[#FFFFFF]">
              100+
            </p>
            <p className="text-[16px] pt-[4px] font-inter font-[500] text-[#FFFFFF]">
              AI Challenges hosted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stats;
