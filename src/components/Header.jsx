import React from 'react'
import logo from "../assets/headerImages/global-trading-academy.svg";
import menu from "../assets/headerImages/globalTradingAcademy-menu.svg";
function Header() {
  return (
    <div className='font-poppins px-4'>
        
        <div className='py-10 sm:py-[57px] max-w-[1580px] mx-auto flex justify-between'>
            {/* right */}
            <img src={logo} alt="Logo" />
            {/* left menus */}
            <div className='flex items-center justify-center gap-[16px]'>
            <a
  href="https://sachin4803.graphy.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="uppercase backdrop-blur-[12.5px]w-[128px] h-[46px] border-[1px]  pt-[14px] pb-[17px] px-0 text-[#01030e] text-center cursor-pointer  items-center justify-center w-[128px]  border-white bg-[#82e95f] font-bold text-[16px] leading-[20px] hidden sm:block z-40"
>
  login
</a>
            <div className='text-white flex item-center gap-[16px] cursor-pointer'>
            <img src={menu} alt="Menu Icon" className='w-[28px] h-[28px]' />
            <p className='font-[700] hidden sm:block'>MENU</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header