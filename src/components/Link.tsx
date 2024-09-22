'use client'; // Ajoutez ceci pour indiquer que c'est un Client Component

import { useRouter } from 'next/navigation';
import React from 'react';

type SideBarProps = {
    label?: string;
    size?: number;
    Icon: React.ElementType;
    link: string;
};

const Link: React.FC<SideBarProps> = ({ label, size, Icon, link }) => {
    const router = useRouter();
    const [color, setColor] = React.useState(false);
    
    const handleClick = (event: any) => {
        event.stopPropagation();
        setColor(true);
        router.push(link);
    };

    return (
        <div
            onClick={handleClick}
            className={`pt-[12px] pl-2 flex gap-4 items-center text-white text-md rounded-sm pb-2 ${color ? 'bg-theme-2' : ''}`}
        >
            <Icon size={19} />
            <button style={{ fontSize: size ? size : 8 }}>
                {label}
            </button>
        </div>
    );
};

export default Link;
