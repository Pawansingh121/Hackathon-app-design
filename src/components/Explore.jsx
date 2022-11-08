import React from "react";
import { FaSistrix } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Explore = () => {
  return (
    <div className="w-full h-[324px] bg-[#002a3b]">
      <div>
        <h3 className="font-poppins font-[600] text-[28px] leading-[40px] text-center text-[#FFFFFF] pt-[72px]">
          Explore Challenges
        </h3>
      </div>
      <div className="flex gap-[25px]">
        <div className=" w-[829px] h-[50px] rounded-[12px] mt-[64px] ml-[238px] bg-[#ffffff] flex gap-[13.59px]">
          <FaSistrix className="ml-[39.04px] mt-[17.04px] mb-[18.59px]" />
          <img src="" alt="" />

          <input
            className="w-[164px] h-[18px]  mt-[15px] font-poppins font-[300] text-[16px] leading-[20px] outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className=" w-[110px] h-[50px] rounded-[12px] bg-[#ffffff] mt-[63px] flex gap-4 cursor-pointer pl-[23px] ">
          <button className=" text-[#000000] font-inter font-[400] text-[18px] leading-[26px]">
            Filter
          </button>

          <span className="  pt-[18px]">
            <IoIosArrowDown className="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
