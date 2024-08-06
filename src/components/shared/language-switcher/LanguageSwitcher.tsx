import {useContext} from 'react'
import {LocaleContext} from '../../../utils'
import s from './LanguageSwitcher.module.scss'
import {Icon} from '../icon'

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
        <Icon sprId={'en'} width={50} height={50} />
      </button>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('ru')}
      >
        <Icon sprId={'ru'} width={50} height={50} />
      </button>
    </div>
  )
}