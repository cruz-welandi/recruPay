import React from 'react'
import { FiSearch } from "react-icons/fi";
import { Button } from '../ui/button';

export default function SwitchGlobal() {
  return (
    <Button className='bg-white'>
      <FiSearch size={32} color='black'/>
    </Button>
  )
}
