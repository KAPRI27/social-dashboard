import { useState } from 'react'

function Header() {
  return (
    <>
        <header class=" w-auto flex bg-very-pale-blue h-[235px] rounded-b-[20px]">
            <div class=" w-4/5">
                <h1 class="text-black text-3xl font-bold mx-5 ">Social Media Dashboard</h1>
                <p class="block  w-64 mx-5">Total Followers: 25,004</p>
            </div>
            <div class =" w-1/5 pt-10 pl-20">
                <p class="">Dark Mode
                <input class="" type="checkbox" /></p>
            </div>
        </header>
    </>
  )
}

export default Header