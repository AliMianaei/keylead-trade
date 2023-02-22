import React from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import Rating from 'react-rating'

import features from '../../data/productFeatures.json';
import adv from '../../data/advertisement.json';

const product = () => {

    const {productFeatures} = features;
    const {advertisement} = adv;
    const checkmark = '✔';

  return (
    <>
        {advertisement.map(adv => (
            <div key={adv.id} className='position-relative'>
                <div className="row m-0 my-5 py-2">
                    <div className="col-12 col-sm-6 col-md-5 col-lg-3" >
                        <div className="">
                            <div className='border-kangaroo mb-4' >
                                <img className='w-100 h-100 objectFit-cover' src={adv.imgUrl ? adv.imgUrl : '/images/default-product-image.png'} alt={adv.name} />
                            </div>
                            <div className='d-between mb-2'>
                                <span className='fs-18'>Verified Seller</span>
                                <img style={{width:'25px', height:'25px'}} src={adv.verified ? '/images/icons/checked-box@2x.png' : '/images/icons/times.png'} alt="" />
                            </div>

                            <div className='d-between mb-2'>
                                <span className='fs-18'>Response rate</span>
                                <div className='' style={{width:'37px', height:'37px'}}>
                                    <CircularProgressbar
                                        value={adv.rate}
                                        text={`${adv.rate}%`}
                                        styles={buildStyles({textSize: '32px', pathColor: '#FF5B55', textColor: '#FF5B55', trailColor:'#E0E3EC', })}
                                    />
                                </div>
                            </div>

                            <div className='d-between mb-2'>
                                <span className='fs-18'>Rating <span className="smokeyGrey fs-16">({adv.review})</span></span>
                                <Rating 
                                    readonly
                                    initialRating={adv.avgReview}
                                    emptySymbol = {<i className="fa fa-star-o fa-lg" style={{color:'#ccc'}} aria-hidden="true"></i>}
                                    fullSymbol={<i className="fa fa-star fa-lg" style={{color:'#FFAA00'}} aria-hidden="true"></i>}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-7 col-lg-9 ps-lg-5">
                        <h3 className='fs-32 violaPurple mb-4 text-capitalize'>{adv.name}</h3>
                        <div className="row m-0">
                            <div className="col-12 col-lg-5 text-capitalize p-0">
                                <ul className='list-unstyled m-0'>
                                    {productFeatures.map((feature, index) => {
                                        return index <= 4 && <li key={feature.id} className='d-between fs-20 py-1'>
                                            <span className='rosyPink'>{feature.title}</span>
                                            <div className='flex-grow-1 px-3'> <div className="" style={{borderBottom:'1px dashed gray'}}></div> </div>
                                            <span className='smokeyGrey'>{adv[feature.title]}</span>
                                        </li> 
                                    })}
                                </ul>
                            </div>
                            <div className='d-none d-lg-block col-2'></div>
                            <div className="col-12 col-lg-5 text-capitalize p-0">
                                <ul className='list-unstyled m-0'>
                                    {productFeatures.map((feature, index) => {
                                        return index > 4 && <li key={feature.id} className='d-between fs-20 py-1'>
                                            <span className='rosyPink'>{feature.title}</span>
                                            <div className='flex-grow-1 px-3'> <div className="" style={{borderBottom:'1px dashed gray'}}></div> </div>
                                            <span className='smokeyGrey'>{adv[feature.title] === true ? 'yes' : adv[feature.title] === false ? 'no' : adv[feature.title]}</span>
                                        </li> 
                                    })}
                                </ul>
                            </div>
                        </div>
                        <p className="my-4 product-description">{adv.description}</p>
                        <div className="text-end">
                            <button className='custom-btn btn-rosyPink-fill px-5'>Contact</button>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-12">
                        <div style={{borderBottom:'1px solid gray'}}></div>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default product