import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import background from "./assets/heroImages/globalTradingAcademy-background.svg";

function App() {
  return (
    <div className="bg-[#02040e] w-full h-full overflow-x-hidden">
      
      {/* 🔴 Scrolling Marquee Banner */}
<div className="bg-[#dc2626] overflow-hidden whitespace-nowrap">
  <div className="flex animate-marquee w-max text-white font-[700] text-[12px] sm:text-[17px] xl:leading-[32px] 2xl:leading-[52px]">
    <span className="px-4">
      TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
    </span>
    <span className="px-4">
      TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
    </span>
  </div>
</div>


      {/* 🔵 Background + Page Content */}
      <div className="relative hero-background">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
