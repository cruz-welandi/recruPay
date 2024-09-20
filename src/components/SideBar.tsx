import React from 'react';
import Link from './Link';
import { FaIdCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { PiGaugeBold } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { LuPanelLeft } from "react-icons/lu";
import { Folder, Calendar, Users, BriefcaseBusiness, Info, IdCard } from "lucide-react";

const SideBar = () => {
  return (
    <div className='h-[100vh] w-56 bg-theme-1 text-white flex flex-col justify-between'>
      <div>
        <div className='pb-[20px] pl-2 flex justify-between pr-4 pt-[20px]'>
          <span className='text-2xl'><img src='/logo-fond-vert.png' height={80} width={80} alt="Logo" /></span>
          <LuPanelLeft size={30} />
        </div>
        <div className='flex items-start h-0.5 bg-white'></div>
        <div className='pl-4 mt-[16px]'>
            
          <Link label="Tableau de bord" size={15} Icon={PiGaugeBold} />
          <Link label="Mail inbox" size={15} Icon={MdOutlineMail} />
          <Link label="Calendrier" size={15} Icon={Calendar} />
          <h1 className='text-gray-500 pt-9 text-md'>Recrutement</h1>
          <Link label="Offres d'emplois" size={15} Icon={BriefcaseBusiness} />
          <Link label="Candidats" size={15} Icon={Users} />
          <Link label="Mes préférences" size={15} Icon={Folder} />
          <h1 className='text-gray-500 pt-6 text-md'>Organisation</h1>
          <Link label="À propos de nous" size={15} Icon={Info} />
          <Link label="Département" size={15} Icon={MdInfo} />
          <Link label="Employés" size={15} Icon={IdCard} />
        </div>
      </div>
      <div className='pt-[20px] pb-5'>
        <p className='text-sm'>Besoin d'aide</p>
        <span className='text-gray-500 text-sm'>Ouvrez votre centre d'aide</span>
      </div>
    </div>
  );
}

export default SideBar;
