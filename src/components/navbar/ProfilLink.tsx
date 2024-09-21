import Link from 'next/link';
import React from 'react'
import { MdAccountCircle } from "react-icons/md";


export default function ProfilLincolk() {
  return (
    <div className="">
      <Link href={"/"}>
        <MdAccountCircle className='h-12 w-12' />
      </Link>
    </div>

  )
}
