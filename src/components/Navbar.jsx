import React from "react";
import Logo from "../assets/main_logo.png";
const Navbar = () => {
  return (
    <div className="w-[1441px] h-[64px] bg-[#ffffff]">
      <img
        className="w-[87px] h-[38.11px] absolute top-[13px] left-[89px]"
        src={Logo}
        alt=""
      />
    </div>
  );
};

export default Navbar;
