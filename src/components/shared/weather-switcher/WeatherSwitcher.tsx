import s from '../language-switcher/LanguageSwitcher.module.scss'
import {setDegrees} from '../../../services/weather-service/model/degreesSlice'
import {useAppDispatch} from '../../../hooks'
import metric from '../../../assets/weather/metric.svg'
import imperial from './../../../assets/weather/imperial.svg'


export const WeatherSwitcher = () => {
  const dispatch = useAppDispatch()

  const handleLanguageChange = (newDegrees: 'metric' | 'imperial') => {
    dispatch(setDegrees(newDegrees))
  }

  return (
    <div className={s.switcherContainer}>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('metric')}
      >
        <img src={metric} alt={metric}/>
      </button>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('imperial')}
      >
        <img src={imperial} alt={imperial}/>
      </button>
    </div>
  )
}