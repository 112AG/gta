import React, { memo } from "react";

const gradientStyle = {
  background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

const Footer = memo(() => {
  return (
    <div className="font-[Inter] pt-[60px] sm:pt-[80px] lg:pt-[100px] px-4 sm:px-6 lg:px-8 xl:px-0">
      {/* Main CTA Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="uppercase text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] text-center font-[900] leading-tight text-white mb-4 sm:mb-6 lg:mb-8 px-2">
          Book a
          <span style={gradientStyle}>
            &nbsp;Free&nbsp;
          </span>
          demo
          <span style={gradientStyle}>
            &nbsp;session
          </span>
        </h2>

        <p className="text-center text-[14px] sm:text-[16px] lg:text-[18px] font-[700] leading-[20px] sm:leading-[24px] lg:leading-[26px] text-white px-4 sm:px-2 lg:px-0 mb-8 sm:mb-10">
          Experience the power of our trading course in action. No commitment.
          Just value.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-[60px] sm:mb-[80px] lg:mb-[100px]">
          <a
            href="https://sachin4803.graphy.com/s/authenticate?url=/t/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white backdrop-blur-[12.5px] whitespace-nowrap w-full sm:w-auto sm:min-w-[251px] h-[55px] px-[20px] bg-[#82e95f] text-[#01030e] uppercase font-[700] leading-[20px] text-[14px] sm:text-[16px] flex items-center justify-center text-center transition-colors duration-200 will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            Book free demo
          </a>

          <a
            href="https://wa.me/918283863866"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white backdrop-blur-[12.5px] w-full sm:w-auto sm:min-w-[251px] h-[55px] px-[20px] bg-[#82e95f] text-[#01030e] flex items-center gap-[8px] sm:gap-[10px] justify-center transition-colors duration-200 will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="sm:w-[22px] sm:h-[22px] flex-shrink-0"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 0C4.925 0 0 4.925 0 11c0 1.95.525 3.775 1.425 5.35L0 22l5.775-1.4C7.3 21.475 9.1 22 11 22c6.075 0 11-4.925 11-11S17.075 0 11 0zm5.5 15.4c-.25.7-1.25 1.3-2.05 1.475-.55.125-1.275.225-3.725-.8-2.625-1.1-4.325-3.775-4.45-3.95-.125-.175-1.025-1.375-1.025-2.625s.65-1.875.875-2.125c.225-.25.5-.3.675-.3s.35 0 .5.025c.15.025.375-.075.575.45.225.55.725 1.8.8 1.925.075.125.125.275.025.45-.1.175-.15.275-.275.425-.125.15-.275.325-.375.425-.125.1-.25.225-.1.45.15.225.675 1.125 1.45 1.825.975.9 1.8 1.175 2.05 1.3.25.125.4.1.55-.075.15-.175.625-.725.8-.975.175-.25.35-.2.575-.125.225.075 1.45.675 1.7.8.25.125.425.175.475.275.075.1.075.575-.175 1.275z"
                fill="#01030E"
              />
            </svg>
            <p className="font-[700] leading-[20px] text-[14px] sm:text-[16px] whitespace-nowrap">
              Connect on Whatsapp
            </p>
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-t-2 sm:border-t-4 border-white/10 max-w-[1236px] mx-auto pt-8 sm:pt-10 lg:pt-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-0 sm:gap-8 lg:gap-10 mb-8 lg:mb-12">
          {/* Navigation and Disclaimer */}
          <div className="w-full lg:flex-1 text-center">
            <nav className="flex flex-wrap gap-4 sm:gap-6 lg:gap-[65px] list-none cursor-pointer mb-2 sm:mb-6">
              <li className="text-white text-[10px] sm:text-[14px] font-[400] leading-[24px] sm:leading-[28px] cursor-pointer hover:text-[#82e95f] transition-colors duration-300">
                Terms & Conditions
              </li>
              <li className="text-white text-[10px] sm:text-[14px] font-[400] leading-[24px] sm:leading-[28px] cursor-pointer hover:text-[#82e95f] transition-colors duration-300">
                Privacy Policy
              </li>
              <li className="text-white text-[10px] sm:text-[14px] font-[400] leading-[24px] sm:leading-[28px] cursor-pointer hover:text-[#82e95f] transition-colors duration-300">
                Manage Membership
              </li>
            </nav>

            <p className="w-full lg:max-w-[376px] text-white/50 text-[12px] sm:text-[13px] font-[400] leading-[1px] sm:leading-[28px]">
              Educational content only. Results depend on individual effort and
              application. We do not guarantee profits or financial performance
              in any market.
            </p>
          </div>

          {/* Support Section */}
          <div className="w-full lg:w-auto flex flex-col gap-0 sm:gap-2">
            <p className="uppercase text-white/50 text-[14px] sm:text-[15px] font-[400] leading-[24px] sm:leading-[28px]">
              support
            </p>
            <a
              href="mailto:support@globaltradingacademy.com"
              className="text-white/70 font-inter text-[11px] sm:text-[14px] font-normal leading-[24px] sm:leading-[28px] underline cursor-pointer hover:text-[#82e95f] transition-colors duration-300 break-all sm:break-normal"
            >
              support@globaltradingacademy.com
            </a>
            <a
              href="https://sachin4803.graphy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase border border-white bg-[#82E95F] backdrop-blur-[12.5px] w-[150px] sm:w-[230px] h-[40px] sm:h-[55px] text-[#01030e] text-center text-[14px] sm:text-[16px] font-[700] leading-[20px] mt-2 sm:mt-[20px] cursor-pointer flex items-center justify-center hover:bg-[#6dd449] transition-colors duration-300"
            >
              login
            </a>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="w-full max-w-[1236px] text-white text-[12px] sm:text-[13px] lg:text-[14px] leading-[20px] sm:leading-[24px] lg:leading-[28px] mx-auto">
            <div className="text-center sm:text-left">
              <p className="font-semibold mb-4 sm:mb-6 lg:mb-8">
                <strong className="text-[#82e95f]">Disclaimer:</strong>
              </p>
              <div className="text-center sm:text-left space-y-4 sm:space-y-6 pb-8">
                <p>
                  Trading in financial markets, including forex, indices,
                  and derivatives, involves substantial risk and may not be suitable
                  for all investors. The strategies and educational content provided
                  by us are for informational and educational purposes only and do not
                  constitute financial or investment advice. You may lose some or all
                  of your capital, and past performance does not guarantee future
                  results. Individual outcomes will vary. No guarantees of profit or
                  success are made.
                </p>
                
                <p>
                  We are not SEBI-registered advisors and do not
                  provide any investment recommendations or portfolio management
                  services. All examples, trade setups, or performance results shown
                  are purely hypothetical or for illustrative purposes, and may not
                  reflect actual trading results.
                </p>
                
                <p>
                  Participation in any of our programs
                  or use of our tools is at your own risk. Always consult with a
                  certified financial advisor before making any trading or investment
                  decisions.
                </p>
                
                <p className="pt-2 sm:pt-4">
                  By accessing our website and services, you acknowledge and agree to
                  our Terms of Use, Privacy Policy, and Risk Disclosure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Footer;