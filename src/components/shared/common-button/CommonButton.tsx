import React from 'react'
import s from './CommonButton.module.scss'

type CommonButtonType = {
  handleButtonClick: (value: string) => void
  title: string
  size?: 'small'
}

export const CommonButton: React.FC<CommonButtonType> = ({handleButtonClick, title, size}) => {

  const style = size === 'small' ? `${s.root} ${s.size}` : s.root

  return (
    <>
      <button className={style} onClick={() => handleButtonClick('current')}>{title}</button>
    </>
  )
}