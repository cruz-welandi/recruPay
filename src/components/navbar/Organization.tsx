import React from 'react';
import { FiEdit2, FiRefreshCw } from 'react-icons/fi'; 

const organizations = [
    {
        logo: "/logo01.png",
        name: "Samba Tech",
        offre: '2 offres en cours',
        iconTransfert: <FiRefreshCw className="h-5 w-5 text-white" />,
        iconEdit: <FiEdit2 className="h-5 w-5 text-white" />
    },
    {
        logo: "/logo01.png",
        name: "Ogooue Technologie",
        offre: '2 offres en cours',
        iconTransfert: <FiRefreshCw className="h-5 w-5 text-white" />,
        iconEdit: <FiEdit2 className="h-5 w-5 text-white" />
    },
];

export default function Organization() {
    return (
        <div>
            <div className='flex flex-col gap-y-2'>
                {organizations.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 py-2 bg-[#f3f1f2] p-2 rounded-md">

                        {/* Logo de l'organisation */}
                        {item.logo && (
                            <img 
                                src={item.logo} 
                                alt={`${item.name} logo`} 
                                className="h-10  object-contain" 
                            />
                        )}

                        {/* Détails de l'organisation */}
                        <div className="flex-grow">
                            <span className="font-bold">{item.name}</span>
                            <p className="text-gray-500">{item.offre}</p>
                        </div>

                        {/* Icônes d'action */}
                        <div className="flex space-x-2 items-center">
                            {item.iconTransfert && (
                                <span className="cursor-pointer hover:text-blue-500 text-white bg-[#fa9938] rounded-full w-10 h-10 ">
                                    {item.iconTransfert}
                                </span>
                            )}
                            {item.iconEdit && (
                                <span className="cursor-pointer hover:text-green-500 text-white bg-[#0c2c2b]  rounded-full w-10 h-10">
                                    {item.iconEdit}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
