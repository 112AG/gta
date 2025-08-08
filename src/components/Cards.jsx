import React from "react";
import background from "../assets/pageTwo/globalTradingAcademy-backgroundsecond.svg";
import clock from "../assets/pageTwo/globalTradingAcademy-clock.svg";
import ai from "../assets/pageTwo/globalTradingAcademy-ai.svg";
import skill from "../assets/pageTwo/globalTradingAcademy-skill.svg";

function Cards() {
  const cards = [
    {
      image: clock,
      heading: "THE CLOCK IS TICKING",
      subheading: "Markets won't wait. Will you?",
      paragraph: "Every second you hesitate, someone else is mastering the charts, entering trades, and compounding wealth. Do you have a strategy or just hope?",
      bottomheading: "Now is the time to level up or be left behind.",
    },
    {
      image: ai,
      heading: "TRADING IS CHANGING FAST",
      subheading: "AI, bots & smart money are ahead of you.",
      paragraph: "The markets are being dominated by automation and high-frequency strategies. If you're still trading with old mindsets, you're already behind.",
      bottomheading: "You need the edge. Learn how to trade like the pros with precision.",
    },
    {
      image: skill,
      heading: "SKILLS PAY THE BILLS",
      subheading: "The only shortcut is skill-building.",
      paragraph: "Imagine understanding exactly when to enter & exit. Imagine compounding profits month after month. We turn beginners into confident traders with real skills.",
      bottomheading: "Invest in yourself. Your future portfolio will thank you.",
    }
  ];
  
  return (
    <div className="flex items-center justify-center flex-col font-inter px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch z-50 relative pt-[80px] sm:pt-[128px] gap-4 sm:gap-[17px]">
        {cards.map((data, idx) => (
          <div
            className="w-full max-w-[318px] sm:max-w-[360px] lg:w-[360px] 2xl:w-[418px] 
                       h-auto min-h-[480px] sm:min-h-[526px] lg:h-[589px] 
                       py-4 sm:py-[16px] px-4 sm:px-[26px] 
                       flex flex-col justify-center items-center text-white
                       mx-auto lg:mx-0"
            key={idx}
            style={{
              background:
                "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
              backdropFilter: "blur(12.5px)",
              WebkitBackdropFilter: "blur(12.5px)",
            }}
          >
            <img 
              src={data.image} 
              alt={`${data.heading} icon`}
              className="w-auto h-auto max-w-[80px] sm:max-w-none object-contain"
            />
            <h2 className="uppercase text-center text-[24px] xs:text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[40px] 
                          font-[900] leading-[28px] xs:leading-[32px] sm:leading-[36px] lg:leading-[42px] xl:leading-[49px] 
                          pt-3 sm:pt-[15.72px] px-2">
              {data.heading}
            </h2>
            <h6 className="uppercase text-center text-[12px] xs:text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 
                          font-[900] leading-[16px] xs:leading-[18px] sm:leading-[22px] lg:leading-[25px] xl:leading-[27px] 
                          py-2 sm:py-[8px] px-2">
              {data.subheading}
            </h6>
            <p className="text-center text-[12px] xs:text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 
                         font-[500] leading-[16px] xs:leading-[18px] sm:leading-[22px] lg:leading-[25px] xl:leading-[27px] 
                         px-2 mb-4 sm:mb-0">
              {data.paragraph}
            </p>
            <h6 className="py-3 sm:py-[16px] text-center text-[14px] sm:text-[18px] lg:text-[20px] 
                          font-[900] leading-[18px] sm:leading-[24px] lg:leading-[27px] px-2">
              {data.bottomheading}
            </h6>
          </div>          
        ))}
      </div>
    </div>
  );
}

export default Cards;