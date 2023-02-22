import React from 'react'
import Rating from 'react-rating'

const SearchbarItems = () => {
  return (
    <li className='searchbar-result-item p-2 d-flex align-items-center pointer' style={{gap:'10px', borderBottom:'0.5px solid gray'}}>
              <img className='bg-carouselPink border-kangaroo objectFit-cover' style={{width:'50px', height:'50px'}} src="/images/products/tomato_old@2x.png" alt="" />
              <div className="flex-grow-1 overflow-hidden">
                <div className="d-between align-items-center">
                  <h4 className='violaPurple text-capitalize fs-18 bold mb-0'>tomato</h4>
                  <Rating 
                      readonly
                      initialRating={4}
                      emptySymbol = {<i className="fa fa-star-o" style={{color:'#ccc'}} aria-hidden="true"></i>}
                      fullSymbol={<i className="fa fa-star" style={{color:'#FFAA00'}} aria-hidden="true"></i>}
                  />
                </div>


                <div className="d-between">
                    <div className="d-flex py-1 me-3" style={{gap:'15px', overflowX:'auto'}}>
                        <div className="fs-14 minWidth-max-content">
                            <i className="fa fa-shopping-bag me-1 violaPurple" aria-hidden="true"></i>
                            <span className='text-capitalize'>fuji</span>
                        </div>
                        <div className="fs-14 minWidth-max-content">
                            <i className="fa fa-money me-1 violaPurple" aria-hidden="true"></i>
                            <span>0.80 $/kg</span>
                        </div>
                        <div className="fs-14 minWidth-max-content">
                            <i className="fa fa-balance-scale me-1 violaPurple" aria-hidden="true"></i>
                            <span>1-10 T</span>
                        </div>
                        <div className="fs-14 minWidth-max-content">
                            <i className="fa fa-map-marker me-1 violaPurple" aria-hidden="true"></i>
                            <span>Italy </span>
                        </div> 
                    </div>
                    <div className="fs-14 minWidth-max-content ms-auto text-success bold">
                        <i className="fa fa-check-square-o me-1" aria-hidden="true"></i>
                        <span className='text-capitalize'>verified</span>
                    </div>
                </div>
                
              </div> 
            </li>
  )
}

export default SearchbarItems