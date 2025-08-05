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
      subheading: "Markets won’t wait. Will you?",
      paragraph: "Every second you hesitate, someone else is mastering the charts, entering trades, and compounding wealth. Do you have a strategy or just hope?",
      bottomheading: "Now is the time to level up or be left behind.",
    },
    {
      image: ai,
      heading: "TRADING IS CHANGING FAST",
      subheading: "AI, bots & smart money are ahead of you.",
      paragraph: "The markets are being dominated by automation and high-frequency strategies. If you’re still trading with old mindsets, you’re already behind.",
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
    <div className="flex items-center justify-center flex-col font-inter">
      <div className="mt-6 uppercase w-[509px] h-[60px] bg-[#00ff004f] border-[4px] border-white flex items-center justify-center">
        <h2 className="font-[600] text-[28px] leading-[28px] text-white">
          start earning through skill
        </h2>
      </div>
      <div className="flex-wrap md:flex-wrap-reverse  justify-center z-50 relative pt-[198px] flex gap-[17px]">
        {cards.map((data, idx) => (
                  <div
                  className="w-[418px] lg:w-[360px] 2xl:w-[418px] h-[589px] py-[16px] px-[26px] flex flex-col justify-center items-center text-white"
                  key={idx}
                  style={{
                    background:
                      "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
                    boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
                    backdropFilter: "blur(12.5px)",
                    WebkitBackdropFilter: "blur(12.5px)",
                  }}
                >
                  <img src={data.image} alt="clock"/>
                  <h2 className="uppercase text-center text-[40px] font-[900] leading-[49px] pt-[15.72px]">
                    {data.heading}
                  </h2>
                  <h6 className="uppercase text-center text-[20px] font-[900] leading-[27px] py-[8px]">
                    {data.subheading}
                  </h6>
                  <p className="text-center text-[20px] font-[500] leading-[27px]">
                    {data.paragraph}
                  </p>
                  <h6 className="py-[16px] text-center text-[20px] font-[900] leading-[27px]">{data.bottomheading}</h6>
                </div>          
        ))}

      </div>
    </div>
  );
}

export default Cards;
