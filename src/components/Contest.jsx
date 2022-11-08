import { useState } from "react";
import FirstImg from "../assets/cardimage/1.png";
import SecondImg from "../assets/cardimage/2.png";
import ThirdImg from "../assets/cardimage/3.png";
import FourthImg from "../assets/cardimage/4.png";
import FiveImg from "../assets/cardimage/5.png";
import SixstImg from "../assets/cardimage/6.png";
import ActiveCard from "./ActiveCard";
import CardDetails from "./CardDetails";
import PastCard from "./PastCard";
import UpcomingCard from "./UpcomingCard";

const Contest = () => {
  const [overview, setOverview] = useState(true);
  return (
    <div className="w-full h-[1196px] bg-[#003145]">
      {overview ? (
        <div
          onClick={() => setOverview(false)}
          className="grid grid-cols-3 gap-[50px]  ml-[134px] mr-[134px] pt-[75px] cursor-pointer "
        >
          <UpcomingCard
            image={FirstImg}
            title="Data Science Bootcamp - Graded Datathon"
            day="00"
            hour="15"
            min="22"
          />
          <UpcomingCard
            image={SecondImg}
            title="Data Sprint 72 - Butterfly Identification"
            day="00"
            hour="12"
            min="34"
          />
          <ActiveCard
            image={ThirdImg}
            status="Active"
            title="Data Sprint 71 - Weather Recognition"
            day="01"
            hour="17"
            min="10"
          />
          <ActiveCard
            image={FourthImg}
            title="Data Sprint 70-Airline Passenger Satisfaction"
            day="00"
            hour="11"
            min="27"
          />
          <PastCard
            image={FiveImg}
            title="Engineering Graduates Employment Outcomes"
            fullTiming="16th May'22 09:00 PM"
          />
          <PastCard
            image={SixstImg}
            title="Travel Insurance Claim Prediction"
            fullTiming="16th May'22 09:00 PM"
          />
        </div>
      ) : (
        <CardDetails />
      )}
    </div>
  );
};

export default Contest;
