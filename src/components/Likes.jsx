import { useState } from 'react'

function Likes() {
  return (
    <>
        <div className=" bg-teal-200 m-5 ">
      <h3 className="text-black text-2xl ">Overview - Today</h3>
    </div>
    
      <section className="flex justify-around bg-teal-700 w-auto">
        
        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs"> Page Views</p>
            <img className="items-center "  src="./icon-facebook.svg" alt="icono de facebook" />
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">87</p>
            <p className="flex items-center text-[var(--lime-green)] text-xs "><img className="" src="./icon-up.svg"></img>3%</p>
          </div>
        </div>
      
        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs">Likes</p>
            <img className="items-center " src="./icon-facebook.svg" alt="icono de facebook" />
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">52</p>
            <p className="flex items-center text-[var(--bright-red)] text-xs "><img className="" src="./icon-down.svg"></img>2%</p>
          </div>
        </div>

        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs">Likes</p>
            <img className="" src="./icon-instagram.svg" alt="icono de instagram" />  
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">5462</p>
            <p className="flex items-center text-[var(--lime-green)]  text-xs "><img className="" src="./icon-up.svg"></img>2257%</p>
          </div>
        </div>
        
        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs">Profile Views</p>
            <img className=""  src="./icon-instagram.svg" alt="icono de instagram" />
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">52k</p>
            <p className="flex items-center text-[var(--lime-green)]  text-xs  "><img className="" src="./icon-up.svg"></img>1375%</p>
          </div>
        </div>
      </section>
      <section className="flex justify-around bg-teal-200 w-auto">
        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs">Retweets</p>
            <img src="./icon-twitter.svg" alt="iconode de twitter" />
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">117</p>
            <p className="flex items-center text-[var(--lime-green)]  text-xs  "><img className="" src="./icon-up.svg"></img>303%</p>
          </div>
        </div>

        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs">Likes</p>
            <img src="./icon-twitter.svg" alt="icono de twitter" />
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">507</p>
            <p className="flex items-center text-[var(--lime-green)]  text-xs  "><img className="" src="./icon-up.svg"></img>553%</p>
          </div>
        </div>
        
        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs">Likes</p>
            <img src="./icon-youtube.svg" alt="icono de youtube" />
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">107</p>
             <p className="text-[var(--bright-red)] text-xs flex items-center "><img className=""  src="./icon-down.svg"></img>19%</p>
          </div>
        </div>

        <div className="w-64 bg-[var(--very-pale-blue)] rounded-sm items-center p-5 m-5">
          <div className="flex justify-between">
            <p className="text-xs">Total Views</p>
            <img src="./icon-youtube.svg" alt="icono de youtube" />
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-3xl">1407</p>
            <p className="text-[var(--bright-red)] text-xs flex items-center "><img className=""  src="./icon-down.svg"></img>12%</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Likes