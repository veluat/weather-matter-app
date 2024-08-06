import React from 'react'
import s from './CloseButton.module.scss'
import {Icon} from '../icon'

type Props = {
  setIsModalActive: (active: boolean) => void
}
export const CloseButton: React.FC<Props> = ({setIsModalActive}) => {
  return (
    <button className={s.close} onClick={() => setIsModalActive(false)}>
      <Icon sprId={'close'} height={70} width={70}/>
    </button>
  )
}