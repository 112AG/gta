import React from "react";
import guidance from "../assets/teachTrading/globalTradingAcademy-group.png";
import vector from "../assets/teachTrading/globalTradingAcademy-learning.png";
import learning from "../assets/teachTrading/globalTradingAcademy-Vector.png";
import teachTrade from "../assets/teachTrading/globalTradingAcademy-teachtrading.svg";
function BuildTrade() {
  return (
    <div className="pt-[186px] pb-[216px] font-inter px-4 lg:px-0">
      <div
        className="uppercase text-center text-[48px] font-[900] leading-[48px]"
        style={{
          background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        we don't just teach trading
      </div>{" "}
      <h4 className="uppercase text-center text-[32px] font-[900] leading-[48px] text-white py-2">
        we build real traders
      </h4>
      <p className="2xl:w-[1237px] 2xl:h-[181px] text-[20px] text-center font-[700] leading-[27px] text-white">
        At Global Trading Academy, we do things differently. Led by Sachin Rao
        an experienced trader with years in live markets we offer more than just
        lessons. You get personal mentorship, clear rules, and a community built
        for real results.
        <br />
        <br />
        Sachin’s approach combines practical risk management, a disciplined
        trading mindset, and smart strategies to help you grow your skills,
        protect your capital, and trade with confidence whether you’re managing
        funded accounts or growing your swing trading portfolio.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-[24px] pt-[40px]">
        {/* one */}
        <div
          className="flex w-[413px] h-[80px] py-[16px] px-[26px] flexcol justify-center items-center"
          style={{
            background:
              "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
            backdropFilter: "blur(12.5px)",
          }}
        >
          <img src={guidance} alt="image" />
          <p className="w-[256px] text-white text-center text-[28px] font-[700] leading-[27px]">
            Real guidance
          </p>
        </div>
        {/* two */}
        <div
          className="flex w-[413px] h-[80px] py-[16px] px-[26px] flexcol justify-center items-center"
          style={{
            background:
              "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
            backdropFilter: "blur(12.5px)",
          }}
        >
          <img src={learning} alt="image" />
          <p className="w-[256px] text-white text-center text-[28px] font-[700] leading-[27px]">
            Practical systems
          </p>
        </div>
        {/* three */}
        <div
          className="flex w-[413px] h-[80px] py-[16px] px-[26px] flexcol justify-center items-center"
          style={{
            background:
              "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
            backdropFilter: "blur(12.5px)",
          }}
        >
          <img src={vector} alt="image" />
          <p className="w-[256px] text-white text-center text-[28px] font-[700] leading-[27px]">
            Personal feedback
          </p>
        </div>
      </div>
      <div className="flex items-start flex-col-reverse xl:flex-row justify-between pt-[80px]">
        {/* left */}
        <div>
          <div
            className="w-[340px] h-[33px] text-[20px] font-[700] leading-[48px] uppercase"
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            30 days is all you need
          </div>
          <div className="w-[430px] h-[93px] text-white text-[48px] font-[900] leading-[48px] uppercase">
            <span
              style={{
                background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              lock in
            </span>{" "}
            for the nex 30 days
          </div>
          <p className="text-white text-[20px] font-[700] leading-[27px] py-4">You can become a profitable trader in just 30 days of relentless focus.</p>
          <p className="xl:w-[667px] text-white text-[20px] font-[500] leading-[27px]">
            But only if you follow proven trading systems with the right strategies and mentorship.<br /><br />In the Global Trading Academy, you will gain direct access to expert traders and coaches who will guide you through a structured, step-by-step path designed to turn beginners into confident, skilled traders.<br /><br />Whether it’s day trading, swing trading, or long-term investing, our community is built to help you succeed faster than you ever thought possible.
          </p>
                    <div className="mt-6 uppercase sm:w-[509px] h-[60px] bg-[#00ff004f] border-[4px] border-white flex items-center justify-center">
            <h2 className="font-[600] text-[22px] sm:text-[28px] leading-[28px] text-white">
              start your 30 days journey
            </h2>
          </div>
        </div>
        {/* right */}
        <img src={teachTrade} alt="Image" />
      </div>
    </div>
  );
}

export default BuildTrade;
