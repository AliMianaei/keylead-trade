import React from 'react'
import Rating from 'react-rating'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import topSell from '../data/topSellers.json'

const TopSellerRow = ({start, end}) => {
    const {topSellers} = topSell;
  return (
    <ul className='list-unstyled d-flex justify-content-between m-0 pb-4 pb-xxl-5' style={{gap:'20px', width:'max-content', minWidth:'100%'}}>                           
        {topSellers.map((seller, index) => {
            return index >= start && index <= end && (
                <li key={seller.id} className='top-seller-item border-kangaroo-half p-3 d-center bg-white' style={{width: '370px'}}>
                    <div className="h-100 overflow-hidden" style={{width:'140px'}}>
                        <img className='w-100 h-100 objectFit-cover transition-3' src={seller.imgUrl} alt={seller.imgAlt} />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 ms-3">
                        <h5 className='violaPurple mb-3 fs-18'>{seller.productName}</h5>
                        <div className='d-between mb-2'>
                            {seller.stock ?
                                <i className="fa fa-check-square-o fa-lg elfGreen" aria-hidden="true"></i> 
                                :
                                <i className="fa fa-window-close-o fa-lg rubyRed" aria-hidden="true"></i>
                            }
                            <div className='' style={{width:'30px', height:'30px'}}>
                                <CircularProgressbar
                                    value={seller.percentage}
                                    text={`${seller.percentage}%`}
                                    styles={buildStyles({textSize: '32px', pathColor: '#FF5B55', textColor: '#FF5B55', trailColor:'#E0E3EC', })}
                                />
                            </div>
                            <Rating 
                                readonly
                                initialRating={seller.starRate}
                                emptySymbol = {<i className="fa fa-star-o fa-lg" style={{color:'#ccc'}} aria-hidden="true"></i>}
                                fullSymbol={<i className="fa fa-star fa-lg" style={{color:'#FFAA00'}} aria-hidden="true"></i>}
                            />
                        </div>
                        <ul className="list-unstyled d-flex flex-column flex-grow-1 smokeyGrey fs-12">
                            <li className="d-between mb-2">
                                <span className="">Price</span>
                                <span className="">{seller.price} $/kg</span>
                            </li>
                            <li className="d-between mb-2">
                                <span className="">Quantity</span>
                                <span className="">{seller.minQuantity}-5{seller.maxQuantity} T</span>
                            </li>
                            <li className="d-between mb-2">
                                <span className="">Origin</span>
                                <span className="text-uppercase">{seller.country}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            )
        })}
    </ul>
  )
}

export default TopSellerRow