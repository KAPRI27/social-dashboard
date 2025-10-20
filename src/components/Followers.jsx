import { useState } from 'react'

function Followers() {
  return (
    <>
        <section class="flex justify-around w-auto text-center bg-blue-100">

            <div class="w-64 place-items-center border-t-4 border-t-facebook rounded-sm mx-5 p-5 bg-gray-100">
                <div class="flex my-2">
                    <img class="px-2"  src="./icon-facebook.svg" alt="icono de facebook" />
                    <p class="tracking-[0.3em] text-xs">@nathanf</p>
                </div>
                <div class="my-4">
                    <p class="font-bold text-5xl">1987</p>
                    <p class="text-toggle tracking-[0.3em] text-xs ">FOLLOWERS</p>
                </div>
                <div class="flex items-center mt-2">
                    <img class="px-2"  src="./icon-up.svg"></img>
                    <p class="text-lime-green tracking-[0.3em] text-xs">12 Today</p>
                </div>
            </div>

            <div class="w-64 place-items-center  border-t-4 border-t-twitter rounded-sm mx-5 p-5 bg-gray-100">
                <div class="flex my-2">
                    <img class="px-2" src="./icon-twitter.svg" alt="icono de twitter" />
                    <p class="tracking-[0.3em] text-xs">@nathanf</p>
                </div>
                <div class="my-4">
                    <p class="font-bold text-5xl">1044</p>
                    <p class="text-toggle tracking-[0.3em] text-xs ">FOLLOWERS</p>
                </div>
                <div class="flex items-center mt-2">
                    <img class="px-2"  src="./icon-up.svg"></img>
                    <p class="text-lime-green tracking-[0.3em] text-xs">99 Today</p>
                </div>
            </div>

           <div class="relative w-64 mx-5 p-5 rounded-sm bg-gray-100">
               <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-t-sm"></div>

                <div class="flex my-2">
                    <img class="px-2" src="./icon-instagram.svg" alt="icono de instagram" />
                    <p class="tracking-[0.3em] text-xs">@realnathanf</p>
                </div>
                <div class="my-4">
                    <p class="font-bold text-5xl">11k</p>
                    <p class="text-toggle tracking-[0.3em] text-xs ">FOLLOWERS</p>
                </div>
                <div class="flex items-center mt-2">
                    <img class="p-2" src="./icon-up.svg"></img>
                    <p class="text-lime-green tracking-[0.3em] text-xs">1099 Today</p>
                </div>
            </div>

            <div class="w-64 place-items-center border-t-4 border-t-youtube rounded-sm mx-5 p-5 bg-gray-100">
                <div class="flex my-2">
                    <img class="px-2 " src="./icon-youtube.svg" alt="icono de youtube" />
                    <p class="tracking-[0.3em] text-xs">Nathan F.</p>
                </div>
                <div class="my-4">
                    <p  class="font-bold text-5xl">8239</p>
                    <p class="text-toggle tracking-[0.3em] text-xs ">SUBSCRIBERS</p>
                </div>
                <div class="flex items-center mt-2">
                    <img class="p-2"  src="./icon-down.svg"></img>
                    <p class="text-bright-red tracking-[0.3em] text-xs">144 Today</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Followers