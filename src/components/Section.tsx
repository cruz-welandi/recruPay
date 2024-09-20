import React from 'react';
import {Card} from '@/components/ui/card';

type Section ={
    titre: string,
    lien?: string,
    children: React.ReactNode,
    buttonAction?: ()=> void,
    className?: string
}

const Section: React.FC<Section> = ({titre, lien, children, buttonAction, className}) => {
  return (
    <Card>
        
        {children}
    </Card>
  )
}

export default Section