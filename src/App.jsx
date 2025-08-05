import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import background from "./assets/heroImages/globalTradingAcademy-background.svg";

function App() {
  return (
    <div className="bg-[#02040e] w-full h-full">
      <div className="bg-[#dc2626] text-white text-center font-[700] text-[17px] xl:leading-[32px] 2xl:leading-[52px] ">
        TRANSFORM YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM
        YOUR TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP • TRANSFORM YOUR
        TRADING IN 30 DAYS WITH PROVEN 1:1 MENTORSHIP •
      </div>
      <div className="relative">
      <div className="absolute top-0 w-screen height-[1862px]">
        <img
          src={background}
          alt="Global Trading Academy Background"
          className="h-full w-full"
        />
      </div>
      <Header />
      <Home />
      </div>
    </div>
  );
}

export default App;
