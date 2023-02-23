import React from 'react'

import TopSellerRow from './TopSellerRow'

const TopSellers = ({title, showAll}) => {
    return (
        <section className='mb-4 position-relative'>
            <div className="clipped-right-70 position-absolute zIndex-negative"> </div>
            <main className="max-container h-100 py-2 py-lg-4 mt-3 mb-5">
                <div className="row m-0 mb-3">
                    <div className="col-12">
                        <h2 className="mb-3 granite fs-28">
                            {title}
                        </h2>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-12 overflow-auto">
                        <TopSellerRow start={0}  end={2}/>
                        <TopSellerRow start={3}  end={5}/>
                    </div>
                </div>
                <div className={`row m-0 text-end mb-2 ${!showAll && 'd-none'}`}>
                    <div className="col-12">
                        <button className='custom-btn btn-light'>Show all</button>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default TopSellers