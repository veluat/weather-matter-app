import clear_icon from '../assets/weather/clear.png'
import cloud_icon from '../assets/weather/cloud.png'
import drizzle_icon from '../assets/weather/drizzle.png'
import rain_icon from '../assets/weather/rain.png'
import snow_icon from '../assets/weather/snow.png'

type Props = {
  icon: string
}

export const useWeatherIconSrc = ({ icon }: Props): string => {
  let weatherIconSrc: string;
  switch (icon) {
    case '01d':
    case '01n':
      weatherIconSrc = clear_icon;
      break;
    case '02d':
    case '02n':
      weatherIconSrc = cloud_icon;
      break;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      weatherIconSrc = drizzle_icon;
      break;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      weatherIconSrc = rain_icon;
      break;
    case '13d':
    case '13n':
      weatherIconSrc = snow_icon;
      break;
    default:
      weatherIconSrc = clear_icon;
  }
  return weatherIconSrc;
};