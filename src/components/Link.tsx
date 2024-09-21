'use client'; // Ajoutez ceci pour indiquer que c'est un Client Component

import React from 'react';

type SideBarProps = {
    label?: string;
    size?: number;
    Icon: React.ElementType;
    link: string;
};

const Link: React.FC<SideBarProps> = ({ label, size, Icon }) => {
    const handleClick = () => {
        alert(`Vous avez cliqué sur ${label}`);
    };

    return (
        <div className='pt-[12px] flex gap-4 items-center text-white text-md'>
            <Icon size={19} />
            <button
                onClick={handleClick}
                style={{ fontSize: size ? size : 8, fontFamily: "revert-layer" }}
            >
                {label}
            </button>
        </div>
    );
};

export default Link;
