import React from 'react'
import s from './ErrorMessage.module.scss'

type Props = {
  message: string | null
}

export const ErrorMessage: React.FC<Props> = ({message}) => {
  return (
    <div className={s.root}>
      {message}
    </div>
  )
}