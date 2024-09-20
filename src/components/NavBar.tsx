import React from 'react'
import SwitchCompanny from './navbar/SwitchCompanny'
import SwitchGlobal from './navbar/SwitchGlobal'
import ButtonAdd from './navbar/ButtonAdd'
import NotificationButton from './navbar/NotificationButton'
import ProfilLink from './navbar/ProfilLink'

export default function NavBar() {
  return (

    <div className='flex items-center justify-between p-6'>

      <div className='flex'>
        <SwitchCompanny />
        <SwitchGlobal />
      </div>

      <div className='flex gap-4'>
        <ButtonAdd />
        <NotificationButton />
        <ProfilLink />
      </div>

    </div>
  )
}
