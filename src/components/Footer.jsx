import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Footer = () => {
  return (
    <section className='position-relative'>
        <div className="polygon-footer-quillGrey-9 position-absolute w-100 h-100 zIndex-negative"></div>
        <div className="polygon-footer-pearl position-absolute w-100 h-100 zIndex-negative"></div>
        <div className="polygon-footer-mercury position-absolute w-100 h-100 zIndex-negative"></div>
        
        <main className="max-container pt-4">
            <div className="row m-0 mt-4">
                <div className="col-12 col-sm-6 col-lg-3 order-1 order-lg-0 text-center d-center flex-column justify-content-lg-start mb-3 mb-sm-0">
                    <h1 className='text-uppercase mb-0 violaPurple fs-44'>Keylead</h1>
                    <h3 className='borderTop-darkPurple darkPurple d-inline fs-22'>Food Products Exchange</h3>    
                </div>

                <div className="col-12 col-lg-6 order-0 order-lg-1 mt-lg-5 mb-5">
                    <ul className="list-unstyled d-between justify-content-start justify-content-md-between flex-wrap fs-18 violaPurple" style={{gap:'20px', alignContent:'flex-start'}}>
                        <li className=" pointer">Products</li>
                        <li className=" pointer">Services</li>
                        <li className=" pointer">Blog</li>
                        <li className=" pointer">About us</li>
                        <li className=" pointer">Contact us</li>
                        <li className=" pointer">Login / Register</li>
                    </ul>
                    <div className='my-5' style={{height:'50px'}}>
                        <Searchbar/>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <h5 className='rosyPink'>Events</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <h5 className='rosyPink'>Privacy Policy</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <h5 className='rosyPink'>B2B Solution</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p></div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <h5 className='rosyPink'>Statistic</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p></div>
                    </div>
                </div>  

                <div className="col-12 col-sm-6 col-lg-3 order-3 mt-lg-5 d-flex flex-column ps-xl-5 align-items-center">
                    <h3 className='violaPurple fs-22 mb-4'>We are here to help you!</h3>
                    <Link to='/advertise' className='d-flex text-decoration-none round-50 mb-4'>
                        <button className='custom-btn btn-violaPurple-fill'>Add an advertisement</button>
                    </Link>
                    <div className="mt-auto">
                        <h4 className='violaPurple fs-20 mb-3'>Follow us on</h4>
                        <ul className='d-flex flex-wrap list-unstyled mb-0' style={{gap:'30px'}}>
                            <li style={{width:'40px', height:'40px'}}> 
                                <a href="http://instagram.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/instagram@2x.png" alt="Keylead instagram" />
                                </a> 
                            </li>

                            <li style={{width:'40px', height:'40px'}}> 
                                <a href="http://facebook.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/facebook@2x.png" alt="Keylead facebook" />
                                </a> 
                            </li>


                            <li style={{width:'40px', height:'40px'}}> 
                                <a href="http://linkedin.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/linkedin@2x.png" alt="Keylead linkedin" />
                                </a> 
                            </li>

                            <li style={{width:'40px', height:'40px'}}> 
                                <a href="http://telegram.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/telegram@2x.png" alt="Keylead telegram" />
                                </a> 
                            </li>
                        </ul>
                    </div>
                </div>   
            </div>

            <div className="row m-0">
                <div className="col-12 text-center py-4" >Copyright © 2022-2023<span className='violaPurple bold pointer'> KEYLEAD </span>Holding</div>   
                {/* <div className="col-12 d-center py-4" >Copyright © 2022-2023 KEYLEAD Holding</div>    */}
            </div>

        </main>
    </section>
  )
}

export default Footer