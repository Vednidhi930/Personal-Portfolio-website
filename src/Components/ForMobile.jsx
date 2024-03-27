import React from 'react'
import { LuMenu } from "react-icons/lu";
import { IoIosMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import "../Components/Global.css"

const ForMobile = ({show,setShow,handleDarkMode,darkmode}) => {

  return (
    <>
        <div className='for-mobile w-screen'>
             <div className='w-screen flex justify-around items-center p-3 main'>
                 <h1 className='text-3xl font-bold  text-pink-500'>PortFolio</h1>
              {darkmode ==="light" ?
                 <div className='w-10 h-10 bg-white text-black hover:text-white hover:bg-blue-500 flex justify-center items-center rounded-full p-2 font-bold '>
                <IoIosMoon className='text-2xl' onClick={handleDarkMode}/>
                </div>
                :
               <div className='w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full p-2'>
<                IoSunnyOutline className='text-2xl' onClick={handleDarkMode}/>
               </div>
              } 
                <div className='w-10 h-10 bg-blue-500 text-white flex justify-center items-center rounded-full p-2 lg:hidden sm:block '>
                <LuMenu className='text-2xl' onClick={()=>setShow(!show)}/>
                </div>
             </div>
        </div>
    </>
  )
}

export default ForMobile
