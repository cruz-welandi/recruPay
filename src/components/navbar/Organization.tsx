import React from 'react';

const organizations = [
    {
        name: "Samba Tech",
        offre: '2 offres en cours'
    },
    {
        name: "Ogooue Technologie",
        offre: '2 offres en cours'
    },
];

export default function Organization() {
    return (
        <div>
            <div>
                {organizations.map((item, index) => (
                    <div key={index} className="items-center py-2">
                        <div>
                            <span className="font-bold">{item.name}</span>
                        </div>
                        <p className="text-gray-500 ">{item.offre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
