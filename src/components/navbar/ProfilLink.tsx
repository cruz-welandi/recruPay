import Link from 'next/link';
import React from 'react'
import { MdAccountCircle } from "react-icons/md";


export default function ProfilLink() {
  return (
    <div className="">

      <Link href={"/"}>
        <MdAccountCircle className='h-20 w-20' />
      </Link>
    </div>

  )
}
