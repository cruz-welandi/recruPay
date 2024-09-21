import React from 'react'
 type  SideBarProps={
     label?:string;
    size?:number;
    Icon: React.ElementType
    link:string;
 }
 const  Link:React.FC<SideBarProps>=({label,size,Icon})=> {

  return (
    <div className='pt-[12px] flex gap-4  items-center  text-white text-md'>
         <Icon  size={19}  />
      <button style={{fontSize : size? size:8, fontFamily:"revert-layer"}} >{label} </button>
   
    </div>
  )
}
export default Link;