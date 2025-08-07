import React from "react";
import background from "../assets/ourpromises/globalTradingAcademy-Container.svg";
import call from "../assets/ourpromises/globalTradingAcademy-oncall.svg";
import laptop from "../assets/ourpromises/globalTradingAcademy-onlaptop.svg";
import tablet from "../assets/ourpromises/globalTradingAcademy-tablet.svg";
import certify from "../assets/ourpromises/globalTradingAcademy-certificate.png";
import income from "../assets/ourpromises/globalTradingAcademy-income.png";
import doubt from "../assets/ourpromises/globalTradingAcademy-doubt.png";
import cash from "../assets/ourpromises/globalTradingAcademy-cash.png";

import tick from "../assets/ourpromises/globalTradingAcademy-tick.png";

function Promise() {
  const featureData = [
    {
      title: "1:1 Coaching",
      icon: certify,
      width: "38px",
      height: "56px",
      points: [
        "Personal calls, feedback, and handholding to crack funded challenges",
        "Real market used by firms to assess prop firms",
        "One mentor. One goal. Your funded success.",
      ],
      image: call,
    },
    {
      title: "Zero Guesswork",
      icon: doubt,
      width: "31px",
      height: "31.264px",
      points: [
        "A clear system to consistently pass funded accounts",
        "Made for Real People. Built on Real Results.",
        "Perfect for Beginners, Powerful for Pros.",
      ],
      image: laptop,
    },
    {
      title: "Action-Based Learning",
      icon: income,
      width: "28px",
      height: "37.73px",
      points: [
        "Live trading room with mentors for funded accounts",
        "Weekly homework, real-time alerts, and follow-along analysis",
        "You don’t just learn. You perform.",
      ],
      image: tablet,
    },
  ];

  return (
    <div className=" font-inter px-4 lg:px-0 relative overflow-x-clip h-full ">
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
        our promise
      </div>{" "}
      <img
        src={background}
        alt="Image"
        className=" min-w-[1920px] left-0-z-20"
      />
      <div className="pt-[120px] absolute top-0 w-full mx-auto">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className={`flex w-[1523px] flex-col lg:flex-row mx-auto justify-between items-center lg:items-start mb-[80px]`}
          >
            {/* Left - Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-[726.23px] h-[440px]"
            />

            {/* Right - Content */}
            <div className="text-white flex flex-col gap-4 w-[633px]">
              {/* Title & Icon */}
              <div className="flex items-center gap-4">
                <div className="w-[55px] h-[55px] border-[#d9d9d9] border-[2px] rounded-full flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt="icon"
                    className=" object-cover"
                    style={{ width: feature.width, height: feature.height }}
                  />
                </div>
                <p className="uppercase text-[32px] font-[600] leading-[56px]">
                  {feature.title}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col gap-[34px] pl-8">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex gap-2">
                    <img
                      src={tick}
                      alt="tick"
                      className="w-[20px] h-[28px] py-[6.5px]"
                    />
                    <p className="text-white text-[15.75px] font-[400] leading-[28px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-white flex-col pt-[872px] lg:pt-[216px] pb-[185px]">
              <div className="mt-6 uppercase sm:w-[509px] h-[60px] border-[4px] border-white flex items-center justify-center"
              style={{
            background:
              "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
            backdropFilter: "blur(12.5px)",
          }}>
        <h2 className="font-[600] text-[22px] sm:text-[28px] leading-[28px] text-white">
          join a proven system
        </h2>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4 text-white z-50">
        <img src={cash} alt="image" className="w-[24px] h-[22px] object-cover" /> 
        <p className="text-[14.742px] font-[400] leading-[16.92px] text-[#FFFFFFB3]"><span className="text-[16.734px] font-[700] leading-[28px]">Access 50+</span>
        Proven Methods to Trade with ease</p>
      </div>
      </div>

    </div>
  );
}

export default Promise;
