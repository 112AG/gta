import React from "react";
import pathImage from "../assets/paths/globalTradingAcademy-paths.svg";
import connector from "../assets/paths/globalTradingAcademy-connector.svg";
function Paths() {
  return (
    <div>
      <div
        className="uppercase text-center text-[20px] font-[700] leading-[48px]"
        style={{
          background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        you must choose
      </div>{" "}
      <div className="uppercase text-white text-center text-[48px] font-[900] leading-[48px]">
        two <span className="text-[#7cdb5d]">path</span> lie before{" "}
        <span className="text-[#7cdb5d]">you</span>
      </div>
      <img
        src={pathImage}
        alt="image"
        className="w-[1244px] h-[703px] object-cover pt-12"
      />
      <div className="w-full xl:flex items-center justify-center hidden">
        <img src={connector} alt="image" className="" />
      </div>
      <div className="w-full max-w-[1244px] mx-auto flex justify-between items-center relative">
        {/* left */}
        <div className="w-[501px] text-white text-center flex items-center justify-center flex-col absolute -left-8 top-0">
          <div className="uppercase text-[20px] font-[700] leading-[42px]">
            fail to achive
          </div>
          <h2 className="text-[48px] font-[900] leading-[48px] uppercase">
            stay unemployed
          </h2>
          <p className="pb-18">
            Don’t waste your time! Staying without a job stops you from learning
            forex and winning prop challenges, start changing your life now!
          </p>
          <div className="w-[346px] h-[66px] bg-[#272931] text-[28px] font-[600] leading-[28px] uppercase flex items-center justify-center">
            stay unemployed
          </div>
        </div>
        {/* right */}
        <div className="w-[508px] text-white text-center flex items-center justify-center flex-col absolute -right-12 top-0">
          <div
            className="uppercase text-[20px] font-[700] leading-[42px]"
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            join
          </div>
          <h2
            className="text-[48px] font-[900] leading-[48px] uppercase"
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            GLOBAL TRADING ACADEMY
          </h2>
          <p>
            Build a rewarding career! Join Global Trading Academy, master forex
            techniques to overcome prop challenges, and unlock financial growth,
            start today.
          </p>
          <div
            className="mt-6 uppercase cursor-pointer sm:w-[509px] h-[60px] border-[4px] border-white flex items-center justify-center"
            style={{
              background:
                "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <h2 className="font-[600] text-[22px] sm:text-[28px] leading-[28px] text-white">
              join global trading academy
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paths;
