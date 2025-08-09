import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#02040e] w-full overflow-x-hidden">
      {/* ✅ The marquee */}
      <div className="bg-[#dc2626] overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee w-max text-white font-bold text-sm sm:text-lg">
          <span className="px-4">
            TRANSFORM YOUR TRADING IN 30 DAYS • TRANSFORM YOUR TRADING IN 30 DAYS •
          </span>
          <span className="px-4">
            TRANSFORM YOUR TRADING IN 30 DAYS • TRANSFORM YOUR TRADING IN 30 DAYS •
          </span>
        </div>
      </div>

      {/* ✅ Main content */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
