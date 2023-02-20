import React, { useState } from 'react'
import AdvFilterBox from '../../components/AdvFilterBox'

const BuyerAdv = () => {
  const [bio, setBio] = useState(false);
  return (
    <form action="" className=''>
      <div className='sellerAdv'>
        <AdvFilterBox title= 'Main Category'/>
        <AdvFilterBox title= 'Type'/>
        <AdvFilterBox title= 'Quantity'/>
        <AdvFilterBox title= 'Country'/>
        <div className="">
          <label htmlFor="bio" className={`h-100 d-center pointer border-thistle py-3 ${bio ? 'white' : 'violaPurple'} ${bio ? 'bg-violaPurple' : 'bg-white'}`}>
            <span className='me-2'>Bio</span>
            <span className={`${bio ? 'd-inline' : 'd-none'}`}>&#10004;</span>
          </label>
          <input 
            type="checkbox" 
            name="bio" 
            id="bio"
            className='d-none' 
            onChange={(e) => setBio(e.target.checked)} />
        </div>
      </div>
      {/* <div className="d-end my-5">
        <label htmlFor="bio" className={`bio-label d-center pointer border-thistle ${bio ? 'white' : 'violaPurple'} ${bio ? 'bg-violaPurple' : 'bg-white'}`}>
          <span className='me-2'>Bio</span>
          <span className={`${bio ? 'd-inline' : 'd-none'}`}>&#10004;</span>
        </label>
        <input 
          type="checkbox" 
          name="bio" 
          id="bio"
          className='d-none' 
          onChange={(e) => setBio(e.target.checked)} />
      </div> */}

      
      
      <div className='text-end mt-5'>
        <button className='custom-btn btn-rosyPink-fill px-5'>Send</button>
      </div>
    </form>
  )
}

export default BuyerAdv