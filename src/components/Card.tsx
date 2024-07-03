import React from 'react'

import style from './Card.module.scss'

type CardProps = {
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className={style.container} data-testid='card'>
      {children}
    </div>
  )
}

export default Card
