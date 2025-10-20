import { useState } from 'react'

function Likes() {
  return (
    <>
        <div class=" bg-teal-200 m-5 ">
      <h3 class="text-black text-2xl ">Overview - Today</h3>
    </div>
    
      <section class="flex justify-around bg-teal-700 w-auto">
        
        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs"> Page Views</p>
            <img class="items-center "  src="./icon-facebook.svg" alt="icono de facebook" />
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">87</p>
            <p class="flex items-center text-lime-green text-xs "><img class="" src="./icon-up.svg"></img>3%</p>
          </div>
        </div>
      
        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs">Likes</p>
            <img class="items-center " src="./icon-facebook.svg" alt="icono de facebook" />
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">52</p>
            <p class="flex items-center text-bright-red text-xs "><img class="" src="./icon-down.svg"></img>2%</p>
          </div>
        </div>

        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs">Likes</p>
            <img class="" src="./icon-instagram.svg" alt="icono de instagram" />  
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">5462</p>
            <p class="flex items-center text-lime-green  text-xs "><img class="" src="./icon-up.svg"></img>2257%</p>
          </div>
        </div>
        
        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs">Profile Views</p>
            <img class=""  src="./icon-instagram.svg" alt="icono de instagram" />
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">52k</p>
            <p class="flex items-center text-lime-green  text-xs  "><img class="" src="./icon-up.svg"></img>1375%</p>
          </div>
        </div>
      </section>
      <section class="flex justify-around bg-teal-200 w-auto">
        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs">Retweets</p>
            <img src="./icon-twitter.svg" alt="iconode de twitter" />
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">117</p>
            <p class="flex items-center text-lime-green  text-xs  "><img class="" src="./icon-up.svg"></img>303%</p>
          </div>
        </div>

        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs">Likes</p>
            <img src="./icon-twitter.svg" alt="icono de twitter" />
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">507</p>
            <p class="flex items-center text-lime-green  text-xs  "><img class="" src="./icon-up.svg"></img>553%</p>
          </div>
        </div>
        
        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs">Likes</p>
            <img src="./icon-youtube.svg" alt="icono de youtube" />
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">107</p>
             <p class="text-bright-red text-xs flex items-center "><img class=""  src="./icon-down.svg"></img>19%</p>
          </div>
        </div>

        <div class="w-64 bg-very-pale-blue rounded-sm items-center p-5 m-5">
          <div class="flex justify-between">
            <p class="text-xs">Total Views</p>
            <img src="./icon-youtube.svg" alt="icono de youtube" />
          </div>
          <div class="flex justify-between">
            <p class="font-bold text-3xl">1407</p>
            <p class="text-bright-red text-xs flex items-center "><img class=""  src="./icon-down.svg"></img>12%</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Likes