import React from 'react'
import AdvFilterBox from './AdvFilterBox'

const Filter = () => {
  return (
    <form action='' className=''>
        <div className='sellerAdv pb-4' style={{gap:'40px', borderBottom:'1px solid gray'}}>
            <AdvFilterBox title='Main category' />
            <AdvFilterBox title='Type' />
            <AdvFilterBox title='Variety' />
            <AdvFilterBox title='Location' />
            <button className='custom-btn btn-softPurple-fill p-3 fs-18 m-auto m-sm-0 ms-xl-auto align-self-center w-75'>Show filter</button>
        </div>
    </form>
  )
}

export default Filter