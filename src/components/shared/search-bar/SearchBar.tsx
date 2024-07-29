import React from 'react'
import s from './SearchBar.module.scss'
import search_icon from '../../../assets/search.png'

type Props = {
  value: string
  handleInputChange: (value: React.ChangeEvent<HTMLInputElement>) => void,
  handleSearch: () => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
export const SearchBar: React.FC<Props> = ({value, handleInputChange, handleSearch, onKeyDown}) => {
  return (
    <div className={s.topBar}>
      <input
        type='text'
        className={s.cityInput}
        placeholder='Search'
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