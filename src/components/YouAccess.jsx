import React from "react";
import thirtydayafterhoursupport from "../assets/programpics/30dayafterhoursupport.svg";
import thirtydaytradingbootcamp from "../assets/programpics/30daytradingbootcamp.svg";
import mypersonalstrategyprogram from "../assets/programpics/mypersonalstrategyprogram.svg";
import thevault from "../assets/programpics/thevault.svg";
import fastfunding from "../assets/programpics/fastfunding.svg";
import sundayswing from "../assets/programpics/sundayswing.svg";
import theinnercircle from "../assets/programpics/theinnercircle.svg";
import thegrowthblueprint from "../assets/programpics/thegrowthblueprint.svg";
import theperfectradecheck from "../assets/programpics/theperfectradecheck.svg";
import performancedashboard from "../assets/programpics/performancedashboard.svg";
import momentumcheckin from "../assets/programpics/momentumcheckin.svg";
import thelegacyday from "../assets/programpics/thelegacyday.svg";
import ultimatekickstart from "../assets/programpics/ultimatekickstart.svg";

function YouAccess() {
  const tradingSections = [
    {
      image: thirtydaytradingbootcamp,
      title: "30-Day Trading Bootcamp",
      points: [
        "Live daily mentorship directly with me",
        "Learn how to pass prop firm challenges",
        "Proven payout strategies for real results",
      ],
    },
    {
      image: thirtydayafterhoursupport,
      title: "30-Day After Hours Support",
      points: [
        "Daily post-workshop check-ins & reviews",
        "Fix execution errors in real-time",
        "Guided practice until you trade like a pro",
      ],
    },
    {
      image: mypersonalstrategyprogram,
      title: "My Personal Strategy Program",
      points: [
        "My exact strategy to grow consistent income",
        "Master trader psychology & mindset",
        "Smart capital & withdrawal management system",
      ],
    },
    {
      image: ultimatekickstart,
      title: "The Aspiring Trader’s Playbook: Ultimate Kickstart to Trading",
      points: [
        "Understand how trading actually works — from scratch",
        "Learn the essential tools, terms & setup in simple language",
        "Build a rock-solid foundation before jumping into live markets",
      ],
    },
    {
      image: thevault,
      title: "The Vault: Elite Strategies & Private Masterclasses",
      points: [
        "Access my private training that helped generate $1M+ in trading",
        "Learn advanced psychology, risk-reward systems & money scaling",
        "Unlock step-by-step frameworks to trade smarter, safer & bigger",
      ],
    },
    {
      image: fastfunding,
      title: "Fast Funding & Scaling Secrets",
      points: [
        "My exact formula to pass funded challenges in 30 days or less",
        "Advanced masterclass on how I scale and trade $1M+ funded accounts",
        "Built for traders who want fast results with zero trial-and-error",
      ],
    },
    {
      image: sundayswing,
      title: "Sunday Swings: Weekly Live Trade Room",
      points: [
        "Join my live Sunday session to see the exact trades I plan for the week",
        "Follow my real-time market analysis and trade ideas — just like I do",
        "Ask questions live and apply the full strategy in real market conditions",
      ],
    },
    {
      image: theinnercircle,
      title: "The Inner Circle: Private Trader Community",
      points: [
        "Connect with 5000+ traders worldwide using the same winning strategy",
        "Get 24/7 support from me and my team for guidance & clarity",
        "Access exclusive market insights, live analysis & funding giveaways",
      ],
    },
    {
      image: thegrowthblueprint,
      title: "The Growth Blueprint: Learn Faster, Grow Smarter",
      points: [
        "Mini-course to help you study the program 3x faster",
        "Simple steps to speed up learning and implementation",
        "Designed to get you faster results with less overwhelm",
      ],
    },
    {
      image: theperfectradecheck,
      title: "The Perfect Trade Checklist: Simplicity That Prints Profits",
      points: [
        "5-step checklist to find high-probability trades with ease",
        "Remove guesswork — just follow and execute with confidence",
        "Use before every trade to stay consistent and profitable",
      ],
    },
    {
      image: performancedashboard,
      title: "Performance Dashboard: Lifetime Access, Always Updated",
      points: [
        "Get free lifetime access to all future updates and new modules",
        "Track your growth as new tools, strategies & lessons get added",
        "Stay ahead with the latest content — no extra payments ever",
      ],
    },
    {
      image: momentumcheckin,
      title: "Momentum Check-In: Weekly Mindset Mastery",
      points: [
        "Weekly live sessions with a top trading psychologist",
        "Build bulletproof psychology to trade like a pro under pressure",
        "Stay consistent, confident & profitable — no matter what",
      ],
    },
    {
      image: thelegacyday,
      title: "The Legacy Day: Elite Invitation for Proven Traders",
      points: [
        "Exclusive 1-on-1 full-day session at my home, all expenses paid",
        "Learn how to scale your trading to the highest level, personally with me",
        "Reserved only for students who become consistently profitable",
      ],
    },
  ];

  return (
    <div className=" h-full font-inter px-12 lg:px-0">
      <div
        className="uppercase text-[20px] font-[700] leading-[48px] text-center"
        style={{
          background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        what will you access
      </div>{" "}
      <div className="uppercase text-center text-[48px] font-[900] leading-[55px] text-white">
        all <span className="text-[#B1F999]">tools</span>, all{" "}
        <span className="text-[#B1F999]">access</span>, one{" "}
        <span className="text-[#B1F999]">program.</span>
      </div>
      <div className="flex flex-col gap-[73px] items-center py-[48px]">
        {tradingSections.map((section, index) => (
          <div
            key={index}
            className="w-full max-w-[1388px] text-white h-[341px] p-[32px] flex flex-col sm:flex-row justify-between items-center"
            style={{
              background:
                "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
              boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
              backdropFilter: "blur(12.5px)",
              WebkitBackdropFilter: "blur(12.5px)",
            }}
          >
            {/* Left: Title and Bullet Points */}
            <div className="flex flex-col gap-[12px]">
              <h1 className="text-[32px] leading-[33px] font-[600] pb-[12px]">
                {section.title}
              </h1>
              <div className="flex flex-col gap-[8px]">
                {section.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-[8px] w-full py-[11px] px-[30px] rounded-full bg-[#ffffff11]"
                  >
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
                    <p className="text-[17.55px] font-[700] leading-[28.8px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="pt-8 sm:pt-0">
              <img
                src={section.image}
                alt={section.title}
                className="h-[259px] w-[259px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-[750px] mx-auto h-[341px] py-[16px] px-[26px] flex flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(92deg, rgba(130, 233, 95, 0.14) 5.1%, rgba(131, 234, 96, 0.31) 83.56%)",
          boxShadow: "0 4px 50px 0 rgba(92, 239, 0, 0.24)",
          backdropFilter: "blur(12.5px)",
          WebkitBackdropFilter: "blur(12.5px)",
        }}
      >
        <p className="text-[13px] font-[700] leading-[48px] uppercase text-[#ff2c2c]">
          real price $5000 usd
        </p>
        <h3
          className="text-[64px] font-[900] leading-[48px] uppercase"
          style={{
            background: "linear-gradient(90deg, #c4ffb0 0%, #82e95f 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          $2500
        </h3>
        <a
          href="https://sachin4803.graphy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 uppercase cursor-pointer sm:w-[509px] h-[60px] bg-[#00ff004f] border-[4px] border-white flex items-center justify-center"
        >
          <h2 className="font-[600] text-[22px] sm:text-[28px] leading-[28px] text-white">
            join global trading academy
          </h2>
        </a>

        <a 
          href="https://wa.me/918283863866"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[196px] h-[62px] border-[1px] border-white bg-[#82e95f] flex items-center justify-center gap-[5px] mt-[29px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M22.8122 16.8479L18.3502 14.6171C18.1746 14.5296 17.979 14.49 17.7831 14.5022C17.5873 14.5144 17.3981 14.5781 17.2347 14.6868L15.1864 16.0532C14.2461 15.5363 13.4723 14.7626 12.9554 13.8224L14.3219 11.7743C14.4306 11.6109 14.4943 11.4218 14.5065 11.2259C14.5188 11.0301 14.4791 10.8345 14.3916 10.6589L12.1606 6.19736C12.0682 6.01063 11.9252 5.85353 11.748 5.74388C11.5708 5.63422 11.3665 5.57638 11.1581 5.57692C9.67885 5.57692 8.2602 6.16449 7.21422 7.21037C6.16825 8.25624 5.58062 9.67475 5.58062 11.1538C5.58431 14.4067 6.87827 17.5253 9.17862 19.8254C11.479 22.1256 14.5978 23.4194 17.851 23.4231C18.5835 23.4231 19.3087 23.2788 19.9854 22.9986C20.6621 22.7183 21.277 22.3075 21.7949 21.7896C22.3128 21.2718 22.7236 20.657 23.0039 19.9804C23.2842 19.3037 23.4285 18.5785 23.4285 17.8462C23.4286 17.6389 23.3711 17.4358 23.2622 17.2595C23.1533 17.0831 22.9975 16.9406 22.8122 16.8479ZM17.851 21.1923C15.1893 21.1894 12.6375 20.1308 10.7553 18.2488C8.87323 16.3669 7.81456 13.8153 7.81161 11.1538C7.81139 10.3802 8.07927 9.63041 8.56967 9.03202C9.06007 8.43364 9.74268 8.02365 10.5013 7.87183L12.1021 11.0786L10.7398 13.1058C10.638 13.2585 10.5754 13.4339 10.5577 13.6165C10.5399 13.7992 10.5675 13.9834 10.638 14.1528C11.4361 16.0495 12.9451 17.5584 14.842 18.3564C15.012 18.43 15.1976 18.4602 15.3821 18.4441C15.5666 18.4281 15.7442 18.3663 15.8989 18.2644L17.9361 16.9064L21.1431 18.507C20.9901 19.2665 20.5783 19.9493 19.9779 20.439C19.3775 20.9287 18.6258 21.195 17.851 21.1923ZM14.5046 3.45317e-07C12.0009 -0.000545927 9.53981 0.647046 7.36074 1.87974C5.18168 3.11244 3.35891 4.88825 2.06985 7.03431C0.780798 9.18038 0.0693719 11.6236 0.00482164 14.1262C-0.0597286 16.6287 0.524796 19.1053 1.7015 21.315L0.118898 26.0624C-0.0121942 26.4554 -0.0312187 26.8772 0.0639565 27.2805C0.159132 27.6837 0.364745 28.0525 0.657752 28.3455C0.950758 28.6385 1.31958 28.844 1.72287 28.9392C2.12617 29.0344 2.548 29.0154 2.94109 28.8843L7.6889 27.3018C9.63372 28.3361 11.7886 28.9138 13.9901 28.9911C16.1915 29.0683 18.3816 28.6431 20.3942 27.7476C22.4067 26.8521 24.1888 25.51 25.6051 23.8231C27.0214 22.1361 28.0348 20.1487 28.5683 18.0117C29.1018 15.8747 29.1414 13.6442 28.684 11.4896C28.2267 9.33503 27.2845 7.31293 25.9289 5.57681C24.5733 3.84068 22.84 2.43617 20.8605 1.46987C18.881 0.50358 16.7074 0.000903782 14.5046 3.45317e-07ZM14.5046 26.7692C12.3474 26.7707 10.2282 26.2027 8.36099 25.1226C8.22428 25.0434 8.07228 24.994 7.91507 24.9779C7.75786 24.9618 7.59902 24.9793 7.44907 25.0292L2.23415 26.7692L3.97292 21.5548C4.02304 21.405 4.04076 21.2462 4.02489 21.089C4.00903 20.9318 3.95994 20.7798 3.88089 20.643C2.52832 18.3047 1.98527 15.5855 2.33598 12.9072C2.68669 10.2288 3.91156 7.74107 5.82058 5.82983C7.72959 3.91858 10.216 2.69068 12.8942 2.33662C15.5724 1.98256 18.2925 2.52213 20.6327 3.87162C22.9729 5.22111 24.8023 7.30508 25.8371 9.80026C26.8719 12.2954 27.0542 15.0623 26.3559 17.6717C25.6575 20.2811 24.1175 22.5871 21.9746 24.232C19.8318 25.8769 17.206 26.7688 14.5046 26.7692Z"
              fill="#01030E"
            />
          </svg>
          <p className="text-[24px] leading-[48px] font-[700] text[#02040e]">
            Support
          </p>
        </a>

        <p className="text-white text-[10px] font-[400] leading-[48px]">
          7 days money back guarantee | Direct refunds with no questions{" "}
        </p>
      </div>
    </div>
  );
}

export default YouAccess;
