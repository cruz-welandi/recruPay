import { Calendar, Gauge, GaugeCircle, MailIcon } from 'lucide-react'
import React from 'react'

export default function SideBarComponent1() {
  return (
    <div className=' flex-col '>
         <div  className=' flex items-center  py-3  gap-7 text-nowrap'>
        <GaugeCircle size={17} color='white'/>
         <span className=' text-white text-sm'> tableau de bord</span>
    </div> 
    <div  className=' flex  items-center py-3   gap-7 text-nowrap'>
        <MailIcon size={17} color='white'/>
         <span className=' text-white text-sm'>  Mail inbox</span>
    </div> 
    <div  className=' flex items-center   py-3  gap-7 text-nowrap'>
        <Calendar  size={17} color='white'/>
         <span className=' text-white text-sm'> calendar</span>
    </div> 
    </div>
  )
}
