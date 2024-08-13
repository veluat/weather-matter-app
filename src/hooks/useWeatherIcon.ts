import clear_sky from '../assets/current-weather-img/clear_sky.png'
import few_clouds from '../assets/current-weather-img/few_clouds.png'
import scattered_clouds from '../assets/current-weather-img/scattered_clouds.png'
import overcast_clouds from '../assets/current-weather-img/broken_clouds.png'
import mist from '../assets/current-weather-img/mist.png'
import rain from '../assets/current-weather-img/rain.png'
import shower_rain from '../assets/current-weather-img/shower_rain.png'
import snow from '../assets/current-weather-img/snow.png'
import thunderstorm from '../assets/current-weather-img/thunderstorm.png'

type Props = {
  icon: string
}

export const useWeatherIcon = ({icon}: Props): string => {

  let weatherIconSrc: string
  switch (icon) {
    case '01d':
    case '01n':
      weatherIconSrc = clear_sky
      break
    case '02d':
    case '02n':
      weatherIconSrc = few_clouds
      break
    case '03d':
    case '03n':
      weatherIconSrc = scattered_clouds
      break
    case '04d':
    case '04n':
      weatherIconSrc = overcast_clouds
      break
    case '09d':
      weatherIconSrc = shower_rain
      break
    case '10d':
      weatherIconSrc = rain
      break
    case '11d':
      weatherIconSrc = thunderstorm
      break
    case '13d':
      weatherIconSrc = snow
      break
    case '50d':
      weatherIconSrc = mist
      break
    default:
      weatherIconSrc = few_clouds
  }
  return weatherIconSrc
}