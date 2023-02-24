import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='d-flex flex-nowrap gap-3 list-unstyled m-0'>
        <li className='minWidth-max-content'> <Link to='/products' className="nav-link d-center text-decoration-none haiti p-1 h-100">Products</Link> </li>
        <li className='minWidth-max-content'> <Link to='/products' className="nav-link d-center text-decoration-none haiti p-1 h-100">Services</Link> </li>
        <li className='minWidth-max-content'> <Link to='/products' className="nav-link d-center text-decoration-none haiti p-1 h-100">Blog</Link> </li>
        <li className='minWidth-max-content'> <Link to='/products' className="nav-link d-center text-decoration-none haiti p-1 h-100">About us</Link> </li>
        <li className='minWidth-max-content'> <Link to='/products' className="nav-link d-center text-decoration-none haiti p-1 h-100">Contact us</Link> </li>
        <li className='minWidth-max-content'> <Link to='/login' className="nav-link d-center text-decoration-none p-1 h-100 bold text-success">Login / Register</Link> </li>
        {/* <li className='minWidth-max-content'> 
            <Link to='/products' className="nav-link d-center text-decoration-none haiti h-100 round-50">
              <button className='custom-btn btn-rosyPink-fill'>Login / Register</button>
            </Link>
        </li> */}
    </ul>
  )
}

export default Navbar