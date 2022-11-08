import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/main_logo.png";
import Upload from "../assets/icons/bxs_cloud-upload.svg";

const CreateChallenge = () => {
  const [side, setSide] = useState(true);
  return (
    <div>
      <div className="w-full h-[64px]">
        <img
          className="w-[87px] h-[38.11px] ml-[89px] mt-[13px]"
          src={Logo}
          alt=""
        />
      </div>
      <div className="w-full h-[107px] bg-[#F8F9FD]">
        <p className="text-[24px] leading-[29.05px] font-inter font-[700] pl-[89px] pt-[41px]">
          Challenge Details
        </p>
      </div>
      <div className="mt-[33px] ml-[89px] text-[16px] font-inter font-[500] leading-[19.36px] text-[#333333]">
        <p>Challenge Name</p>
        <input
          className="w-[453px] h-[39px] border border-gray-200 rounded-[5px] mt-[19px]"
          type="text"
          name=""
          id=""
        />
        <p className="mt-[34px]">Start Date</p>
        <input
          className="w-[453px] h-[39px] rounded-[5px] border border-gray-200 mt-[19px] pl-[20px]"
          type="text"
          onFocus={(e) => (e.target.type = "date")}
          name=""
          id=""
          placeholder="Add start date"
        />
        <p className="mt-[34px]">End Date</p>
        <input
          className="w-[453px] h-[39px] rounded-[5px] border border-gray-200 mt-[19px] pl-[20px]"
          type="text"
          name=""
          onFocus={(e) => (e.target.type = "date")}
          id=""
          placeholder="Add end date"
        />
        <p className="mt-[44px]">Description</p>
        <input
          className="w-[817px] h-[252px] rounded-[5px] border border-gray-200 mt-[19px] "
          type="text"
          name=""
          id=""
        />
        <p className="mt-[44px]">Image</p>
        <div className="flex justify-center items-center gap-[4px] w-[236px] h-[47px] rounded-[5px] bg-[#f4f4f4] border border-[#d9d9d9] mt-[19px]">
          <button className="">Upload</button>
          <img className="w-[18px]" src={Upload} alt="" />
        </div>
        <p className="mt-[41px]">Level Type</p>
        <div className=" flex justify-between items-center  mt-[19px] w-[236px] h-[39px] rounded-[5px] border border-gray-200 ">
          <p className="text-[14px] pl-[21px]  text-[#333333]">Easy</p>

          <IoIosArrowDown className="mr-[16px] cursor-pointer" />
        </div>
        <div className="w-[214px] h-[46px] rounded-[10px] bg-[#44924c] mt-[56px] mb-[67px]">
          <p className="text-center font-inter font-[500] text-[18px] leading-[21px] text-[#ffffff] pt-[12.5px]">
            Create Challenge
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
