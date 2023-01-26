import React from 'react'

const Navbar = () => {
  return (
    <ul className='list-unstyled d-flex  m-0 flex-nowrap text-center' style={{gap:'20px'}}>
        <li className='py-1 pe-2 pointer' style={{minWidth:'max-content'}}>Products</li>
        <li className='py-1 px-2 pointer' style={{minWidth:'max-content'}}>Services</li>
        <li className='py-1 px-2 pointer' style={{minWidth:'max-content'}}>Blog</li>
        <li className='py-1 px-2 pointer' style={{minWidth:'max-content'}}>About us</li>
        <li className='py-1 px-2 pointer' style={{minWidth:'max-content'}}>Contact us</li>
        <li className='py-1 ps-2 pointer' style={{minWidth:'max-content', whiteSpace: 'nowrap'}}>Login / Register</li>
    </ul>
  )
}

export default Navbar