import React from 'react'

const TopNews = () => {
  return (
    <section className='mb-4 position-relative'>
        <div className="polygon-news-harp position-absolute w-100 h-100 zIndex-negative"></div>
        <div className="polygon-news-ghost position-absolute w-100 h-100 zIndex-negative"></div>
        <main className="max-container py-5">
            <div className="row m-0">
                <div className="col-12"> <h2 className='granite fs-28'>{`${'Article & News'}`}</h2> </div>

                <div className="col-12 col-md-4 py-4">
                    <div className='shadow-Y3-S10-black3 bg-white m-auto m-md-0 me-md-auto p-4' style={{maxWidth:'325px'}}>
                        <div className="m-auto objectFit-cover mb-3" style={{maxWidth:'211px'}}>
                            <img className='d-block w-100 '  src="/images/products/orange_old@2x.png" alt="" />
                        </div>
                        <h3 className='violaPurple mb-3 text-center'>B2B Sales Strategies</h3>
                        <p className='text-3-line'>The Future of B2B Customer Solutions in a Post- COVID-19 Economy: Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy</p>
                        <div className="d-end">
                            <span className='pointer rosyPink bold'>Read more</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 py-4">
                    <div className='shadow-Y3-S10-black3 bg-white m-auto p-4' style={{maxWidth:'325px'}}>
                        <div className="m-auto objectFit-cover mb-3" style={{maxWidth:'211px'}}>
                            <img className='d-block w-100 '  src="/images/products/tomato_old@2x.png" alt="" />
                        </div>
                        <h3 className='violaPurple mb-3 text-center'>B2B Sales Strategies</h3>
                        <p className='text-3-line'>The Future of B2B Customer Solutions in a Post- COVID-19 Economy: Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy</p>
                        <div className="d-end">
                            <span className='pointer rosyPink bold'>Read more</span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 py-4">
                    <div className='shadow-Y3-S10-black3 bg-white m-auto m-md-0 ms-md-auto p-4' style={{maxWidth:'325px'}}>
                        <div className="m-auto objectFit-cover mb-3" style={{maxWidth:'211px'}}>
                            <img className='d-block w-100 '  src="/images/products/orange_old@2x.png" alt="" />
                        </div>
                        <h3 className='violaPurple mb-3 text-center'>B2B Sales Strategies</h3>
                        <p className='text-3-line'>The Future of B2B Customer Solutions in a Post- COVID-19 Economy: Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy Customer Solutions in a Post- COVID-19 Economy</p>
                        <div className="d-end">
                            <span className='pointer rosyPink bold'>Read more</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default TopNews