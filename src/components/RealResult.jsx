import React, { useCallback, useEffect, useRef, useState } from "react";
import one from "../assets/resultprofit/fundedarmy1.png";
import two from "../assets/resultprofit/fundedarmy2.png";
import three from "../assets/resultprofit/fundedarmy3.png";
import four from "../assets/resultprofit/fundedarmy4.png";
import five from "../assets/resultprofit/fundedarmy5.png";
import six from "../assets/resultprofit/fundedarmy6.png";
import leftblur from "../assets/heroImages/globalTradingAcademy-foregroundblurleft.svg";
import rightblur from "../assets/heroImages/globalTradingAcademy-foregroundblurright.svg";

function RealResult() {
  const baseSlides = [one, two, three, four, five, six, one, two, three];
  const allClasses = [
    baseSlides[baseSlides.length - 1],
    ...baseSlides,
    baseSlides[0],
  ];

  const [cardsToShow, setCardsToShow] = useState(3);
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef();

  const updateCardsToShow = useCallback(() => {
    const width = window.innerWidth;
    if (width > 1584) {
      setCardsToShow(5);
    } else if (width > 800) {
      setCardsToShow(3);
    } else {
      setCardsToShow(1);
    }
  }, []);

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [updateCardsToShow]);

  const goTo = (newIndex) => {
    setIndex(newIndex);
    setTransition(true);
  };

  const next = useCallback(() => {
    setIndex((prev) => prev + 1);
    setTransition(true);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => prev - 1);
    setTransition(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    if (index === allClasses.length - cardsToShow + 1) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
      return () => clearTimeout(timeout);
    }

    if (index === 0) {
      const timeout = setTimeout(() => {
        setTransition(false);
        setIndex(allClasses.length - cardsToShow);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index, cardsToShow, allClasses.length]);

  return (
    <div className="relative w-full overflow-hidden px-4 lg:px-0">
      <h2 className="uppercase text-[28px] sm:text-[36px] md:text-[44px] xl:text-[48px] pt-[120px] sm:pt-[200px] xl:pt-[199px] pb-[40px] xl:pb-[81px] text-center font-[900] leading-tight text-white mb-8">
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Real&nbsp;
        </span>
        Results real
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          &nbsp;profits
        </span>
      </h2>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute z-50 right-[4%] sm:right-[6%] xl:right-[14%] top-[65%] sm:top-[72%] transform -translate-y-1/2 flex items-center justify-center w-[60px] sm:w-[84px] h-[42px] p-[1px] border border-[#38ff38] rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
          <path
            d="M35.3389 16.4108C36.2178 17.2897 36.2178 18.7171 35.3389 19.596L26.3389 28.596C25.46 29.4749 24.0326 29.4749 23.1537 28.596C22.2748 27.7171 22.2748 26.2897 23.1537 25.4108L28.3146 20.2499H2.24981C1.00527 20.2499 -0.00019455 19.2444 -0.00019455 17.9999C-0.00019455 16.7554 1.00527 15.7499 2.24981 15.7499H28.3146L23.1537 10.589C22.2748 9.71006 22.2748 8.28271 23.1537 7.40381C24.0326 6.5249 25.46 6.5249 26.3389 7.40381L35.3389 16.4038V16.4108Z"
            fill="white"
          />
        </svg>
      </button>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute z-50 left-[4%] sm:left-[6%] xl:left-[14%] top-[65%] sm:top-[72%] transform -translate-y-1/2 flex items-center justify-center w-[60px] sm:w-[84px] h-[42px] p-[1px] border border-[#38ff38] rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
          <path
            d="M0.661133 16.4108C-0.217773 17.2897 -0.217773 18.7171 0.661133 19.596L9.66113 28.596C10.54 29.4749 11.9674 29.4749 12.8463 28.596C13.7252 27.7171 13.7252 26.2897 12.8463 25.4108L7.68535 20.2499H33.7502C34.9947 20.2499 36.0002 19.2444 36.0002 17.9999C36.0002 16.7554 34.9947 15.7499 33.7502 15.7499H7.68535L12.8463 10.589C13.7252 9.71006 13.7252 8.28271 12.8463 7.40381C11.9674 6.5249 10.54 6.5249 9.66113 7.40381L0.661133 16.4038V16.4108Z"
            fill="white"
          />
        </svg>
      </button>

      {/* BLURS */}
      <img
        src={leftblur}
        alt=""
        className="absolute -left-40 sm:-left-80 xl:-left-32 top-[40%] z-30 object-cover h-[400px] sm:h-[753px] opacity-60 xl:opacity-75 hidden sm:block"
      />
      <img
        src={rightblur}
        alt=""
        className="absolute -right-40 sm:-right-80 xl:-right-32 top-[40%] z-30 object-cover h-[400px] sm:h-[753px] opacity-60 xl:opacity-75 hidden sm:block"
      />

      {/* CAROUSEL */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex gap-[16px] sm:gap-[25px] ${
            transition ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            width: `${(allClasses.length * 100) / cardsToShow}%`,
            transform: `translateX(-${(index * 100) / allClasses.length}%)`,
          }}
        >
          {allClasses.map((img, i) => (
            <div
              key={i}
              className="rounded-[25px] relative"
              style={{ width: `${100 / allClasses.length}%` }}
            >
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full rounded-xl shadow-md object-cover max-h-[90vh]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RealResult;
