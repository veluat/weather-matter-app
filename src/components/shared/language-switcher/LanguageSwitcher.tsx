import {useContext} from 'react'
import {LocaleContext} from '../../../utils'
import s from './LanguageSwitcher.module.scss'

export const LanguageSwitcher = () => {
  const { setLocale } = useContext(LocaleContext);

  const handleLanguageChange = (newLocale: 'en' | 'ru') => {
    setLocale(newLocale);
  };

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