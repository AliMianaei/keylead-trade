import React from 'react'
import Searchbar from './Searchbar'

const Footer = () => {
  return (
    <section className='position-relative'>
            <div className="polygon-footer-quillGrey-9 position-absolute w-100 h-100 zIndex-negative"></div>
            <div className="polygon-footer-pearl position-absolute w-100 h-100 zIndex-negative"></div>
            <div className="polygon-footer-mercury position-absolute w-100 h-100 zIndex-negative"></div>
            
            <main className="max-container pt-4">
                <div className="row m-0 my-4">
                    <div className="col-12 col-sm-6 col-lg-3 order-1 order-lg-0 text-center d-center flex-column justify-content-lg-start">
                        <h1 className='text-uppercase mb-0 violaPurple fs-44'>Keylead</h1>
                        <h3 className='borderTop-darkPurple darkPurple d-inline fs-22'>Food Products Exchange</h3>    
                    </div>


                    <div className="col-12 col-lg-6 order-0 order-lg-1 mt-lg-5">
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
                            <div className="col-3">
                                <h5 className='rosyPink'>Events</h5>
                                <p className='mb-0'>Trade Shows</p>
                                <p className='mb-0'>Conferences</p>
                            </div>
                            <div className="col-3">
                                <h5 className='rosyPink'>Privacy Policy</h5>
                                <p className='mb-0'>Trade Shows</p>
                                <p className='mb-0'>Conferences</p>
                            </div>
                            <div className="col-3">
                                <h5 className='rosyPink'>B2B Solution</h5>
                                <p className='mb-0'>Trade Shows</p>
                                <p className='mb-0'>Conferences</p></div>
                            <div className="col-3">
                                <h5 className='rosyPink'>Statistic</h5>
                                <p className='mb-0'>Trade Shows</p>
                                <p className='mb-0'>Conferences</p></div>
                        </div>
                    </div>   
                    <div className="col-12 col-sm-6 col-lg-3 order-3 mt-lg-5"></div>   
                </div>


                <div className="row m-0">
                    <div className="col-12 d-center py-3"
                    >  
                    Copyright © 2022-2023 <span className='violaPurple bold px-1 pointer'> KEYLEAD </span> Holding
                    </div>   
                </div>
            </main>
        </section>
  )
}

export default Footer