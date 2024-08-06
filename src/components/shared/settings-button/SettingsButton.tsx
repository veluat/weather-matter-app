import React from 'react'
import s from './SettingsButton.module.scss'
import {Icon} from '../icon'

type SettingsButtonProps = {
  setIsModalActive: (value: boolean) => void
}

export const SettingsButton: React.FC<SettingsButtonProps> = ({setIsModalActive}) => {

  return (
    <button className={s.btn} onClick={() => setIsModalActive(true)}>
      <Icon sprId={'settings'} height={70} width={70}/>
    </button>
  )
}