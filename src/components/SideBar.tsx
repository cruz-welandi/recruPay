import React from 'react'
import Link from './Link'
import { FaIdCard } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { PiGaugeBold } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { LuPanelLeft } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";


const   SideBar=() =>{
  return (
    <div className='h-[100vh]  w-56 bg-background text-white'>
       <div  className='pb-[20px] pl-5 flex  justify-between pr-4  pt-[20px]'>
        <span className=' text-2xl'>recru   </span> <LuPanelLeft size={30}/> 
       </div>
       <div className='flex items-start h-0.5 bg-white'></div>
       <div className=' pl-4 mt-[16px]'>
       <Link label="Tableau de baord" size={15} Icon={PiGaugeBold}/>
       <Link label="Mail inbox"size={15} Icon={MdOutlineMail}/>
       <Link label="Calendrier"size={15} Icon={FaCalendar}/>
       <h1  className=' text-gray-500 pt-9 text-md'>recrutement</h1>
       <Link label="Offres d emploies"size={15} Icon={BsFillBriefcaseFill}/>
       <Link label=" Candidats"size={15} Icon={FaUserFriends}/>
       <Link label="Mes preferences" size={15} Icon={GoFileDirectoryFill} />
       <h1 className=' text-gray-500 pt-6 text-md'>organisation</h1>
       <Link label="A propos de nous " size={15} Icon={MdInfo}/>
       <Link label=" Departement" size={15} Icon={MdInfo}/>
       <Link label="Employés" size={15} Icon={FaIdCard}/>
        <div className='pt-[119px]'>
        <p className='text-sm ' >Besion d aide </p>
        <span className='text-gray-500 text-sm'>ouvrez votre aide centre</span>
       </div>
        </div>
      
    </div>
  )
}
export default SideBar
