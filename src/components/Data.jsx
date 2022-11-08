import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Level from "../assets/icons/carbon_skill-level-basic.svg";

const Data = () => {
  return (
    <>
      <div className="w-full h-[419px] pt-[96px] bg-[#003145]">
        <div className="flex items-center gap-[13.67px] w-[464px] h-[34px] rounded-[5px] bg-[#ffce5c] ml-[131px]">
          <BiTimeFive className="mt-1 ml-[22px]" />
          <p className="text-[14px] font-inter font-[600] leading-[12px] text-[#000000]">
            Starts on 17th Jun'22 09:00 PM (India Standard Time)
          </p>
        </div>
        <h1 className="text-[40px] font-poppins font-[600] leading-[48px] text-[#ffffff] mt-[24px] ml-[127px]">
          Data Sprint 72 - Butterfly Identification
        </h1>
        <p className="text-[18px] leading-[24px] font-inter font-[500] text-[#f8f9fd] mt-[33px] ml-[127px]">
          Identify the class to which each butterfly belongs to
        </p>
        <div className="flex justify-center items-center gap-[8.12px] ml-[127px] mt-[24px] w-[102px] h-[34px] rounded-[5px] bg-[#f8f9fd]">
          <img className="w-[15.75px] h-[14.63px] " src={Level} alt="" />
          <p className="text-[14px] leading-[12px] font-inter font-[600] text-[#003145]">
            Easy
          </p>
        </div>
      </div>
      <div className="flex items-center w-full h-[66px] bg-[#ffffff] border-[0.3px] border-[#dde6ed] ">
        <p className="text-[18px] font-inter font-[700] leading-[29.12px] text-[#000000] ml-[147px]  ">
          Overview
        </p>

        <div className=" flex gap-[10px] ml-[889px] ">
          <button className="w-[91px] h-[37px] rounded-[10px] bg-[#44924c] text-[#ffffff] font-poppins font-[600] text-[14px] leading-[18px]">
            Edit
          </button>
          <button className="w-[91px] h-[37px] rounded-[10px] text-[#dc1414] text-[14px] leading-[18px] font-poppins font-[600] border border-[#dc1414] ">
            Delete
          </button>
        </div>
        <div className="w-[125px] h-[4px] rounded-[20px] bg-[#44924c] absolute mt-[60px] left-[127px] " />
      </div>
      <div>
        <p className="text-[18px] leading-[28px] font-poppins font-[500] text-[#64607d] w-[956px] h-[322px] ml-[126px] mt-[46px]">
          Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word "Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows. An agency of the Governmental Wildlife
          Conservation is planning to implement an automated system based on
          computer vision so that it can identify butterflies based on captured
          images. As a consultant for this project, you are responsible for
          developing an efficient model. Your Task is to build an Image
          Classification Model using CNN that classifies to which class of
          weather each image belongs to.
        </p>
      </div>
    </>
  );
};

export default Data;
