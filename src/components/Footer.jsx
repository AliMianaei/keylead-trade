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
                <div className="col-12 col-sm-6 col-lg-3 order-1 order-lg-0 d-flex flex-column justify-content-lg-start mb-3 mb-sm-0">
                    <div className='width-max-content mb-4 mx-auto mx-sm-0'>
                        <h1 className='text-uppercase text-center mb-0 violaPurple fs-44'>Keylead</h1>
                        <h3 className='borderTop-darkPurple darkPurple mb-4 fs-22'>Food Products Exchange</h3>  
                        <div className="pt-3">
                            <Link to='/advertise' className='d-flex text-decoration-none round-50'>
                                <button className='custom-btn btn-rosyPink-fill w-100'>Add an advertisement</button>
                            </Link>  
                        </div>  
                    </div>
                    <div className="mt-2 mb-3">
                        <h4 className='violaPurple fs-20 mb-3 text-sm-start text-center'>Follow us on</h4>
                        <ul className='d-flex flex-wrap list-unstyled mb-0 gap-4 justify-content-center justify-content-sm-start'>
                            <li className='qube-2half'> 
                                <a href="http://instagram.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/instagram@2x.png" alt="Keylead instagram" />
                                </a> 
                            </li>

                            <li className='qube-2half'> 
                                <a href="http://facebook.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/facebook@2x.png" alt="Keylead facebook" />
                                </a> 
                            </li>


                            <li className='qube-2half'> 
                                <a href="http://linkedin.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/linkedin@2x.png" alt="Keylead linkedin" />
                                </a> 
                            </li>

                            <li className='qube-2half'> 
                                <a href="http://telegram.com" className='w-100 h-100 d-inline-block'>
                                    <img className='w-100 h-100' src="/images/icons-social/telegram@2x.png" alt="Keylead telegram" />
                                </a> 
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-12 col-lg-6 order-0 order-lg-1 mt-lg-5 mb-5 mb-lg-0">
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
                        <div className="col-6 col-md-3 mb-3 mb-md-0 text-center text-sm-start">
                            <h5 className='rosyPink'>Events</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0 text-center text-sm-start">
                            <h5 className='rosyPink'>Privacy Policy</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0 text-center text-sm-start">
                            <h5 className='rosyPink'>B2B Solution</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p></div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0 text-center text-sm-start">
                            <h5 className='rosyPink'>Statistic</h5>
                            <p className='mb-0'>Trade Shows</p>
                            <p className='mb-0'>Conferences</p></div>
                    </div>
                </div>  

                <div className="col-12 col-sm-6 col-lg-3 order-3 mt-lg-5 d-flex flex-column ps-xl-5 mb-3">
                    <h3 className='violaPurple fs-22 mb-3'>We are here to help you!</h3>
                    <p className="mb-0 violaPurple" style={{overflowY:'auto', maxHeight:'250px'}}>Leverage our Comprehensive Keylead database to power your performance with data analysis, insight and Comprehensive</p>
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