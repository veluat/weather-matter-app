import React from 'react'
import s from './LoadingIndicator.module.scss'

export const LoadingIndicator = () => {
  return <div className={s.loader}>
    <span>L</span>
    <span>o</span>
    <span>a</span>
    <span>d</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
  </div>
}