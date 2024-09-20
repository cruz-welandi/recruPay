import React from 'react'
import SwitchCompanny from './navbar/SwitchCompanny'
import SwitchGlobal from './navbar/SwitchGlobal'
import ButtonAdd from './navbar/ButtonAdd'
import NotificationButton from './navbar/NotificationButton'
import ProfilLink from './navbar/ProfilLink'

export default function NavBar() {
  return (

    <div className='flex items-center w-full justify-between py-'>

      <div className='flex items-center gap-10 px-10'>
        <SwitchCompanny />

        <div className='border-r-2 h-16'></div>

        <SwitchGlobal />

      </div>

      <div className='flex gap-4 items-center mr-3'>
        <ButtonAdd />
        <NotificationButton />
        <ProfilLink />
      </div>

    </div>
  )
}
