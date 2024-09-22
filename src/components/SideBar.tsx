'use client';
import React from 'react';
import Link from './Link';
import { MdOutlineMail, MdInfo } from "react-icons/md";
import { PiGaugeBold } from "react-icons/pi";
import { Folder, Calendar, Users, BriefcaseBusiness, Info, IdCard, CircleHelp, PanelLeft } from "lucide-react";
import { useSideBarStore } from '@/store/storeSideBar';

const SideBar = () => {
    const isExpanded = useSideBarStore((state) => state.expanded);
    const [linkSelected, setLinkSelected] = React.useState("");


    const handleClick = (link: any) => {
        setLinkSelected(link)
    }
    return (
        <div className='h-[89.7vh] bg-[#f3f1f1]'>
            {/* Sidebar Section */}
            <div className={`${!isExpanded ? 'w-56' : 'w-16 '} text-white h-full bg-theme-1 flex flex-col justify-between transition-all duration-300 flex-2 py-4`}>

                <div className='cursor-pointer flex flex-col gap-y-8 items-center'>
                    <div className='flex-2 flex flex-col gap-y-3 sticky items-start'>
                        <Link label="Tableau de bord" size={15} Icon={PiGaugeBold} link={"/"} selected={linkSelected === "/"} onclick={handleClick} />
                        <Link label="Mail inbox" size={15} Icon={MdOutlineMail} link={"/mail"} selected={linkSelected === "/mail"} onclick={handleClick} />
                        <Link label="Calendrier" size={15} Icon={Calendar} link={"/Calendrier"} selected={linkSelected === "/Calendrier"} onclick={handleClick} />
                    </div>
                    <div className='flex-2 flex flex-col gap-y-3 sticky items-start'>
                        <h1 className={`text-gray-500 text-md px-4`}>{isExpanded?'': 'Recrutement'}</h1>
                        <Link label="Offres d'emplois" size={15} Icon={BriefcaseBusiness} link={"/Offresdemplois"} selected={linkSelected === "/Offresdemplois"} onclick={handleClick} />
                        <Link label="Candidats" size={15} Icon={Users} link={"/Candidats"} selected={linkSelected === "/Candidats"} onclick={handleClick} />
                        <Link label="Mes préférences" size={15} Icon={Folder} link={"/Mespréférences"} selected={linkSelected === "/Mespréférences"} onclick={handleClick} />
                    </div>
                    <div className='flex-2 flex flex-col gap-y-3 sticky items-start'>
                        <h1 className={`text-gray-500 text-md px-4`}> {isExpanded?'': 'Organisation'}</h1>
                        <Link label="À propos de nous" size={15} Icon={Info} link={"/Àproposdenous"} selected={linkSelected === "/Àproposdenous"} onclick={handleClick} />
                        <Link label="Département" size={15} Icon={MdInfo} link={"/Département"} selected={linkSelected === "/Département"} onclick={handleClick} />
                        <Link label="Employés" size={15} Icon={IdCard} link={"/Employés"} selected={linkSelected === "/Employés"} onclick={handleClick} />
                    </div>
                </div>

                <div className='cursor-pointer flex items-center justify-center'>
                    {!isExpanded ? (
                        <div className='flex-2 sticky'>
                            <Link label="Besoin d'aide" size={15} link={"/Àproposdenous"} Icon={'symbol'} selected={linkSelected === "/Àproposdenous"} onclick={handleClick} />
                            <p className={`${isExpanded ? 'hidden' : 'text-sm font-thin text-gray-500 text-nowrap px-4'}`}>{isExpanded?'': "Ouvrez votre centre d'aide"}</p>
                        </div>
                    ) : (
                        <div className='flex-2 sticky'>
                            <Link label="" size={15} link={"/Àproposdenous"} Icon={CircleHelp} selected={linkSelected === "/Àproposdenous"} onclick={handleClick} />
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default SideBar;
