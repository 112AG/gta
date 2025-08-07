import React from "react";
import pathImagetwo from "../assets/paths/globalTradingAcademy-programbackground.svg";
import masterprogram from "../assets/paths/globalTradingAcademy-masteryprogram.svg";
import gradeint1 from "../assets/paths/gradient1.svg";
import gradeint2 from "../assets/paths/gradient2.svg";

function Program() {
  return (
    <div className="h-full overflow-hidden w-full relative mb-[87px] bg-img mt-[0px] xl:mt-[236px]">
      {" "}


        <img
        src={gradeint1}
        alt="image"
        className="absolute bottom-0 w-[50%] sm:w-auto"
      />
      <img
        src={gradeint2}
        alt="image"
        className="absolute bottom-0 right-0 w-[50%] sm:w-auto"
      />

      <div className="relative top-[20%] sm:top-[30%] xl:top-[36%] flex justify-center items-center flex-col xl:flex-row gap-8 sm:gap-16 xl:gap-[218px] w-full px-4 sm:px-8 xl:px-0">
        <div className="flex justify-center">
          <img
            src={masterprogram}
            alt="Image"
            className="w-[200px] sm:w-[300px] lg:w-[400px] xl:w-auto h-auto object-contain"
          />
        </div>

        <div className="pt-4 sm:pt-8 xl:pt-22 flex flex-col items-center xl:items-start text-center xl:text-left">
          <div
            className="uppercase text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[48px] font-[900] leading-[32px] sm:leading-[40px] lg:leading-[44px] xl:leading-[48px]"
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            our program
          </div>{" "}
          <p className="uppercase text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[32px] font-[800] leading-[28px] sm:leading-[32px] lg:leading-[40px] xl:leading-[54px] text-white">
            prop firm mastery
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="4"
            className="my-3 sm:my-4 sm:w-[400px] lg:w-[500px] xl:w-[591px]"
            viewBox="0 0 591 4"
            fill="none"
          >
            <path
              d="M0.57125 2.49999L590.433 2.32387"
              stroke="#4A4A4A"
              strokeWidth="3"
            />
          </svg>
          <p className="w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[500px] xl:w-[573px] text-[#fff] text-[16px] sm:text-[20px] lg:text-[22px] xl:text-[24px] font-[700] leading-[22px] sm:leading-[28px] lg:leading-[30px] xl:leading-[33px] py-[12px] sm:py-[16px] pb-[32px] sm:pb-[48px] xl:pb-[64px]">
            Accelerate your journey to prop firm success with 30 days of live
            training, real strategy, and personal mentorship.
          </p>
          <a
            href="https://sachin4803.graphy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-6 uppercase w-full max-w-[300px] sm:max-w-[400px] xl:w-[474px] h-[56px] sm:h-[64px] xl:h-[72px] flex items-center justify-center border-[4px] border-white py-[12px] sm:py-[16px] px-[16px] sm:px-[20px] xl:px-[26px]"
            style={{
              background:
                "linear-gradient(92deg, rgba(109, 255, 119, 0.40) 30%, rgba(0, 255, 0, 0.20) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 246, 40, 0.18)",
              backdropFilter: "blur(12.5px)",
            }}
          >
            <h2 className="font-[600] text-[18px] sm:text-[18px] lg:text-[22px] xl:text-[22px] whitespace-nowrap leading-[22px] sm:leading-[26px] xl:leading-[28px] text-white text-center">
              join the mastery program
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Program;
