import React from "react";
import tenK from "../assets/heroImages/globalTradingAcademy-10k.png";
import expert from "../assets/heroImages/globalTradingAcademy-experts.png";
import learning from "../assets/heroImages/globalTradingAcademy-learning.png";
import coursee from "../assets/heroImages/globalTradingAcademy-courses.png";
import usFlag from "../assets/heroImages/globalTradingAgency-usFlag.png"
import HeroCards from "./HeroCards";

function Hero() {

  return (
    <div className="px-4 lg:px-0">
      <div className="xl:py-[60px] w-full max-w-[1580px] mx-auto flex justify-between flex-col-reverse lg:flex-row font-inter">
        {/* Left */}
        <div className="w-full lg:w-[50%] font-inter">
          <h1 className="w-full lg:w-[666px] lg:h-[201px] font-[900] text-[48px] leading-[55px] uppercase text-white">
            <span className="text-[#9DF280]">MONEY</span>{" "}
            <span>FOLLOWS SKILL</span>
            <br className="hidden lg:block"/>
            <span className="font-[500]">
              AND WE BUILD THAT <span className="text-[#9DF280]">SKILL</span>{" "}
              <br className="hidden lg:block"/>
              FROM <span className="text-[#9DF280]">DAY</span> ONE.
            </span>
          </h1>
          <p className="lg:w-[641px] lg:h-[139px] text-[20px] font-[700] leading-[27px] text-[#fff]">
            No recycled signals or empty promises just direct coaching, clear
            strategies, and practical trading systems that help you trade with
            confidence and stay on track.
          </p>
          <div className="mt-6 uppercase w-[509px] h-[60px] bg-[#00ff004f] border-[4px] border-white flex items-center justify-center">
            <h2 className="font-[600] text-[28px] leading-[28px] text-white">
              start earning through skill
            </h2>
          </div>
          {/* Three Cards Hero left sec */}
          <div className="flex items-center justify-start gap-[11px] py-[34px]">
            <div className="w-[204px] h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px]">
              <img src={learning} alt="Cards" className="w-[45px]" />
              <div>
                <p className="uppercase font-[700] text-[11px] leading-[11px] text-[#9df280]">
                  world class
                </p>
                <h4 className="uppercase font-[900] text-[24px] leading-[24px] text-white">
                  learning
                </h4>
              </div>
            </div>
            <div className="w-[204px] h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px]">
              <img src={tenK} alt="Cards" className="w-[27.64px]" />
              <div>
                <p className="uppercase font-[700] text-[11px] leading-[11px] text-[#9df280]">
                  sclae from zero
                </p>
                <h4 className="uppercase font-[900] text-[24px] leading-[24px] text-white">
                  to 10k/mo
                </h4>
              </div>
            </div>
            <div className="w-[204px] h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px]">
              <img src={expert} alt="Cards" className="w-[28.18px]" />
              <div>
                <p className="uppercase font-[700] text-[11px] leading-[11px] text-[#9df280]">
                  1-1 mentorship from
                </p>
                <h4 className="uppercase font-[900] text-[24px] leading-[24px] text-white">
                  experts
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-1/2 flex justify-center">
          <img
            src={coursee}
            alt="main-image"
            className="w-full h-full xl:max-w-[742px]"
          />
        </div>
      </div>
      {/* hero section bottom text */}
      <div className="py-12 xl:py-0 xl:max-w-[1194px] xl:h-[129px] w-full mx-auto">
        <p className="text-white text-center font-inter text-[20px] font-[700] leading-[27px] whitespace-wrap">
          Join traders worldwide who trust Sachin Rao’s personal guidance to get
          funded, withdraw consistently, and build serious trading income with
          his tested zero-loss strategy and a &nbsp;
          <span
            className="bg-gradient-to-r from-[#C4FFB0] via-[#C4FFB0] to-[#82E95F] bg-[length:200%_100%] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(86deg, #C4FFB0 37.91%, #82E95F 61.08%)",
            }}
          >
            clear trading roadmap
          </span>
          , you’ll learn to trade smarter, safer, and with total confidence.
        </p>
      </div>

      {/* swiper */}
      <HeroCards />
      
      <div className="w-[333px] xl:w-[883.19px] flex flex-col  items-start mx-auto text-white">
        <div className="flex items-center justify-center text-[18.438px] font-[700] leading-[32px] tracking-[-0.8px]"><h2>lucy - 19 </h2><img src={usFlag} alt="US Flag" className="h-[30px] w-[30px]"/></div>
        <p className="text-[#82e95f] flex items-start">
          $
          <span
            className="text-[35px] font-[800] leading-[35px]"
            style={{
              background: "linear-gradient(102deg, #82E95F 0%, #3BE900 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent"
            }}
          >
            250k
          </span>
          +profit
        </p>
      </div>
    </div>
  );
}

export default Hero;
