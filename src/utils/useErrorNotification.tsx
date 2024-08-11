import {ResponseWeatherError} from '../services'
import {ErrorsData} from '../locale-data'
import {LocaleContext} from './LocaleContext'
import {useContext} from 'react'

export const UseErrorHandler = (error: unknown): string | null => {
  const {locale} = useContext(LocaleContext)

  if (error) {
    let errorMessage = 'An error occurred while fetching the weather locale-data.'
    if (
      typeof error === 'object' &&
      'data' in error &&
      typeof error.data === 'object' &&
      error.data !== null &&
      'cod' in error.data
    ) {
      const errorData = error.data as ResponseWeatherError
      if (errorData.cod === '404') {
        errorMessage = ErrorsData[locale].mistake
      } else if (errorData.cod === '400') {
        errorMessage = ErrorsData[locale].location
      } else {
        errorMessage = ErrorsData[locale].try
      }
    }
    return errorMessage
  }
  return null
}