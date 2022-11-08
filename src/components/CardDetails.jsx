import Logo from "../assets/main_logo.png";

import Data from "./Data";
import Navbar from "./Navbar";

const CardDetails = () => {
  return (
    <>
      <div>
        <div className="w-full h-[64px] bg-[#ffffff]">
          <img className=" ml-[82px] mt-[12px]" src={Logo} alt="" />
        </div>
        <Data />
      </div>
    </>
  );
};

export default CardDetails;
