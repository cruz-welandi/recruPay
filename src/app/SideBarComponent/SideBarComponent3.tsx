import { IdCard, Info } from 'lucide-react'
import React from 'react'

export default function SideBarComponent3() {
  return (
    <div className='py-2'>
    <h1 className='font-thin text-gray-400 '>orgamisation </h1>
    <div className=' flex-col '>
        
        <div  className=' flex items-center  py-3  gap-7 text-nowrap'>
       <Info size={17}  color='white'/>
        <span className=' text-white text-sm'> a propos de nous </span>
   </div> 
   <div  className=' flex items-center  py-3   gap-7 text-nowrap'>
       <IdCard size={17}  color='white'/>
        <span className=' text-white text-sm'>  departements</span>
   </div> 
   <div  className=' flex items-center  py-3  gap-7 text-nowrap'>
       <IdCard  size={17}  color='white'/>
        <span className=' text-white text-sm'>employés</span>
   </div> 
   </div>
</div>
  )
}
