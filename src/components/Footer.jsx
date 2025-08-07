import React from "react";

function Footer() {
  return (
    <div className="font-[Inter] pt-[100px] px-4 xl:px-0">
      <h2 className="uppercase text-[32px] sm:text-[36px] md:text-[42px] xl:text-[48px] whitespace-normal text-center font-[900] leading-tight text-white mb-8">
        Book a
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          &nbsp;Free&nbsp;
        </span>
        demo
        <span
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          &nbsp;session
        </span>
      </h2>

      <p className="text-center text-[16px] sm:text-[18px] font-[700] leading-[26px] text-white px-2 sm:px-0">
        Experience the power of our trading course in action. No commitment. Just value.
      </p>

      <div className="flex flex-col sm:flex-row pt-10 pb-[100px] gap-4 items-center justify-center">
        <a
          href="https://sachin4803.graphy.com/s/authenticate?url=/t/myprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white backdrop-blur-[12.5px] whitespace-nowrap w-full sm:w-[251px] h-[55px] px-[20px] bg-[#82e95f] text-[#01030e] uppercase font-[700] leading-[20px] text-[16px] flex items-center justify-center text-center"
        >
          Book free demo
        </a>

        <a
          href="https://wa.me/918283863866"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white backdrop-blur-[12.5px] w-full sm:w-[251px] h-[55px] px-[20px] bg-[#82e95f] text-[#01030e] flex items-center gap-[10px] justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            {/* SVG PATH */}
            <path
              d="..." // your full path here
              fill="#01030E"
            />
          </svg>
          <p className="font-[700] leading-[20px] text-[16px] whitespace-nowrap">
            Connect on Whatsapp
          </p>
        </a>
      </div>

      <div className="border-t-4 border-white/10 max-w-[1236px] mx-auto flex flex-col gap-[40px] xl:gap-[68px] w-full h-full">
        <div className="flex flex-col xl:flex-row justify-between items-start gap-10">
          <div>
            <nav className="flex flex-wrap gap-6 xl:gap-[65px] list-none cursor-pointer">
              <li className="text-white text-[14px] font-[400] leading-[28px] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-white text-[14px] font-[400] leading-[28px] cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-white text-[14px] font-[400] leading-[28px] cursor-pointer">
                Manage Membership
              </li>
            </nav>

            <p className="max-w-[90vw] xl:w-[376px] text-white/50 text-[13px] font-[400] leading-[28px] pt-6">
              Educational content only. Results depend on individual effort and
              application. We do not guarantee profits or financial performance
              in any market.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="uppercase text-white/50 text-[15px] font-[400] leading-[28px]">
              support
            </p>
            <a
              href="mailto:support@globaltradingacademy.com"
              className="text-white/70 font-inter text-[14px] font-normal leading-[28px] underline cursor-pointer"
            >
              support@globaltradingacademy.com
            </a>
            <a
              href="https://sachin4803.graphy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase border border-white bg-[#82E95F] backdrop-blur-[12.5px] w-full sm:w-[230px] h-[55px] pt-[18px] pb-[17px] px-0 text-[#01030e] text-center text-[16px] font-[700] leading-[20px] mt-[20px] cursor-pointer flex items-center justify-center"
            >
              login
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full max-w-[1236px] text-center text-white text-[14px] leading-[28px] mx-auto px-2 sm:px-0">
          <p className="font-semibold pb-4">
            <strong>Disclaimer:</strong>
            <br />
            Trading in financial markets, including forex, indices, and
            derivatives, involves substantial risk and may not be suitable for
            all investors...
            <br />
            <br />
            By accessing our website and services, you acknowledge and agree to
            our Terms of Use, Privacy Policy, and Risk Disclosure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
