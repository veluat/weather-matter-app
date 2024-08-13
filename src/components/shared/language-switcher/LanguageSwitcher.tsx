import React, {useContext} from 'react'
import {LocaleContext} from '../../../utils'
import s from './LanguageSwitcher.module.scss'

type Props = {
  setIsModalActive: (active: boolean) => void
}

export const LanguageSwitcher: React.FC<Props> = ({setIsModalActive}) => {
  const {setLocale} = useContext(LocaleContext)

  const handleLanguageChange = (newLocale: 'en' | 'ru') => {
    setLocale(newLocale)
    setIsModalActive(false)
  }

  return (
    <div className={s.switcherContainer}>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('ru')}
      >
        RU
      </button>
    </div>
  )
}