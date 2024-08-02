import React from 'react'
import s from './CommonButton.module.scss'

type CommonButtonType = {
  handleButtonClick: (value: string) => void
  title: string
  size?: 'small'
}

export const CommonButton: React.FC<CommonButtonType> = ({handleButtonClick, title, size}) => {

  return (
    <>
      <button className={size ? `${s.root} ${s.small}` : s.root} onClick={() => handleButtonClick('current')}>{title}</button>
    </>
  )
}