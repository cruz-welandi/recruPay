import React from 'react'
import SwitchCompanny from './navbar/SwitchCompanny'
import SwitchGlobal from './navbar/SwitchGlobal'
import ButtonAdd from './navbar/ButtonAdd'
import NotificationButton from './navbar/NotificationButton'
import ProfilLink from './navbar/ProfilLink'

export default function NavBar() {
  return (

    <div className='flex items-center w-full justify-between shadow-md '>

      <div className='flex items-center gap-6 px-10 '>
        <SwitchCompanny />

        <div className='border-r-2 h-[75px] '></div>

        <SwitchGlobal />

      </div>

      <div className='flex gap-4 items-center mr-3 py-1'>
        <ButtonAdd />
        <NotificationButton />
        <ProfilLink />
      </div>

    </div>
  )
}
