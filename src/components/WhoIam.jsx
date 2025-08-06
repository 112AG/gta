import React from "react";
import owner from "../assets/SachinRaw.svg";

function WhoIam() {
  return (
    <div className="font-inter px-4 lg:px-0 relative  h-[1250px] w-[1580px] mx-auto">
      <p className="text-white uppercase text-[20px] text-center font-[700] leading-[48px]">
        meet your metor
      </p>
      <h2 className="uppercase text-[48px] text-center font-[900] leading-[48px] text-white">
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          who
        </span>{" "}
        i am
      </h2>

      <img src={owner} alt="Image" className="relative -left-50 top-8" />

      <div className="w-[689px] absolute top-44 right-12 z-50">
        <h2 className="text-[40px] font-[700] leading-[27px] text-[#a6f58b] mb-[8px]">
          I am Sachin Rao
        </h2> 
        <p className="text-white text-[20px] font-[700] leading-[27px]">
          A former fitness entrepreneur turned full-time trader on a mission to
          build wealth, freedom, and future-proof financial skills.
          <br />
          <br />
          After losing everything in 2020, I rebuilt my life through relentless
          trading, mastering the markets, and creating a sustainable income.
          After cracking the markets through years of trial, losses, and a
          life-changing comeback trade, I didn’t stop at just trading for
          myself. I built a PMS-style business in India, where 300+ investors
          trusted me with pooled capital.
          <br />
          <br />
          Month after month, I delivered returns not with hype, but with
          strategy. But I wanted more control, more scalability and less
          regulatory noise.
          <br />
          <br />
          So now, I trade only funded accounts & personal capital working with
          prop firms that offer millions in risk-free capital. No more investor
          pressure just pure performance.
          <br />
          <br />
          Behind the scenes, I’ve quietly built powerful algorithmic trading
          bots across multiple financial markets designed for one purpose only
          <span className="font-[400]">:
          to compound wealth silently, automatically, and smartly.</span>
          <br />
          <br />
          These bots aren’t for sale.<br/> <span className="font-[400]"> They’re my private edge, used only for
          personal and funded account growth.</span>
          <br />
          <br />
          My journey is far from over, but one thing is clear: I don’t chase
          trades. I build systems that print money.
          <br />
          <br />
          And now, I help others do the same with no BS, only real results.
        </p>
      </div>
    </div>
  );
}

export default WhoIam;
