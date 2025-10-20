import { useState } from 'react'

function Header() {
  return (
    <>
        <header className=" w-auto flex bg-[var(--very-pale-blue)] h-[235px] rounded-b-[20px]">
            <div className=" w-4/5">
                <h1 className="text-black text-3xl font-bold mx-5 ">Social Media Dashboard</h1>
                <p className="block  w-64 mx-5">Total Followers: 25,004</p>
            </div>
            <div className =" w-1/5 pt-10 pl-20">
                <p className="">Dark Mode
                <input className="" type="checkbox" /></p>
            </div>
        </header>
    </>
  )
}

export default Header