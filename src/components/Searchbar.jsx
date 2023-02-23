import React from 'react'
import { useState } from 'react'
import Rating from 'react-rating';
import SearchbarItems from './SearchbarItems';

const Searchbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  return (
    <div className='position-relative h-100'>
      <div className="searchbar h-100 d-flex overflow-hidden">
          <input type="search" name="" id="" placeholder='Search products' className='searchBox d-block h-100 flex-grow-1 px-2 px-sm-3' 
            onFocus={() => setSearchActive(true)} 
            onBlur={() => setSearchActive(false)} 
          />
          <span className='d-center bg-harp p-1 pointer' style={{width:'55px'}}>
              <img className='w-50' src="/images/icons/search@2x.png" alt="search icon" />
          </span>
      </div>
      <div className={`position-absolute w-100 zIndex-1 py-2 ${searchActive ? 'd-block' : 'd-none'}`}>
        <div className="searchbar-result-list border-kangaroo bg-white h-100" style={{borderRadius: '2px', overflowY: 'auto', maxHeight:'300px'}}>
          <ul className='mb-0 list-unstyled'>
            <SearchbarItems/>
            <SearchbarItems/>
            <SearchbarItems/>
            <SearchbarItems/>
            <SearchbarItems/>
            <SearchbarItems/>
            <SearchbarItems/>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Searchbar