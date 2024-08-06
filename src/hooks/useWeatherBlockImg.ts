import sunrise_icon from './../assets/current-weather-img/sunrise.png'
import sunset_icon from './../assets/current-weather-img/sunset.png'

type Props = {
  type?: string
}

export const useWeatherBlockImg = ({type}: Props): string => {

  let blockImgSrc: string
  switch (type) {
    case 'sunrise':
      blockImgSrc = sunrise_icon
      break
    case 'sunset':
      blockImgSrc = sunset_icon
      break
    default:
      blockImgSrc = sunrise_icon
  }
  return blockImgSrc
}