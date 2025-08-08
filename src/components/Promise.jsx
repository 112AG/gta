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
        "You don't just learn. You perform.",
      ],
      image: tablet,
    },
  ];

  return (
    <div className="font-inter px-4 lg:px-0 relative overflow-x-clip h-full">
      <div
        className="uppercase text-center text-[28px] sm:text-[36px] lg:text-[48px] font-[900] leading-[32px] sm:leading-[40px] lg:leading-[48px] mb-8 lg:mb-0"
        style={{
          background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        our promise
      </div>

      {/* Background Image - Hidden on Mobile */}
      <img
        src={background}
        alt="Image"
        className="hidden lg:block min-w-[1920px] left-0 z-20"
      />

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center mb-12 sm:mb-16"
          >
            {/* Image */}
            <div className="w-full flex justify-center mb-6">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full max-w-[320px] sm:max-w-[400px] h-auto object-contain"
              />
            </div>

            {/* Content */}
            <div className="text-white flex flex-col gap-4 w-full max-w-[500px] px-2">
              {/* Title & Icon */}
              <div className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start">
                <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] border-[#d9d9d9] border-[2px] rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src={feature.icon}
                    alt="icon"
                    className="object-cover"
                    style={{ 
                      width: parseInt(feature.width) * 0.8 + "px", 
                      height: parseInt(feature.height) * 0.8 + "px" 
                    }}
                  />
                </div>
                <p className="uppercase text-[20px] sm:text-[24px] md:text-[28px] font-[600] leading-[24px] sm:leading-[32px] md:leading-[40px] text-center sm:text-left">
                  {feature.title}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="flex flex-col gap-4 sm:gap-6 pl-0 sm:pl-4">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <img
                      src={tick}
                      alt="tick"
                      className="w-[16px] sm:w-[20px] h-[22px] sm:h-[28px] py-[2px] sm:py-[6.5px] flex-shrink-0 mt-1"
                    />
                    <p className="text-white text-[14px] sm:text-[15px] md:text-[15.75px] font-[400] leading-[20px] sm:leading-[24px] md:leading-[28px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:block pt-[120px] absolute top-0 w-full mx-auto">
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

      {/* Bottom CTA Section */}
      <div className="flex items-center justify-center gap-2 mt-4 text-white flex-col pt-8 lg:pt-[872px] xl:pt-[216px] pb-12 lg:pb-[185px]">
        <div 
          className="mt-6 uppercase w-full max-w-[400px] sm:max-w-[509px] h-[50px] sm:h-[60px] border-[2px] sm:border-[4px] border-white flex items-center justify-center"
          style={{
            background:
              "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
            boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
            backdropFilter: "blur(12.5px)",
          }}
        >
          <h2 className="font-[600] text-[18px] sm:text-[22px] md:text-[28px] leading-[20px] sm:leading-[28px] text-white px-2 text-center">
            join a proven system
          </h2>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-white z-50">
          <img src={cash} alt="image" className="w-[20px] sm:w-[24px] h-[18px] sm:h-[22px] object-cover flex-shrink-0" /> 
          <p className="text-[12px] sm:text-[14px] md:text-[14.742px] font-[400] leading-[14px] sm:leading-[16.92px] text-[#FFFFFFB3] text-center">
            <span className="text-[14px] sm:text-[16px] md:text-[16.734px] font-[700] leading-[20px] sm:leading-[28px]">Access 50+</span> Proven Methods to Trade with ease
          </p>
        </div>
      </div>
    </div>
  );
}

export default Promise;