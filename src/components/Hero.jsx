import Rocket from "../assets/icons/Rocket.svg";

const Hero = ({ setShow }) => {
  return (
    <div className="bg-[#003145] h-[561px] w-full grid grid-cols-2">
      <div className="pl-[206px] pt-[126px]">
        <h1 className="font-poppins font-[600] text-[48px] text-[#FFFFFF] leading-[56px] h-[112px] w-[643px]">
          Accelerate Innovation <br /> with Global AI Challenges
        </h1>
        <p className=" text-[#ECECEC] font-[500] font-poppins text-[18px] leading-[28px] pt-[38px]">
          AI Challenges at DPhi simulate real-world problems. It is a <br />{" "}
          great place to put your AI/Data Science skills to test on <br />{" "}
          diverse datasets allowing you to foster learning through <br />{" "}
          competitions.
        </p>

        <button
          onClick={() => setShow(false)}
          className="w-[198px] h-[47px] mt-[52px] bg-[#ffffff] rounded-[10px] text-[#003145] font-poppins font-[600] leading-[18px] text-center  "
        >
          Create Challenge
        </button>
      </div>
      <div className="pt-[106px] pl-[300px]">
        <img className="w-[242px] h-[294px]" src={Rocket} alt="" />
      </div>
      <div className="h-[115.91px] w-[9.71px] bg-[#FFCE5C] absolute top-[188px] left-[144px] " />
    </div>
  );
};

export default Hero;
