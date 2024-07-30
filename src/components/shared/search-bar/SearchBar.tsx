import React, {useContext} from 'react'
import s from './SearchBar.module.scss'
import search_icon from '../../../assets/search.png'
import {LocaleContext} from '../../../utils'
import data from './../../../data/ui-common-data/UiCommonData'

type Props = {
  value: string
  handleInputChange: (value: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearch: () => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
export const SearchBar: React.FC<Props> = ({value, handleInputChange, handleSearch, onKeyDown}) => {
  const {locale} = useContext(LocaleContext)

  return (
    <div className={s.topBar}>
      <input
        type='text'
        className={s.cityInput}
        placeholder={data[locale].search}
        value={value}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
      <button className={s.searchIcon} onClick={handleSearch}>
        <img src={search_icon} alt='search' className={s.img}/>
      </button>
    </div>
  )
}