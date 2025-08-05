import React, { useState, useEffect, useCallback } from "react";
import classOne from "../assets/heroImages/globalTradingAcademy-classes.png";
import classTwo from "../assets/heroImages/globalTradingAcademy-classes2.png";
import classThree from "../assets/heroImages/globalTradingAcademy-classes3.png";
import coursee from "../assets/heroImages/globalTradingAcademy-courses.png";

const HeroCards = () => {
  const allClasses = [classThree, classTwo, classOne, coursee];
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const updateCardsToShow = useCallback(() => {
    const width = window.innerWidth;
    setCardsToShow(width < 768 ? 1 : width < 1224 ? 2 : 3);
  }, []);

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, [updateCardsToShow]);

  const next = useCallback(() => {
    setIndex((prev) =>
      prev + 1 >= allClasses.length - cardsToShow + 1 ? 0 : prev + 1
    );
  }, [cardsToShow]);

  const prev = useCallback(() => {
    setIndex((prev) =>
      prev - 1 < 0 ? allClasses.length - cardsToShow : prev - 1
    );
  }, [cardsToShow]);

  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full overflow-hidden ">
      <button
        onClick={prev}
        className="absolute z-20 left-[6%] xl:left-[26%] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-[84px] h-[42px] p-[1px] border border-[#38ff38] rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M35.3389 16.4108C36.2178 17.2897 36.2178 18.7171 35.3389 19.596L26.3389 28.596C25.46 29.4749 24.0326 29.4749 23.1537 28.596C22.2748 27.7171 22.2748 26.2897 23.1537 25.4108L28.3146 20.2499H2.24981C1.00527 20.2499 -0.00019455 19.2444 -0.00019455 17.9999C-0.00019455 16.7554 1.00527 15.7499 2.24981 15.7499H28.3146L23.1537 10.589C22.2748 9.71006 22.2748 8.28271 23.1537 7.40381C24.0326 6.5249 25.46 6.5249 26.3389 7.40381L35.3389 16.4038V16.4108Z"
            fill="white"
          />
        </svg>
      </button>

      <div className="overflow-hidden h-[511.66px]">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-[25px]"
          style={{
            width: `${(allClasses.length * 100) / cardsToShow}%`,
            transform: `translateX(-${(index * 100) / allClasses.length}%)`,
          }}
        >
          {allClasses.map((img, i) => (
            <div
              key={i}
              className="w-[881.19px] h-[495.66px]"
              style={{ width: `${100 / allClasses.length}%` }}
            >
              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full rounded-xl shadow-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        className="absolute z-20 right-[6%] xl:right-[26%] top-1/2 transform -translate-y-1/2  flex items-center justify-center w-[84px] h-[42px] p-[1px] border border-[#38ff38] rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M0.661133 16.4108C-0.217773 17.2897 -0.217773 18.7171 0.661133 19.596L9.66113 28.596C10.54 29.4749 11.9674 29.4749 12.8463 28.596C13.7252 27.7171 13.7252 26.2897 12.8463 25.4108L7.68535 20.2499H33.7502C34.9947 20.2499 36.0002 19.2444 36.0002 17.9999C36.0002 16.7554 34.9947 15.7499 33.7502 15.7499H7.68535L12.8463 10.589C13.7252 9.71006 13.7252 8.28271 12.8463 7.40381C11.9674 6.5249 10.54 6.5249 9.66113 7.40381L0.661133 16.4038V16.4108Z"
            fill="white"
          />
        </svg>{" "}
      </button>
    </div>
  );
};

export default HeroCards;
