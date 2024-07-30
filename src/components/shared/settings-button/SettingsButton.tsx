import React from 'react'
import settings_img from '../../../assets/settings.png'
import s from './SettingsButton.module.scss'

type SettingsButtonProps = {
  setIsModalActive: (value: boolean) => void
}

export const SettingsButton: React.FC<SettingsButtonProps> = ({setIsModalActive}) => {

  return (
    <button className={s.btn} onClick={() => setIsModalActive(true)}>
      <img src={settings_img} alt={'settings icon'} className={s.img}/>
    </button>
  )
}