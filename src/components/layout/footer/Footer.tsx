import React, {useContext, useState} from 'react'
import s from './Footer.module.scss'
import {Modal} from '../../shared/modal'
import data from './../../../data/ui-common-data/UiCommonData'
import {LocaleContext} from '../../../utils'

export const Footer = () => {
  const [isModalActive, setIsModalActive] = useState(false)
  const {locale} = useContext(LocaleContext)

  function handlerModalSet() {
    setIsModalActive(!isModalActive)
  }

  return (
    <div className={s.root}>
      <button className={s.feedback} onClick={handlerModalSet}>
        <span>
          {data[locale].feedback}
        </span>
      </button>
      <div className={s.dataSource}>
        {data[locale].footer}
        <a href='https://openweathermap.org/' target='_blank' rel='noreferrer'>OpenWeatherMap</a>
      </div>
      {isModalActive && (
        <Modal
          type={'footer'}
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
        />
      )}
    </div>
  )
}