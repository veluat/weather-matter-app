import React, {useState} from 'react'
import s from './SearchBar.module.scss'
import search_icon from '../../../assets/search.png'

type Props = {
  handleSearch: (value: string) => void;
};

export const SearchBar: React.FC<Props> = ({
                                             handleSearch,
                                           }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(inputValue)
    }
  }

  const handleSearchClick = () => {
    handleSearch(inputValue)
  }

  return (
    <div className={s.topBar}>
      <input
        type='text'
        className={s.cityInput}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className={s.searchIcon} onClick={handleSearchClick}>
        <img src={search_icon} alt='search' className={s.img}/>
      </button>
    </div>
  )
}