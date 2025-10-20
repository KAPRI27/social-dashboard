import { useState } from 'react'

function Header() {
  return (
    <>
        <header className=" bg-very-pale-blue dark:bg-red-400 h-[235px] rounded-b-[20px] pt-8 px-6">
            <h1 className="text-very-dark-blue text-2xl font-bold mb-1 ">Social Media Dashboard</h1>
            <p className="text-dark-grayish-blue font-bold mb-6">Total Followers: 23,004</p>
            <hr className="bg-black mb-[19px]"/>
            <div className ="flex justify-between">
                <p className="text-dark-grayish-blue font-bold">Dark Mode</p>
                <label htmlFor="darkmode" className="border relative bg-toggle w-12 
                h-6 rounded-full overflow-hidden cursor-pointer p-[3px]">
                    <input  id="darkmode" type="checkbox" className="peer sr-only"/>
                    <div className="w-full h-full  
                    peer-checked:bg-gradient-to-r from-toggleInicio to-toggleFin
                    absolute top-0 left-0"></div>
                    <div className="w-[18px] h-[18px] bg-light-grayish-blue rounded-full 
                    peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>
    </>
  )
}

export default Header