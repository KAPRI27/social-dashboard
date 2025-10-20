import { useState } from 'react'

function Followers() {
  return (
    <>
        <section className="flex justify-around w-auto text-center bg-blue-300">

            <div className="w-64 place-items-center border-t-4 border-t-[var(--facebook)] rounded-sm mx-5 p-5 bg-gray-100">
                <div className="flex my-2">
                    <img className="px-2"  src="./icon-facebook.svg" alt="icono de facebook" />
                    <p className="tracking-[0.3em] text-xs">@nathanf</p>
                </div>
                <div className="my-4">
                    <p className="font-bold text-5xl">1987</p>
                    <p className="text-[var(--toggle)] tracking-[0.3em] text-xs ">FOLLOWERS</p>
                </div>
                <div className="flex items-center mt-2">
                    <img className="px-2"  src="./icon-up.svg"></img>
                    <p className="text-[var(--lime-green)] tracking-[0.3em] text-xs">12 Today</p>
                </div>
            </div>

            <div className="w-64 place-items-center  border-t-4 border-t-[var(--twitter)] rounded-sm mx-5 p-5 bg-gray-100">
                <div className="flex my-2">
                    <img className="px-2" src="./icon-twitter.svg" alt="icono de twitter" />
                    <p className="tracking-[0.3em] text-xs">@nathanf</p>
                </div>
                <div className="my-4">
                    <p className="font-bold text-5xl">1044</p>
                    <p className="text-[var(--toggle)] tracking-[0.3em] text-xs ">FOLLOWERS</p>
                </div>
                <div className="flex items-center mt-2">
                    <img className="px-2"  src="./icon-up.svg"></img>
                    <p className="text-[var(--lime-green)] tracking-[0.3em] text-xs">99 Today</p>
                </div>
            </div>

            <div className="w-64 place-items-center  border-t-4 border-t-[var(--color-inicio)] rounded-sm mx-5 p-5 bg-gray-100">
                <div className="flex my-2">
                    <img className="px-2" src="./icon-instagram.svg" alt="icono de instagram" />
                    <p className="tracking-[0.3em] text-xs">@realnathanf</p>
                </div>
                <div className="my-4">
                    <p className="font-bold text-5xl">11k</p>
                    <p className="text-[var(--toggle)] tracking-[0.3em] text-xs ">FOLLOWERS</p>
                </div>
                <div className="flex items-center mt-2">
                    <img className="p-2" src="./icon-up.svg"></img>
                    <p className="text-[var(--lime-green)] tracking-[0.3em] text-xs">1099 Today</p>
                </div>
            </div>

            <div className="w-64 place-items-center border-t-4 border-t-[var(--youtube)] rounded-sm mx-5 p-5 bg-gray-100">
                <div className="flex my-2">
                    <img className="px-2 " src="./icon-youtube.svg" alt="icono de youtube" />
                    <p className="tracking-[0.3em] text-xs">Nathan F.</p>
                </div>
                <div className="my-4">
                    <p  className="font-bold text-5xl">8239</p>
                    <p className="text-[var(--toggle)] tracking-[0.3em] text-xs ">SUBSCRIBERS</p>
                </div>
                <div className="flex items-center mt-2">
                    <img className="p-2"  src="./icon-down.svg"></img>
                    <p className="text-[var(--bright-red)] tracking-[0.3em] text-xs">144 Today</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Followers