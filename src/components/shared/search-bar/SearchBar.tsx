import React, {useState} from 'react'
import s from './SearchBar.module.scss'
import search_icon from '../../../assets/search.png'

type Props = {
  handleInputChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchBar: React.FC<Props> = ({handleInputChange, handleSearch, onKeyDown}) => {
  const [value, setValue] = useState<string>('');

  const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleInputChange(e);
  };
  const handleKeyDownOnContainer = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.target instanceof HTMLInputElement) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
      }
      onKeyDown(e);
    }
  };
  return (
    <div className={s.topBar}>
      <input
        type='text'
        className={s.cityInput}
        value={value}
        onChange={inputValueHandler}
        onKeyDown={handleKeyDownOnContainer}
      />
      <button className={s.searchIcon} onClick={handleSearch}>
        <img src={search_icon} alt='search' className={s.img}/>
      </button>
    </div>
  )
}