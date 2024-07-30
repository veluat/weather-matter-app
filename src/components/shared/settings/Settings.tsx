import React, {useState} from 'react'
import {SettingsButton} from '../settings-button'
import s from './Settings.module.scss'
import {Modal} from '../modal'
import {CloseButton} from '../close-button'

export const Settings = () => {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <div className={s.root}>
      {isModalActive ? (
        <CloseButton setIsModalActive={setIsModalActive}/>
      ) : (
        <SettingsButton setIsModalActive={setIsModalActive}/>
      )}
      {isModalActive && (
        <Modal
          type={'set'}
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      )}
    </div>
  )
}