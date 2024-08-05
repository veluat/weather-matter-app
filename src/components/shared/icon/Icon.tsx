import React from 'react';
import iconSprite from "./../../../assets/sprite/sprite.svg";

type IconProps = {
  width?: number
  height?: number
  viewBox?: string
  sprId? : string
}
export const Icon: React.FC<IconProps> = ({width, height, viewBox = '0 0 24 24', sprId}) => {
  return (
    <svg width={width}
         height={height}
         viewBox={viewBox}
         xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconSprite}#${sprId}`}/>
    </svg>
  )
}