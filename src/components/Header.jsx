import { useState } from 'react'

function Header() {
  return (
    <>
        <header class=" bg-very-pale-blue dark:bg-red-400 h-[235px] rounded-b-[20px] pt-8 px-6">
            <h1 class="text-very-dark-blue text-2xl font-bold mb-1 ">Social Media Dashboard</h1>
            <p class="text-dark-grayish-blue font-bold mb-6">Total Followers: 23,004</p>
            <hr class="bg-black mb-[19px]"/>
            <div class ="flex justify-between">
                <p class="text-dark-grayish-blue font-bold">Dark Mode</p>
                <label htmlFor="darkmode" class="border relative bg-toggle w-12 
                h-6 rounded-full overflow-hidden cursor-pointer p-[3px]">
                    <input  id="darkmode" type="checkbox" class="peer sr-only"/>
                    <div class="w-full h-full  
                    peer-checked:bg-gradient-to-r from-toggleInicio to-toggleFin
                    absolute top-0 left-0"></div>
                    <div class="w-[18px] h-[18px] bg-light-grayish-blue rounded-full 
                    peer-checked:translate-x-[24px] transition-all"></div>
                </label>
            </div>
        </header>
    </>
  )
}

export default Header