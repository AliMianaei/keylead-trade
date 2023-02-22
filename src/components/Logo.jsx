import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/' className='width-max-content d-block text-decoration-none'>
        <h1 className='text-uppercase violaPurple mb-0 px-3' style={{borderBottom:'2px solid #6E467B'}}>keylead</h1>
        <p className='mb-0 darkPurple'>Food Products Exchange</p>
    </Link>
  )
}

export default Logo