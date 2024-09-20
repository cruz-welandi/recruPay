import Link from 'next/link';
import React from 'react'
import { MdAccountCircle } from "react-icons/md";


export default function ProfilLink() {
  return (
    <div className="">

      <Link href={"/"}>
        <MdAccountCircle className='h-full w-[80px]' />
      </Link>
    </div>

  )
}
