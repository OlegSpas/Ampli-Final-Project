import React from "react";
import SearchIcon from '../../images/search.svg';

interface IProps{
  handleFilter: (searchValue:any) => void;
  handleOpenBlogPopup: () => void;
}

export default function AdminBlogAction(props:IProps) {
  const [searchValue, setSearchValue ] = React.useState('');

  const changeValue = (e:any) => {
    const value = e.target.value;
    setSearchValue(value);
  }

  const handleSearch = () =>{
    props.handleFilter(searchValue);
  }

  return (
      <div className="admin__blogAction">
        <button onClick={props.handleOpenBlogPopup} className="admin__actionButton">Додати</button>
        <div className="adminSearch">
            <input onChange={changeValue} className="searchInput" placeholder="Введіть назву блогу"/>
            <button onClick={handleSearch} className="searchButton">Пошук <img src={SearchIcon} alt="search" /></button>
        </div>
      </div>
  )
}