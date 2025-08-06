import React from "react";
import background from "../assets/choicecardsbackground.svg";

function ChoiceCard() {
  const statementsOne = [
    "Work for someone else",
    "Stay stagnant",
    "Work a 9-5",
    "Spend more, earn less",
    "Stay unfulfilled",
    "Hang around losers",
  ];
  const statementTwo = [
  "Simple-step-by-step mentorship",
  "Learn → Earn daily",
  "Access to millionaire mentors",
  "Connect with 10k+ others",
  "No experience needed",
  "Custom-made learning"
];


  return (
    <div className="pt-[144px] relative">
      <img src={background} alt="Image" className="w-screen" />
      <div className="absolute top-[22%] left-0 right-0 flex flex-col items-center">
        <p className="text-white uppercase text-[20px] font-[700] leading-[48px]">
          take action
        </p>
        <h2 className="uppercase text-[48px] font-[900] leading-[48px] text-white">
          the{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            choice
          </span>{" "}
          is yours
        </h2>

        <div className="flex flex-col xl:flex-row gap-[33px] mt-12">
          {/* grey card */}
          <div className="w-[578px] h-[816px]  bg-[rgba(26,32,43,0.6)] text-white flex-col flex items-center justify-center">
            <h2 className="uppercase text-[48px] font-[700] leading-[32px]">
              do nothing
            </h2>
            <p className="text-[20px] font-[600] leading-[32px] pt-[8px]">
              Watch Netflix
            </p>
            <div className="w-[314px] h-[1px] bg-white mt-[30px] mb-[74px]"></div>

            <div className="w-[322px] h-[309px]">
              {statementsOne.map((statementsOne, id) => (
                <div key={id} className="flex items-center gap-[15px] justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_401_1025)">
                      <path
                        d="M22.5 2.68164L8.0625 17.1191L1.5 10.5566"
                        stroke="white"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_401_1025">
                        <rect
                          width="24"
                          height="18"
                          fill="white"
                          transform="translate(0 0.900391)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white text-[20px] font-[500] leading-[50px]">{statementsOne}</p>
                </div>
              ))}
            </div>
            <div className="w-[378px] h-[66px] bg-[#272931] border-[1px] border-white flex items-center justify-center mt-[30px]"> 
              <h2 className="text-[#6b6b6b] text-center text-[28px] font-[600] leading-[28px] uppercase">remain an employee</h2>
            </div>
          </div>
          {/* green card */}
          <div
            className="w-[578px] h-[816px] border border-white backdrop-blur-[12.5px] flex flex-col items-center justify-center text-white"
            style={{
              background:
                "linear-gradient(111deg, rgba(130, 233, 95, 0.14) -6.34%, rgba(131, 234, 96, 0.31) 69.64%)",
              boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
            }}
          >
            <h2 className="uppercase text-[48px] font-[700] leading-[32px]">
              TAKE ACTION
            </h2>
            <p className="text-[20px] font-[600] leading-[32px] pt-[8px]">
              Start Earning Today
            </p>
            <div className="w-[314px] h-[1px] bg-white mt-[30px] mb-[74px]"></div>

            <div className="w-[352px]  h-[309px]">
              {statementTwo.map((statementTwo, id) => (
                <div key={id} className="flex items-center gap-[15px] justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_401_1025)">
                      <path
                        d="M22.5 2.68164L8.0625 17.1191L1.5 10.5566"
                        stroke="white"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_401_1025">
                        <rect
                          width="24"
                          height="18"
                          fill="white"
                          transform="translate(0 0.900391)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-white text-[20px] font-[500] leading-[50px]">{statementTwo}</p>
                </div>
              ))}
            </div>
        <div className="mt-6 uppercase cursor-pointer sm:w-[509px] h-[66px] bg-[#00ff004f] border-[4px] border-white flex items-center justify-center">
          <h2 className="font-[600] text-[22px] sm:text-[28px] leading-[28px] text-white">
            join global trading academy
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#35B967"/>
</svg>
<p className="underline text-[20px] leading-[50px] ">Cancel anytime, risk free</p>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceCard;
