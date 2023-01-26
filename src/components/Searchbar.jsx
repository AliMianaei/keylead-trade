import React from 'react'

const Searchbar = () => {
  return (
    <div className="searchbar h-100 d-flex overflow-hidden">
        <input type="search" name="" id=""  className='searchBox d-block h-100 flex-grow-1 px-2 px-sm-3'/>
        <span className='d-center bg-harp p-1 pointer' style={{width:'55px'}}>
            <img className='w-50' src="/images/icons/search@2x.png" alt="search icon" />
        </span>
    </div>
  )
}

export default Searchbar