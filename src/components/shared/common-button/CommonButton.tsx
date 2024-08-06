import React from 'react'
import s from './CommonButton.module.scss'
import {Icon} from '../icon'

type CommonButtonType = {
  handleButtonClick: (value: string) => void
  title: string
  size?: 'small'
  width?: number
  height?: number
  viewBox?: string
  sprId?: string
}

export const CommonButton: React.FC<CommonButtonType> = ({
                                                           handleButtonClick,
                                                           title,
                                                           size,
                                                           width,
                                                           height,
                                                           viewBox,
                                                           sprId
                                                         }) => {

  return (
    <>
      <button className={size ? s.small : s.root} onClick={() => handleButtonClick('current')}>
        <div className={s.flex}>
          {!size && <Icon width={width} height={height} sprId={sprId} viewBox={viewBox}/>}
          {title}
        </div>
      </button>
    </>
  )
}