import React from "react";
import Recognition from "../assets/icons/IdentificationCard.svg";
import Community from "../assets/icons/Vector.svg";
import Challenge from "../assets/icons/Robot.svg";
import Skill from "../assets/icons/carbon_notebook-reference.svg";

const Details = () => {
  return (
    <div className="w-full h-[902px] bg-[#ffffff]">
      <div className="pt-[90px]">
        <h1 className="text-[#000000] font-poppins font-[600] text-[32px] leading-[20px] text-center">
          Why Participate in{" "}
          <span className="text-[#44924C]">AI Challenges?</span>
        </h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="w-[542px] h-[276px] ml-[160px] rounded-[20px] mt-[72px] bg-[#f8f9fd] pl-[33.69px] pt-[65.72px]">
          <img src={Skill} alt="" />
          <h1 className=" font-poppins font-[600] text-[24px] leading-[50px] text-[#000000] pt-[10px]">
            Prove your skills
          </h1>
          <p className="font-poppins font-[500] text-[16px] text-[#64607D]">
            Gain substantial experience by solving real-world problems <br />{" "}
            and pit against others to come up with innovative solutions.
          </p>
        </div>
        <div className="w-[542px] h-[276px] rounded-[20px] mt-[72px] bg-[#f8f9fd] pl-[33.69px] pt-[65.72px]">
          <img src={Community} alt="" />
          <h1 className=" font-poppins font-[600] text-[24px] leading-[50px] text-[#000000] pt-[10px]">
            Learn from community
          </h1>
          <p className="font-poppins font-[500] text-[#64607D] text-[16px]">
            One can look and analyze the solutions submitted by the <br /> other
            Data Scientists in the community and learn from them.
          </p>
        </div>
        <div className="w-[542px] h-[276px] ml-[160px] rounded-[20px] mt-[39px] bg-[#f8f9fd] pl-[33.69px] pt-[65.72px]">
          <img src={Challenge} alt="" />
          <h1 className=" font-poppins font-[600] text-[24px] leading-[50px] text-[#000000] pt-[10px]">
            Challenge yourself
          </h1>
          <p className="font-poppins font-[500] text-[#64607D] text-[16px]">
            There is nothing for you to lose by participating in a <br />{" "}
            challenge. You can fail safe, learn out of the entire <br />{" "}
            experience and bounce back harder.
          </p>
        </div>
        <div className="w-[542px] h-[276px] rounded-[20px] mt-[39px] bg-[#f8f9fd] pl-[33.69px] pt-[65.72px]">
          <img src={Recognition} alt="" />
          <h1 className=" font-poppins font-[600] text-[24px] leading-[50px] text-[#000000] pt-[10px]">
            Earn recognition
          </h1>
          <p className="font-poppins font-[500] text-[#64607D] text-[16px]">
            You will stand out from the crowd if you do well in AI <br />{" "}
            challenges, it not only helps you shine in the community but <br />{" "}
            also earns rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
