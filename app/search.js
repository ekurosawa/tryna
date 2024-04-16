import React from 'react';
import './search.css';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <div className="search">
            <div className='search__bar'>
                <SearchIcon />
                <input
                    className="search__bar__input"
                    placeholder="Search"
                />
            </div>
        </div>
      )
 }

 export default Search;
