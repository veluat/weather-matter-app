import feels_icon from './../assets/feels.svg'
import humidity_icon from './../assets/humidity.png'
import wind_icon from './../assets/wind.png'
import pressure_icon from './../assets/pressure.svg'
import min_icon from './../assets/weather/min-temp.png'
import max_icon from './../assets/weather/max-temp.png'
import sunrise_icon from './../assets/weather/sunrise.svg'
import sunset_icon from './../assets/weather/sunset.svg'


type Props = {
  type: string
}

export const useWeatherBlockImg  = ({ type }: Props): string => {

  let blockImgSrc: string;
  switch (type) {
    case 'feels':
      blockImgSrc = feels_icon;
      break;
    case 'humidity':
      blockImgSrc = humidity_icon;
      break;
    case 'wind':
      blockImgSrc = wind_icon;
      break;
    case 'pressure':
      blockImgSrc = pressure_icon;
      break;
    case 'min':
      blockImgSrc = min_icon;
      break;
    case 'max':
      blockImgSrc = max_icon;
      break;
      case 'sunrise':
      blockImgSrc = sunrise_icon;
      break;
      case 'sunset':
      blockImgSrc = sunset_icon;
      break;
    default:
      blockImgSrc = feels_icon;
  }
  return blockImgSrc;
};