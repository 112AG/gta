import React from "react";
import background from "../assets/choicecardsbackground.svg";

function ChoiceCard() {
  return (
    <div className="pt-[144px] relative">
      <img src={background} alt="Image" className="w-screen" />
      <div className="absolute top-[22%] left-0 right-0 flex flex-col items-center">
        <p className="text-white uppercase text-[20px] font-[700] leading-[48px]">
          take action
        </p>
        <h2 className="uppercase text-[48px] font-[900] leading-[48px] text-white">
          the{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            choice
          </span>{" "}
          is yours
        </h2>


        <div className="flex flex-col xl:flex-row gap-[33px] mt-12">
            <div className="w-[578px] h-[816px]  bg-[rgba(26,32,43,0.6)]"></div>
<div
  className="w-[578px] h-[816px] border border-white backdrop-blur-[12.5px]"
  style={{
    background:
      "linear-gradient(111deg, rgba(130, 233, 95, 0.14) -6.34%, rgba(131, 234, 96, 0.31) 69.64%)",
    boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
  }}
></div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceCard;
