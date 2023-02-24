import React from 'react'
import { Link } from 'react-router-dom'

const Menubar = ({active}) => {
  return (
    <>
        <section className="menubar d-lg-none">
            <Link to='/c' className={`menubar-item ${active === '/c' ? 'active' : 'deactive'}`}>
                <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                <span className='menubar-item-text'>Home</span>
            </Link>
            <Link to='/login' className={`menubar-item ${active === '/login' ? 'active' : 'deactive'}`}>
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                <span className='menubar-item-text'>Profile</span>
            </Link>
            <Link to='/advertise' className={`menubar-item ${active === '/advertise' ? 'active' : 'deactive'}`}>
                <i className="fa fa-plus-square-o fa-2x" aria-hidden="true"></i>
                <span className='menubar-item-text'>Add</span>
            </Link>
            <Link to='/products' className={`menubar-item ${active === '/products' ? 'active' : 'deactive'}`}>
                <i className="fa fa-gift fa-2x" aria-hidden="true"></i>
                <span className='menubar-item-text'>Package</span>
            </Link>
            <Link to='/' className={`menubar-item ${active === '/' ? 'active' : 'deactive'}`}>
                <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                <span className='menubar-item-text'>Chat</span>
            </Link>
        </section>
        <div style={{height: '60px'}} className="d-block d-lg-none"></div>
    </>
  )
}

export default Menubar