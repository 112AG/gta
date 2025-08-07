import React from "react";
import pathImage from "../assets/paths/globalTradingAcademy-paths.svg";
import connector from "../assets/paths/globalTradingAcademy-connector.svg";

function Paths() {
  return (
    <div className="h-full w-full px-4 lg:px-0 flex items-center justify-center flex-col">
      <div
        className="uppercase text-center text-[16px] sm:text-[18px] lg:text-[20px] font-[700] leading-[32px] sm:leading-[40px] lg:leading-[48px]"
        style={{
          background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        you must choose
      </div>
      
      <div className="uppercase text-white text-center text-[28px] sm:text-[36px] lg:text-[48px] font-[900] leading-[32px] sm:leading-[40px] lg:leading-[48px] px-2">
        two <span className="text-[#7cdb5d]">path</span> lie before{" "}
        <span className="text-[#7cdb5d]">you</span>
      </div>
      
      <img
        src={pathImage}
        alt="image"
        className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1244px] h-auto object-contain pt-8 lg:pt-12"
      />
      
      <div className="w-full xl:flex items-center justify-center hidden">
        <img src={connector} alt="image" className="" />
      </div>
      
      {/* Mobile Layout */}
      <div className="xl:hidden w-full max-w-[600px] mx-auto space-y-8 mt-8">
        {/* Left Path - Mobile */}
        <div className="w-full text-white text-center flex items-center justify-center flex-col bg-[#1a1b23] p-6 rounded-lg border border-gray-700">
          <div className="uppercase text-[16px] sm:text-[18px] font-[700] leading-[32px] sm:leading-[42px]">
            fail to achieve
          </div>
          <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-[900] leading-[28px] sm:leading-[36px] md:leading-[48px] uppercase mb-4">
            stay unemployed
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-6">
            Don't waste your time! Staying without a job stops you from learning
            forex and winning prop challenges, start changing your life now!
          </p>
          <div className="w-full max-w-[300px] sm:max-w-[346px] h-[50px] sm:h-[66px] bg-[#272931] text-[18px] sm:text-[24px] md:text-[28px] font-[600] leading-[20px] sm:leading-[28px] uppercase flex items-center justify-center rounded">
            stay unemployed
          </div>
        </div>
        
        {/* Right Path - Mobile */}
        <div className="w-full text-white text-center flex items-center justify-center flex-col bg-gradient-to-br from-green-900/20 to-green-700/10 p-6 rounded-lg border border-green-500/30">
          <div
            className="uppercase text-[16px] sm:text-[18px] font-[700] leading-[32px] sm:leading-[42px]"
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
            className="text-[20px] sm:text-[28px] md:text-[36px] font-[900] leading-[24px] sm:leading-[32px] md:leading-[40px] uppercase mb-4"
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
          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] mb-6">
            Build a rewarding career! Join Global Trading Academy, master forex
            techniques to overcome prop challenges, and unlock financial growth,
            start today.
          </p>
          <a
            href="https://sachin4803.graphy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase cursor-pointer z-50 w-full max-w-[400px] h-[50px] sm:h-[60px] border-[2px] sm:border-[4px] border-white flex items-center justify-center rounded"
            style={{
              background:
                "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <h2 className="font-[600] text-[16px] sm:text-[20px]  leading-[20px] sm:leading-[24px] md:leading-[28px] text-white px-2">
              join global trading academy
            </h2>
          </a>
        </div>
      </div>

      {/* Desktop Layout (XL and above) */}
      <div className="hidden xl:block w-full max-w-[1244px] mx-auto  justify-between items-center flex-col relative">
        {/* left */}
        <div className="w-[501px] text-white text-center flex items-center justify-center flex-col absolute -left-8 top-0">
          <div className="uppercase text-[20px] font-[700] leading-[42px]">
            fail to achieve
          </div>
          <h2 className="text-[48px] font-[900] leading-[48px] uppercase">
            stay unemployed
          </h2>
          <p className="pb-18">
            Don't waste your time! Staying without a job stops you from learning
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
          <a
            href="https://sachin4803.graphy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 uppercase cursor-pointer z-50 sm:w-[509px] h-[60px] border-[4px] border-white flex items-center justify-center"
            style={{
              background:
                "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <h2 className="font-[600] lg:text-[28px] leading-[28px] text-white">
              join global trading academy
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Paths;