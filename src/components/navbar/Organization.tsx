import React from 'react';

const organizations = [
    {
        logo: "./logo/logo01.png",
        name: "Samba Tech",
        offre: '2 offres en cours'
    },
    {
        logo: "",
        name: "Ogooue Technologie",
        offre: '2 offres en cours'
    },
];

export default function Organization() {
    return (
        <div>
            <div className='flex flex-col gap-y-2'>
                {organizations.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 py-2 bg-[#f3f1f2] ">

                        {item.logo && (
                            <img 
                                src={item.logo} 
                                alt={`${item.name} logo`} 
                                className="h-10 w-10 object-contain" 
                            />
                        )}
                        <div>
                            <span className="font-bold">{item.name}</span>
                            <p className="text-gray-500">{item.offre}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
