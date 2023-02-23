import React from 'react'

import Filter from '../../components/Filter'
import FollowUs from '../../components/FollowUs'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TopSellers from '../Home/TopSellers'

import Product from './product'



const Products = () => {


  return (
    <>
        <Header/>

        <section className='mb-4'>
            <main className='max-container h-100 py-2 py-lg-5'>
                <div className="row m-0">
                  <div className="col-12">
                    <Filter/>
                  </div>
                </div>
                <div className='row m-0'>
                    <div className='col-12'>
                        <div className='d-flex align-items-center py-2' style={{borderBottom:'1px solid gray'}}>
                            <div className='me-3'>
                                <span>156 </span>
                                <span>Result</span>
                            </div>
                            <select name="" id="" placeholder='Sort by'>
                                <option value="name">Name</option>
                            </select>
                            <img className='ms-auto pointer position-relative' style={{top:'5px'}} width='126px' height='127px' src="/images/textbg/textbg-circle-text@2x.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* PRODUCT */}
                {/* <div className='position-relative'>
                    <div className="row m-0 my-5 py-2">
                        <div className="col-12 col-sm-4 col-lg-3" >
                            <div className="">
                                <img className='w-100 mb-4 objectFit-cover' src="/images/products/tomato_old@2x.png" alt="" />
                                <div className='d-between mb-2'>
                                    <span className='fs-18'>Verified Seller</span>
                                    <img style={{width:'25px', height:'25px'}} src="/images/icons/checked-box@2x.png" alt="" />
                                </div>

                                <div className='d-between mb-2'>
                                    <span className='fs-18'>Response rate</span>
                                    <div className='' style={{width:'37px', height:'37px'}}>
                                        <CircularProgressbar
                                            value='80'
                                            text={`${80}%`}
                                            styles={buildStyles({textSize: '32px', pathColor: '#FF5B55', textColor: '#FF5B55', trailColor:'#E0E3EC', })}
                                        />
                                    </div>
                                </div>

                                <div className='d-between'>
                                    <span className='fs-18'>Rating <span className="smokeyGrey fs-16">(12)</span></span>
                                    <Rating 
                                        readonly
                                        initialRating={3}
                                        emptySymbol = {<i className="fa fa-star-o fa-lg" style={{color:'#ccc'}} aria-hidden="true"></i>}
                                        fullSymbol={<i className="fa fa-star fa-lg" style={{color:'#FFAA00'}} aria-hidden="true"></i>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-8 col-lg-9 ps-0 ps-lg-5">
                            <h3 className='fs-32 violaPurple mb-4'>First Grade Apple</h3>
                            <div className="row m-0">
                                <div className="col-5 p-0">
                                    <ul className='list-unstyled m-0'>
                                        {productFeatures.map((feature, index) => {
                                            return index <= 4 && <li key={feature.id} className='d-between fs-20 py-1'>
                                                <span className='rosyPink'>{feature.title}</span>
                                                <div className='flex-grow-1 px-3'> <div className="" style={{borderBottom:'1px dashed gray'}}></div> </div>
                                                <span className='smokeyGrey'>{feature.value}</span>
                                            </li> 
                                        })}
                                    </ul>
                                </div>
                                <div className='col-2'></div>
                                <div className="col-5 p-0">
                                    <ul className='list-unstyled m-0'>
                                        {productFeatures.map((feature, index) => {
                                            return index > 4 && <li key={feature.id} className='d-between fs-20 py-1'>
                                                <span className='rosyPink'>{feature.title}</span>
                                                <div className='flex-grow-1 px-3'> <div className="" style={{borderBottom:'1px dashed gray'}}></div> </div>
                                                <span className='smokeyGrey'>{feature.value === true ? '✔' : feature.value}</span>
                                            </li> 
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <p className="my-3 product-description" style={{height:'150px', overflowY:'auto'}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, vel fugiat nisi numquam dolor mollitia in? Harum ad, reiciendis corrupti voluptas consequuntur, officia provident ullam quod distinctio totam molestiae omnis.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius enim, a ipsa nulla amet vitae voluptates iste odio natus iusto aperiam expedita? Accusantium laboriosam, quisquam nisi sapiente corporis quibusdam perferendis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate fugiat incidunt tenetur numquam labore veniam consequatur repellat. Aliquid qui accusantium nobis illum voluptas assumenda cumque consequatur, similique asperiores perferendis!
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptatibus exercitationem eos maxime quis possimus ducimus nobis. Iusto reprehenderit dicta amet sit nostrum molestiae magnam vel, deleniti nobis consequuntur aliquam.
                            </p>
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
                </div> */}

                <Product/>


            </main>
        </section>
        <TopSellers title='Similar Products' showAll={false} />
        <div className="mb-5">
          <FollowUs/>
        </div>
        <Footer/>
    </>
  )
}

export default Products