import React, {useContext} from 'react'
import {LocaleContext} from '../../../utils'
import s from './LanguageSwitcher.module.scss'
import {Icon} from '../icon'
type Props = {
  setIsModalActive: (active: boolean) => void
}
export const LanguageSwitcher: React.FC<Props> = ({setIsModalActive}) => {
  const { setLocale } = useContext(LocaleContext);

  const handleLanguageChange = (newLocale: 'en' | 'ru') => {
    setLocale(newLocale);
    setIsModalActive(false)
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