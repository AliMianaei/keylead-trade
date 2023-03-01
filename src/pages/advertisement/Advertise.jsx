import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import FollowUs from '../../components/FollowUs'

const Advertise = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <section className='max-container'>
        <div className="row m-0 mb-5">
          <div className="col-12 granite fs-18">
            <h5 className='fs-18'>Buyer or Seller?</h5>
            <h2 className='rosyPink fs-26 mb-4'>Add an advertisement!</h2>
            <p className='mb-0'><span className='rosyPink fs-22'>*</span> As a seller you can add <span className='rosyPink'>ONE</span> free advertisement just by signing up.</p>
            <p className='mb-0'><span className='rosyPink fs-22'>*</span> As a buyer you can fill the form below, We will help you to reach more suppliers. It always will be <span className='rosyPink'>FREE</span> for you.</p>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-12">
            <div className='mb-2 d-sm-flex' style={{ borderBottom: '1px solid gray' }}>
              <Link to="/advertise/seller" className="text-decoration-none d-inline-block">
                <button className={`custom-btn-rect ${pathname === '/advertise' || pathname === '/advertise/' || pathname === '/advertise/seller' || pathname === '/advertise/seller/' ? 'btn-violaPurple-fill' : 'btn-light'}`}>Seller</button>
              </Link>
              <Link to="/advertise/buyer" className="text-decoration-none d-inline-block">
                <button className={`custom-btn-rect ${pathname === '/advertise/buyer' || pathname === '/advertise/buyer/' ? 'btn-violaPurple-fill' : 'btn-light'}`}>Buyer</button>
              </Link>
              <span className='rosyPink fs-18 ms-auto d-none d-sm-block'>Please fill out all required fields marked with *</span>
            </div>
            <span className='rosyPink fs-18 d-block d-sm-none mb-2'>Please fill out all required fields marked with *</span>
            <div className="my-5">
              <Outlet/>
            </div>
          </div>
        </div>
      </section>
      <FollowUs/>
    </>
  )
}

export default Advertise
