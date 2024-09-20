import React from 'react'
import ButtonAdd from './navbar/ButtonAdd'
import NotificationButton from './navbar/NotificationButton'
import ProfilLink from './navbar/ProfilLink'

export default function NavBar() {
  return (
    <div className='flex'>
      <ButtonAdd />
      <NotificationButton />
      <ProfilLink />
    </div>
  )
}
