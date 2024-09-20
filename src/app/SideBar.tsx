import { PanelRight } from 'lucide-react'
import React from 'react'
import { Color } from './Color/Color'
import SideBarComponent1 from './SideBarComponent/SideBarComponent1'
import SideBarComponent2 from './SideBarComponent/SideBarComponent2'
import SideBarComponent3 from './SideBarComponent/SideBarComponent3'
import SideBarFooter from './SideBarComponent/SideBarFooter'

const SideBar = () => {
    const color = "ColorSide"
    const ColorSide = (name: string) => {
        const color = Math.floor(
            name.charCodeAt(0) % Color.length
        )
        return Color[color]
    }
    return (
        <div className=' flex-col' style={{ backgroundColor: ColorSide(color) }}>
            <div className=' '>
                <div className={` flex justify-between p-2 w-64`}>
                    <span className=' text-white'> recut pay</span>
                    <PanelRight color='white' />
                </div>
                <div className='h-0.5 bg-gray-300'></div>
                <div className='p-3'>
                    <SideBarComponent1 />
                    <SideBarComponent2 />
                    <SideBarComponent3 />
                </div>
                <div >
                </div>
            </div>
 <div className='pt-20'>
 <SideBarFooter/>
 </div>
        </div>
    )
}
export default SideBar 