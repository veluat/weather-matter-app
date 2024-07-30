import {ContactForm} from '../contact-form'
import s from './Modal.module.scss'
import React from 'react'
import {SettingsContent} from '../settings-contant'
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
      <div className={s.modal_content} onClick={e => e.stopPropagation()}>
        {type === 'footer' &&
          <>
            <ContactForm/>
            <CloseButton setIsModalActive={setIsModalActive}/>
          </>
        }
        {type === 'set' &&
          <>
            <SettingsContent/>
          </>
        }
      </div>
    </div>
  )
}