'use client'; 
import { useSideBarStore } from '@/store/storeSideBar';
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
    const isExpanded = useSideBarStore((state) => state.expanded);


    return (
        <div
            onClick={()=>onclick(link)}
            className={`flex gap-4 text-white text-md rounded-sm  py-1.5 px-4 ${selected && !isExpanded ? 'bg-theme-2' : ''}`}
        >
            <Icon size={19} />
            <button style={{ fontSize: size ? size : 8 }}>
                {label}
            </span>
        </div> 
    );
};

export default Link;
