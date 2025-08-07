import React from "react";
import certificate1 from "../assets/certificates/globalTradingAcademy-certificateone.svg";
import certificate2 from "../assets/certificates/globalTradingAcademy-certificatetwo.svg";
import certificate5 from "../assets/certificates/globalTradingAcademy-certificatefive.svg";
import certificate4 from "../assets/certificates/globalTradingAcademy-certificatefour.svg";
import certificate3 from "../assets/certificates/globalTradingAcademy-certificatethree.svg";
import certificate6 from "../assets/certificates/globalTradingAcademy-certificatesix.svg";

function Achievement() {
  const certificates = [
    certificate1,
    certificate2,
    certificate3,
    certificate4,
    certificate5,
    certificate6,
  ];
  return (
    <div className="pt-[120px] sm:pt-[233px] px-4 sm:px-0">
      <h1 className="w-full lg:w-[739px] mx-auto sm:h-[123px] text-center text-[32px] sm:text-[48px] font-[900] leading-[38px] sm:leading-[55px] uppercase text-white mb-4 sm:mb-0">
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          ACHIEVEMENTS
        </span>{" "}
        THAT SPEAK FOR THEMSELVES.
      </h1>
      <p className="w-full lg:w-[963px] mx-auto h-auto lg:h-[139px] text-white text-[16px] lg:text-[20px] text-center font-[700] leading-[22px] lg:leading-[27px] mb-8 lg:mb-0">
        Backed by results you can see: verified certificates, funded accounts,
        and real milestones from our growing trading community.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-[16px] sm:gap-[24px]">
        {certificates.map((data, id) => (
          <div
            key={id}
            className="w-[280px] sm:w-[320px] md:w-[468px] h-[420px] sm:h-[589px] py-[12px] sm:py-[16px] px-[16px] sm:px-[26px] flex flex-col justify-center items-center text-white"
            style={{
              background:
                "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
              backdropFilter: "blur(12.5px)",
              WebkitBackdropFilter: "blur(12.5px)",
            }}
          >
            <img src={data} alt="" className="w-full h-auto object-contain" />
          </div>
        ))}
      </div>
      <button className="uppercase text-center text-[20px] sm:text-[24px] font-[700] leading-[24px] sm:leading-[27px] underline text-white w-full pt-[24px] sm:pt-[34px] cursor-pointer">
        see more
      </button>
    </div>
  );
}

export default Achievement;