import React from 'react';

type headTitle = {
    label: string,
    size?: number
}

const HeadTitle: React.FC<headTitle> = ({label, size}) => {
  return (
    <h1 className={`text-theme-1`} style={{fontSize: size? size : 40}}>
        {label}
    </h1>
  )
}

export default HeadTitle