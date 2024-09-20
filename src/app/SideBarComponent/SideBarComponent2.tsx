import { BriefcaseBusiness, File, FilesIcon, User2 } from 'lucide-react'
import React from 'react'

export default function SideBarComponent2() {
    return (
    <div className='py-6'>
        <h1 className='font-thin  text-gray-400 '>recrutemement </h1>
        <div className=' flex-col '>
            
            <div  className=' flex items-center  py-3  gap-7 text-nowrap'>
           <BriefcaseBusiness size={17} color='white'/>
            <span className=' text-white text-sm'> offres d emploie</span>
       </div> 
       <div  className=' flex  py-3 items-center  gap-7 text-nowrap'>
           <User2 size={17}  color='white'/>
            <span className=' text-white text-sm'>  candidats</span>
       </div> 
       <div  className=' flex  items-center py-3  gap-7 text-nowrap'>
           <FilesIcon size={17}   color='white'/>
            <span className=' text-white text-sm'> Mes preferences</span>
       </div> 
       </div>
    </div>
      )
}
