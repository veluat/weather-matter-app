import s from '../language-switcher/LanguageSwitcher.module.scss'
import {setDegrees} from '../../../services/weather-service/model/degreesSlice'
import {useAppDispatch} from '../../../hooks'
import {Icon} from '../icon'


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
        <Icon sprId={'metric'} width={50} height={50} />
      </button>
      <button
        className={s.switcherBtn}
        onClick={() => handleLanguageChange('imperial')}
      >
        <Icon sprId={'imperial'} width={50} height={50} viewBox={'0 0 24 24'}/>
      </button>
    </div>
  )
}