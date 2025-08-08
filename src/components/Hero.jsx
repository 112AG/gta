import React from "react";
import tenK from "../assets/heroImages/globalTradingAcademy-10k.png";
import expert from "../assets/heroImages/globalTradingAcademy-experts.png";
import learning from "../assets/heroImages/globalTradingAcademy-learning.png";
import coursee from "../assets/heroImages/globalTradingAcademy-courses.png";
import HeroCards from "./HeroCards";

function Hero() {
  return (
    <div className="px-4 2xl:px-0">
      <div className="py-8 xl:py-[60px] w-full max-w-[1580px] mx-auto flex justify-between items-start flex-col-reverse lg:flex-row font-inter">
        {/* Left */}
        <div className="w-full lg:w-[50%] font-inter z-40">
          <h1 className="w-full xl:w-[666px] xl:h-[201px] font-[900] text-[28px] sm:text-[32px] md:text-[32px] xl:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[38px] xl:leading-[55px] uppercase text-white mb-4 lg:mb-0">
            <span className="text-[#9DF280]">MONEY</span>{" "}
            <span>FOLLOWS SKILL</span>
            <br className="hidden lg:block" />
            <span className="font-[500]">
              AND WE BUILD THAT <span className="text-[#9DF280]">SKILL</span>{" "}
              <br className="hidden sm:block lg:block" />
              FROM <span className="text-[#9DF280]">DAY</span> ONE.
            </span>
          </h1>
          <p className="w-full xl:w-[641px] lg:h-[139px] text-[16px] sm:text-[18px] lg:text-[20px] font-[700] leading-[22px] sm:leading-[25px] lg:leading-[27px] text-[#fff] mb-6">
            No recycled signals or empty promises just direct coaching, clear
            strategies, and practical trading systems that help you trade with
            confidence and stay on track.
          </p>
          <a
            href="https://sachin4803.graphy.com/s/store"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 uppercase w-full sm:w-[509px] h-[50px] sm:h-[60px] border-[4px] border-white flex items-center justify-center px-2"
            style={{
              background:
                "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <h2 className="font-[600] text-[16px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[22px] sm:leading-[26px] lg:leading-[28px] text-white text-center">
              start earning through skill
            </h2>
          </a>

          {/* Three Cards Hero left sec */}
          <div className="flex flex-col sm:flex-row items-center justify-start gap-[8px] sm:gap-[11px] py-[20px] sm:py-[34px]">
            <div className="w-full sm:w-[204px] h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px]">
              <img
                src={learning}
                alt="Cards"
                className="w-[35px] sm:w-[45px]"
              />
              <div>
                <p className="uppercase font-[700] text-[10px] sm:text-[11px] leading-[10px] sm:leading-[11px] text-[#9df280]">
                  world class
                </p>
                <h4 className="uppercase font-[900] text-[20px] sm:text-[24px] leading-[20px] sm:leading-[24px] text-white">
                  learning
                </h4>
              </div>
            </div>
            <div className="w-full sm:w-[204px] h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px]">
              <img src={tenK} alt="Cards" className="w-[22px] sm:w-[27.64px]" />
              <div>
                <p className="uppercase font-[700] text-[10px] sm:text-[11px] leading-[10px] sm:leading-[11px] text-[#9df280]">
                  scale from zero
                </p>
                <h4 className="uppercase font-[900] text-[20px] sm:text-[24px] leading-[20px] sm:leading-[24px] text-white">
                  to 10k/mo
                </h4>
              </div>
            </div>
            <div className="w-full sm:w-[204px] h-[64px] border-[1px] border-[#D9D9D9] flex items-center justify-center gap-[8px]">
              <img
                src={expert}
                alt="Cards"
                className="w-[22px] sm:w-[28.18px]"
              />
              <div>
                <p className="uppercase font-[700] text-[9px] sm:text-[11px] leading-[9px] sm:leading-[11px] text-[#9df280]">
                  1-1 mentorship from
                </p>
                <h4 className="uppercase font-[900] text-[20px] sm:text-[24px] leading-[20px] sm:leading-[24px] text-white">
                  experts
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-1/2 flex justify-center items-center mb-8 lg:mb-0 px-2">
          <img
            src={coursee}
            alt="main-image"
            className="w-full max-w-[518px] sm:max-w-[600px] md:max-w-[768px] lg:max-w-[600px] xl:max-w-[742px] h-auto object-cover"
          />
        </div>
      </div>
      {/* hero section bottom text */}
      <div className="py-8 xl:py-0 px-4 2xl:px-0 xl:max-w-[1194px] xl:h-[129px] w-full mx-auto">
        <p className="text-white text-center font-inter text-[16px] sm:text-[18px] lg:text-[20px] font-[700] leading-[22px] sm:leading-[25px] lg:leading-[27px]">
          Join traders worldwide who trust Sachin Rao's personal guidance to get
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
          , you'll learn to trade smarter, safer, and with total confidence.
        </p>
      </div>

      {/* swiper */}
      <HeroCards />

      <div
        className="mt-6 uppercase w-full sm:w-[598px] mx-auto h-[50px] sm:h-[60px] border-[4px] border-white flex items-center justify-center px-2"
        style={{
          background:
            "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
          boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
          backdropFilter: "blur(12.5px)",
        }}
      >
        <h2 className="font-[600] text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] leading-[22px] sm:leading-[26px] lg:leading-[28px] text-white text-center">
          start mentorship with sachin rao
        </h2>
      </div>
    </div>
  );
}

export default Hero;
