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
            <div className='flex items-center gap-[16px]'>
            <button className='w-[128px] h-[46px] border-[1px] border-white bg-[#82e95f] font-bold text-[16px] leading-[20px] hidden sm:block'>LOG IN</button>
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