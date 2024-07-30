import React from 'react'
import close_img from '../../../assets/close.png'
import s from './CloseButton.module.scss'

type Props = {
  setIsModalActive: (active: boolean) => void
}

export const CloseButton: React.FC<Props> = ({setIsModalActive}) => {
  return (
    <button className={s.close} onClick={() => setIsModalActive(false)}>
      <img src={close_img} alt={'close icon'} className={s.img}/>
    </button>
  )
}