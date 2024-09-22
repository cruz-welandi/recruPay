'use client'
import React from 'react';
import SwitchCompanny from './navbar/SwitchCompanny';
import SwitchGlobal from './navbar/SwitchGlobal';
import ButtonAdd from './navbar/ButtonAdd';
import NotificationButton from './navbar/NotificationButton';
import ProfilLink from './navbar/ProfilLink';
import { PanelLeft } from 'lucide-react';
import {useSideBarStore} from '@/store/storeSideBar';

export default function NavBar() {
  const setExpanded = useSideBarStore((state) => state.setExpanded);
  return (

    <div className='flex items-center w-full shadow-md'>
      <div className='flex flex-col bg-theme-1 justify-between w-56 flex-2'>
        <div className='flex justify-between items-center px-2 pr-5 py-[15px]'>
          <span className='text-2xl'>
            <a href='/' >
              <img src='/logo-fond-vert.png' height={80} width={80} alt="Logo" />
            </a>
          </span>
          <button onClick={setExpanded} className='cursor-pointer'>
            <PanelLeft size={30} color='white' />
          </button>
        </div>
        <div className='min-h-[0.5px] bg-[#d2d8d8]'/>
      </div>
      <div className='flex justify-between items-center flex-1'>
        <div className='flex items-center gap-6 px-10 '>
          <SwitchCompanny />

          <div className='border-r-2 h-[75px] '/>

          <SwitchGlobal />

        </div>

        <div className='flex gap-4 items-center mr-3 py-1'>
          <ButtonAdd />
          <NotificationButton />
          <ProfilLink />
        </div>
      </div>
    </div>
  )
}
