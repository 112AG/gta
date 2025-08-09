import React, { useRef } from "react";
import logo from "../assets/headerImages/global-trading-academy.svg";
import menu from "../assets/headerImages/globalTradingAcademy-menu.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Header() {
  const itemsRef = useRef();
  const loginButton = useRef();
  const lettersRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(itemsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
    },"<");

    tl.fromTo(loginButton.current, { scale: 0 }, { scale: 1, duration: 0.6 });
    tl.from(lettersRef.current, {
      x: 40,
      opacity: 0,
      ease: "power3.out",
      duration: 0.6,
      stagger: 0.1,
    },"<");
  });
  const text = "MENU";

  return (
    <div ref={itemsRef} className="font-poppins px-4">
      <div className="py-10 sm:py-[57px] max-w-[1580px] mx-auto flex justify-between">
        {/* left */}
        <img src={logo} alt="Logo" className="h-[34px] sm:h-full" />
        {/* right menus */}
        <div className="flex items-center justify-center gap-[16px]">
          <a
            ref={loginButton}
            href="https://sachin4803.graphy.com/s/authenticate?url=/t/myprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase backdrop-blur-[12.5px] w-[62px] sm:w-[128px] h-[23px] sm:h-[46px] border-[1px] pt-[2px] sm:pt-[14px] sm:pb-[17px] px-0 text-[#01030e] text-center cursor-pointer  items-center justify-center border-white bg-[#82e95f] font-bold text-[12px] sm:text-[16px] leading-[20px] z-40"
          >
            login
          </a>
          <div className="text-white flex item-center gap-[16px] cursor-pointer">
            <img src={menu} alt="Menu Icon" className="w-[28px] h-[28px]" />
            <p className="font-[700] hidden sm:block">
              {text.split("").map((char, i) => (
                <span
                  key={i}
                  ref={(el) => (lettersRef.current[i] = el)}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </span>
              ))}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
