import {ContactForm} from '../contact-form'
import s from './Modal.module.scss'
import React from 'react'
import {SettingsContent} from '../settings-content'
import {CloseButton} from '../close-button'

type ModalProps = {
  isModalActive: boolean
  setIsModalActive: (active: boolean) => void
  type: 'set' | 'footer'
}

export const Modal: React.FC<ModalProps> = ({isModalActive, setIsModalActive, type}) => {

  const finallyClass = isModalActive ? `${s.modalWrap} ${s.active}` : s.modalWrap

  return (
    <div className={finallyClass}
         onClick={() => setIsModalActive(false)}>

      {type === 'footer' &&
        <div className={s.modal_content} onClick={e => e.stopPropagation()}>
          <ContactForm/>
          <CloseButton setIsModalActive={setIsModalActive}/>
        </div>
      }
      {type === 'set' &&
        <div className={s.set} onClick={e => e.stopPropagation()}>
          <SettingsContent setIsModalActive={setIsModalActive}/>
        </div>
      }
    </div>
  )
}