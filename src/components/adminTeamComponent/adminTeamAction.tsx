import React from "react";
import SearchIcon from '../../images/search.svg';

interface IProps{
  handleFilter: (searchValue:any) => void;
  handleOpenTeamPopup: () => void;
}

export default function AdminTeamAction(props:IProps) {
  const [searchValue, setSearchValue ] = React.useState('');

  const changeValue = (e:any) => {
    const value = e.target.value;
    setSearchValue(value);
  }

  const handleSearch = () =>{
    props.handleFilter(searchValue)
  }

  return (
      <div className="admin__teamAction">
        <button className="admin__actionButton" onClick={props.handleOpenTeamPopup}>Додати</button>
        <div className="adminSearch">
            <input onChange={changeValue} className="searchInput" placeholder="Введіть ім'я"/>
            <button onClick={handleSearch} className="searchButton">Пошук <img src={SearchIcon} alt="search" /></button>
        </div>
      </div>
  )
}