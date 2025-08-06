import React from "react";
import pathImagetwo from "../assets/paths/globalTradingAcademy-programbackground.svg";
import masterprogram from "../assets/paths/globalTradingAcademy-masteryprogram.svg";
import gradeint1 from "../assets/paths/gradient1.svg";
import gradeint2 from "../assets/paths/gradient2.svg";


function Program() {
  return (
    <div className="relative -top-20 ">
      {" "}
      <img src={pathImagetwo} alt="image" className="w-screen opacity-60" />
      <img src={gradeint1} alt="image" className="absolute bottom-0" />
            <img src={gradeint2} alt="image" className="absolute bottom-0 right-0" />

      <div className="absolute top-[36%] flex justify-center  gap-[218px] w-full">
        <img src={masterprogram} alt="Image" />
        
        <div className="pt-22">
            <div
          className="uppercase text-[48px] font-[900] leading-[48px]"
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          our program
        </div>{" "}
        <p className="uppercase text-[32px] font-[800] leading-[54px] text-white">
          prop firm mastery
        </p>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="591"
          height="4"
          className="my-4"
          viewBox="0 0 591 4"
          fill="none"
        >
          <path
            d="M0.57125 2.49999L590.433 2.32387"
            stroke="#4A4A4A"
            strokeWidth="3"
          />
        </svg>
        <p className="w-[573px] text-[#fff] text-[24px] font-[700] leading-[33px] py-[16px] pb-[64px]">
          Accelerate your journey to prop firm success with 30 days of live
          training, real strategy, and personal mentorship.
        </p>
        <div
          className="mt-6 uppercase w-[474px] h-[72px] flex items-center justify-center border-[4px] border-white py-[16px] px-[26px] "
          style={{
            background:
              "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
            backdropFilter: "blur(12.5px)",
          }}
        >
          <h2 className="font-[600] text-[28px] whitespace-nowrap sm:text-[28px] leading-[28px] text-white">
            join the mastery program
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
