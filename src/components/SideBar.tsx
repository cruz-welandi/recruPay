'use client';
import React from 'react';
import Link from './Link';
import { MdOutlineMail, MdInfo } from "react-icons/md";
import { PiGaugeBold } from "react-icons/pi";
import { Folder, Calendar, Users, BriefcaseBusiness, Info, IdCard, CircleHelp ,PanelLeft} from "lucide-react";

const SideBar = () => {
    const [isExpanded, setIsExpanded] = React.useState(true);
     const [ linkSelected,setLinkSelected]=React.useState("");
    const handleWelcomePage = (event:any) => {
        event.preventDefault();
        window.location.href="/";
    };

    const toggleSidebar = () => {
        setIsExpanded(prev => !prev);
    };
   const handleClick =(link:any)=>{
setLinkSelected(link)
   }
    return (
        <div className=''>
            {/* Header Section */}
            <div className='   flex justify-between py-3 pt-[19px] pr-[10px]  w-56 bg-theme-1'>
                <span className='text-2xl'>
                    <a href='/' onClick={handleWelcomePage}>
                        <img src='/logo-fond-vert.png' height={80} width={80} alt="Logo" />
                    </a>
                </span>
                <div onClick={toggleSidebar} className='cursor-pointer'>
                    <PanelLeft size={30} color='white' />
                </div>
            </div>
            {/* Sidebar Section */}
            <div className={`h-[90vh] ${isExpanded ? 'w-56' : 'w-16 '} bg-theme-1  text-white flex flex-col justify-between transition-all duration-300 `}>
                <div>
                    <div className='min-h-[1px] bg-white'></div>
                    <div className=' pt-[12px] pl-3 pr-4  cursor-pointer'>
                        {isExpanded ? (
                            <div className=''>
                                <div>
                                <Link label="Tableau de bord" size={13} Icon={PiGaugeBold} link={"/"} selected={linkSelected==="/"}  onclick={handleClick}/>
                                <Link label="Mail inbox" size={13} Icon={MdOutlineMail} link={"/mail"} selected={linkSelected==="/mail"}  onclick={handleClick} />
                                <Link label="Calendrier" size={13} Icon={Calendar} link={"/Calendrier"}selected={linkSelected==="/Calendrier"}  onclick={handleClick} />
                                </div>
                                <div className='pt-9 pl-2'>

                               
                                <h1 className='text-gray-500  text-md'>Recrutement</h1>
                                <Link label="Offres d'emplois" size={13} Icon={BriefcaseBusiness} link={"/Offresdemplois"}  selected={linkSelected==="/Offresdemplois"}  onclick={handleClick}/>
                                <Link label="Candidats" size={13} Icon={Users} link={"/Candidats"} selected={linkSelected==="/Candidats"}  onclick={handleClick} />
                                <Link label="Mes préférences" size={13} Icon={Folder} link={"/Mespréférences"} selected={linkSelected==="/Mespréférences"}  onclick={handleClick} />
                                </div>
                                <div className='pl-2 pt-[19px] text-md'>

                               
                                <h1 className='text-gray-500'>Organisation</h1>
                                <Link label="À propos de nous" size={13} Icon={Info} link={"/Àproposdenous"} selected={linkSelected==="/Àproposdenous"}  onclick={handleClick}/>
                                <Link label="Département" size={13} Icon={MdInfo} link={"/Département"} selected={linkSelected==="/Département"}  onclick={handleClick} />
                                <Link label="Employés" size={13} Icon={IdCard} link={"/Employés"}  selected={linkSelected==="/Employés"}  onclick={handleClick}/>
                                </div>
                            </div>
                        ) : (
                            <div className='w-12'>
                                <Link label="" size={13} Icon={PiGaugeBold} link={"/"}  selected={linkSelected==="/"}  onclick={handleClick}/>
                                <Link label="" size={13} Icon={MdOutlineMail} link={"/Mailinbox"} selected={linkSelected==="/Mailinbox"}  onclick={handleClick} />
                                <Link label="" size={13} Icon={Calendar} link={"/Calendrier"} selected={linkSelected==="/Calendrier"}  onclick={handleClick} />

                                <div className='pt-[24px]'>
                                    <Link label="" size={13} Icon={BriefcaseBusiness} link={"/Offresdemplois"} selected={linkSelected==="/Offresdemplois"}  onclick={handleClick} />
                                    <Link label="" size={13} Icon={Users} link={"/Candidats"}  selected={linkSelected==="/Candidats"}  onclick={handleClick}/>
                                    <Link label="" size={13} Icon={Folder} link={"/Mespréférences"}  selected={linkSelected==="/Mespréférences"}  onclick={handleClick}/>
                                </div>
                                <div className='py-[28px]'>
                                    <Link label="" size={13} Icon={Info} link={"/Àproposdenous"}  selected={linkSelected==="/Àproposdenous"}  onclick={handleClick}/>
                                    <Link label="" size={13} Icon={MdInfo} link={"/Département"}  selected={linkSelected==="/Département"}  onclick={handleClick}/>
                                    <Link label="" size={13} Icon={IdCard} link={"/Employés"}  selected={linkSelected==="/Employés"}  onclick={handleClick}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='  cursor-pointer pr-4 '>
                 { isExpanded ?(
                    <div>
                         <Link label="Besoin d'aide" size={13} link={"/besoindaide"} Icon={'symbol'}  selected={linkSelected==="/besoindaide"}  onclick={handleClick}/>
                        <p className='text-sm font-thin text-gray-500 px-5 text-nowrap'>Ouvrez votre centre d'aide</p>
                    </div>
                 ): <div className=' pl-2'>
                     <Link label="" size={13} link={"/besoindaide"} Icon={CircleHelp}  selected={linkSelected==="/besoindaide"}  onclick={handleClick}/>
                 </div>
                 }
                    
                </div>
            </div>
        </div>
    );
};

export default SideBar;
