import React from 'react';
import {Card} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Section ={
    children: React.ReactNode,
    className?: string
}

const Section: React.FC<Section> = ({children, className}) => {
  return (
    <Card className={cn(className, 'bg-white')}>
        {children}
    </Card>
  )
}

export default Section