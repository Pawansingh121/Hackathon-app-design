import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const PastCard = ({ image, title, fullTiming }) => {
  return (
    <div className="w-[354px] h-[473px] rounded-[15px]   bg-[#ffffff]">
      <img className="w-[354px] h-[174px]" src={image} alt="" />
      <div className="  bg-red-200 h-[21px] w-[87px] rounded-[5px] ml-[133px] mt-[25px] ">
        <p className=" text-[12px] font-inter font-[400] text-center  leading-[16px text-gray-400 ">
          Past
        </p>
      </div>
      <div className="w-[246px] h-[44px] ml-[54px] mt-[19px]">
        <p className="text-[16px] font-poppins font-[600] leading-[26px] text-center text-black ">
          {title}
        </p>
      </div>
      <div className="w-[142px] h-[13px] ml-[150px] mt-[26px]">
        <p className="text-[14px] font-poppins font-[500] leading-[14px] text-gray-700">
          Ends in
        </p>
      </div>
      <div className="flex  ml-[74px] mt-[20px] text-[18px] font-poppins font-[600] leading-[28px]  text-gray-700">
        <p>{fullTiming}</p>
      </div>

      <div className="w-[182.55px] h-[42px] rounded-[10px] bg-[#44924c] ml-[86px] mt-[32px] flex justify-evenly items-center">
        <FiCheckCircle className="text-gray-100  " />
        <p className="text-[14px] font-poppins font-[600] leading-[18px] text-gray-50">
          Participate Now
        </p>
      </div>
    </div>
  );
};

export default PastCard;
