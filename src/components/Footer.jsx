import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="font-[Inter]">
      <h2 className="uppercase text-[48px] whitespace-nowrap text-center font-[900] leading-[48px] text-white mb-8">
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
      <p className="text-center text-[20px] font-[700] leading-[26px] text-white">
        Experience the power of our trading course in action. No commitment.
        Just value.
      </p>
      <div className="flex pt-12 pb-[222px] gap-[24px] items-center justify-center">
        <div className="border border-white backdrop-blur-[12.5px] whitespace-nowrap w-[251px] h-[55px] pt-[18px] pb-[17px] pr-[53px] pl-[55px] bg-[#82e95f] text-[#01030e] uppercase font-[700] leading-[20px] text-[16px]">
          Book free demo
        </div>
        <div className="border border-white backdrop-blur-[12.5px] w-[251px] h-[55px] px-[23px] bg-[#82e95f] text-[#01030e] flex items-center gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M17.3058 12.7812L13.9209 11.0888C13.7876 11.0225 13.6392 10.9924 13.4906 11.0017C13.3421 11.011 13.1986 11.0593 13.0746 11.1417L11.5207 12.1783C10.8074 11.7862 10.2204 11.1992 9.82825 10.486L10.8649 8.93221C10.9474 8.80829 10.9957 8.6648 11.005 8.51624C11.0142 8.36767 10.9842 8.21929 10.9178 8.08606L9.22531 4.70144C9.15516 4.55979 9.04672 4.44061 8.9123 4.35742C8.77788 4.27423 8.62284 4.23036 8.46475 4.23077C7.34257 4.23077 6.26636 4.67651 5.47286 5.46993C4.67936 6.26336 4.23358 7.33947 4.23358 8.46154C4.23638 10.9292 5.218 13.2951 6.96309 15.04C8.70818 16.7849 11.0742 17.7664 13.5422 17.7692C14.0978 17.7692 14.648 17.6598 15.1614 17.4472C15.6747 17.2346 16.1412 16.9229 16.5341 16.5301C16.927 16.1372 17.2386 15.6708 17.4513 15.1575C17.6639 14.6442 17.7733 14.0941 17.7733 13.5385C17.7735 13.3813 17.7298 13.2271 17.6472 13.0934C17.5646 12.9596 17.4464 12.8515 17.3058 12.7812ZM13.5422 16.0769C11.5229 16.0747 9.58704 15.2716 8.15923 13.844C6.73142 12.4163 5.92829 10.4806 5.92605 8.46154C5.92588 7.87465 6.1291 7.30583 6.50113 6.85188C6.87315 6.39793 7.391 6.08691 7.96653 5.97173L9.18088 8.40442L8.14741 9.94231C8.07019 10.0581 8.02273 10.1912 8.00926 10.3298C7.99579 10.4684 8.01672 10.6081 8.07019 10.7366C8.67566 12.1755 9.82044 13.3202 11.2594 13.9256C11.3884 13.9814 11.5292 14.0043 11.6692 13.9921C11.8092 13.9799 11.9439 13.9331 12.0612 13.8558L13.6067 12.8256L16.0396 14.0398C15.9235 14.616 15.6111 15.134 15.1557 15.5055C14.7002 15.877 14.1299 16.0789 13.5422 16.0769ZM11.0035 2.61964e-07C9.10415 -0.000414151 7.23709 0.490862 5.58401 1.42601C3.93093 2.36116 2.54814 3.70832 1.57023 5.33637C0.592329 6.96443 0.0526269 8.8179 0.00365779 10.7164C-0.0453113 12.6149 0.398121 14.4937 1.29079 16.17L0.0901981 19.7714C-0.00925076 20.0696 -0.0236831 20.3896 0.0485187 20.6955C0.120721 21.0014 0.276703 21.2812 0.498984 21.5035C0.721265 21.7257 1.00106 21.8817 1.30701 21.9539C1.61296 22.0261 1.93297 22.0117 2.23117 21.9122L5.83296 20.7117C7.30834 21.4964 8.9431 21.9346 10.6132 21.9932C12.2832 22.0518 13.9447 21.7292 15.4714 21.0499C16.9982 20.3706 18.3501 19.3524 19.4246 18.0727C20.499 16.7929 21.2678 15.2852 21.6725 13.664C22.0772 12.0429 22.1072 10.3508 21.7603 8.71627C21.4134 7.08175 20.6986 5.54774 19.6702 4.23068C18.6418 2.91362 17.3269 1.84813 15.8252 1.11508C14.3235 0.382026 12.6745 0.000685628 11.0035 2.61964e-07ZM11.0035 20.3077C9.36703 20.3088 7.75931 19.8779 6.34282 19.0586C6.23911 18.9984 6.1238 18.961 6.00454 18.9488C5.88527 18.9366 5.76477 18.9498 5.65102 18.9877L1.69487 20.3077L3.01394 16.3519C3.05196 16.2383 3.0654 16.1178 3.05337 15.9986C3.04133 15.8793 3.0041 15.764 2.94413 15.6602C1.91804 13.8863 1.50606 11.8235 1.77212 9.79165C2.03818 7.7598 2.96739 5.87254 4.41561 4.42263C5.86383 2.97272 7.7501 2.04121 9.78181 1.77261C11.8135 1.50401 13.8771 1.91334 15.6524 2.93709C17.4277 3.96084 18.8155 5.54179 19.6005 7.43468C20.3855 9.32757 20.5239 11.4266 19.9941 13.4061C19.4643 15.3857 18.296 17.1351 16.6704 18.3829C15.0448 19.6308 13.0528 20.3074 11.0035 20.3077Z"
              fill="#01030E"
            />
          </svg>{" "}
          <p className="font-[700] leading-[20px] text-[16px] whitespace-nowrap">
            Connect on Whatsapp
          </p>
        </div>
      </div>

      <div className="border-t-4 border-white/10 w-[1236px] flex items-start flex-col gap-[68px] h-full">
        <div className="flex justify-between items-start w-full">
          <div>
            <nav className="flex list-none cursor-pointer gap-[65px]">
              <li className="text-white text-[15.891px] font-[400] leading-[28px] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-white text-[15.891px] font-[400] leading-[28px] cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-white text-[15.891px] font-[400] leading-[28px] cursor-pointer">
                Manage Membership
              </li>
            </nav>
            <p className="w-[376px] text-white/50 text-[13.875px] font-[400] leading-[28px] pt-[32px]">
              Educational content only. Results depend on individual effort and
              application. We do not guarantee profits or financial performance
              in any market.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="uppercase text-white/50 text-[16.734px] font-[400] leading-[28px]">
              support
            </p>
            <a
              href="mailto:support@globaltradingacademy.com"
              className="text-white/70 font-inter text-[15.891px] font-normal leading-[28px] underline underline-offset-auto cursor-pointer"
            >
              support@globaltradingacademy.com
            </a>
<a
  href="https://sachin4803.graphy.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="uppercase border border-white bg-[#82E95F] backdrop-blur-[12.5px] w-[230px] h-[55px] pt-[18px] pb-[17px] px-0 text-[#01030e] text-center text-[16px] font-[700] leading-[20px] mt-[40px] cursor-pointer flex items-center justify-center"
>
  login
</a>

          </div>
        </div>

        <div className="flex flex-col justify-center w-[1223px] h-[291px] shrink-0 text-center text-white text-[15.891px] leading-[28px] mx-auto">
          <p className="font-semibold">
            <strong>Disclaimer:</strong>
            <br />
            Trading in financial markets, including forex, indices, and
            derivatives, involves substantial risk and may not be suitable for
            all investors. The strategies and educational content provided by us
            are for informational and educational purposes only and do not
            constitute financial or investment advice. You may lose some or all
            of your capital, and past performance does not guarantee future
            results. Individual outcomes will vary. No guarantees of profit or
            success are made. We are not SEBI-registered advisors and do not
            provide any investment recommendations or portfolio management
            services. All examples, trade setups, or performance results shown
            are purely hypothetical or for illustrative purposes, and may not
            reflect actual trading results. Participation in any of our programs
            or use of our tools is at your own risk. Always consult with a
            certified financial advisor before making any trading or investment
            decisions.
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
