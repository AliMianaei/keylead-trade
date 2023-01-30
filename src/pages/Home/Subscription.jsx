import React from 'react'

const Subscription = () => {
  return (
    <section className='mb-4'>
        <main className="max-container py-4">
            <div className="row m-0 mb-5 text-center">
                <div className="col-12"> <h4 className="violaPurple bold fs-24 mb-0">Need more results?</h4> </div>
                <div className="col-12"> <p className="violaPurple fs-22">Sign up for free or try Premium</p> </div>
                <div className="col-12 d-center"> 
                    <div className="overflow-hidden pointer" style={{width:'250px', height:'200px'}}>
                        <img className='w-100 h-100' src="/images/textbg/textbg-left-text@2x.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12"> <h2 className='granite fs-28'>Subscription Packages</h2> </div>
                <div className="col-12 py-4 overflow-auto">
                    <ul className='d-flex justify-content-between list-unstyled p-0 mb-0 w-100 minWidth-max-content' style={{gap:'35px'}}>
                        <li className='subscription-item shadow-Y3-S10-black3 position-relative' style={{width:'260px', height:'360px'}}>
                            <div className='subscription-polygon polygon-sub-free position-absolute zIndex-negative'></div>
                            <div className="p-3 h-100">
                                <h4 className='white fs-32'>Free</h4>
                            </div>
                        </li>

                        <li className='subscription-item shadow-Y3-S10-black3 position-relative' style={{width:'260px', height:'360px'}}>
                            <div className='subscription-polygon polygon-sub-silver position-absolute zIndex-negative'></div>
                            <div className="p-3 h-100">
                                <h4 className='white fs-32'>Silver</h4>
                            </div>
                        </li>

                        <li className='subscription-item shadow-Y3-S10-black3 position-relative' style={{width:'260px', height:'360px'}}>
                            <div className='subscription-polygon polygon-sub-gold position-absolute zIndex-negative'></div>
                            <div className="p-3 h-100">
                                <h4 className='white fs-32'>Gold</h4>
                            </div>
                        </li>

                        <li className='subscription-item shadow-Y3-S10-black3 position-relative' style={{width:'260px', height:'360px'}}>
                            <div className='subscription-polygon polygon-sub-platinum position-absolute zIndex-negative'></div>
                            <div className="p-3 h-100">
                                <h4 className='white fs-32'>Platinum</h4>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Subscription