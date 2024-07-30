import React, {useContext} from 'react'
import s from './LoadingIndicator.module.scss'
import {LocaleContext} from '../../../utils'

export const LoadingIndicator = () => {
  const {locale} = useContext(LocaleContext)

  return (
    <div className={s.loader}>
      {locale === 'en' &&
        <>
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </>
      }
      {locale === 'ru' &&
        <>
          <span>З</span>
          <span>А</span>
          <span>Г</span>
          <span>Р</span>
          <span>У</span>
          <span>З</span>
          <span>КA</span>
        </>
      }
    </div>
  )
}