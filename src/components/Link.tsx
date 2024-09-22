'use client'; 
import { useRouter } from 'next/navigation';
import React from 'react';

type SideBarProps = {
    label?: string;
    size?: number;
    Icon: React.ElementType;
    link: string;
    onclick: (link :string)=> void;
    selected:boolean;

};

const Link: React.FC<SideBarProps> = ({ label, size, Icon, link ,selected,onclick}) => {
    const router = useRouter();

    


    return (
        <div
            onClick={()=>onclick(link)}
            className={`pt-[12px] pl-2 flex gap-4 items-center text-white text-md rounded-sm pb-2 ${selected ? 'bg-theme-2' : ''}`}
        >
            <Icon size={15} />
            <button style={{ fontSize: size ? size : 8 }}>
                {label}
            </button>
        </div> 
    );
};

export default Link;
