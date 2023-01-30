import React from 'react'
import topProd from '../../data/topProducts.json'

const TopProducts = () => {
    const {topProducts} = topProd;

  return (
    <section className='mb-4'>
          <main className="max-container py-2 py-lg-4">
                <div className="row m-0 my-3">
                    <div className="col-12">
                        <h2 className="mb-3 granite fs-28">
                            Top 5 Products of the month
                        </h2>
                    </div>
                </div>
                <div className="row m-0 mb-5">
                    <div className="col-12 overflow-auto">
                        <ul className='list-unstyled d-flex justify-content-between m-0 pb-2' style={{gap:'26px', width:'max-content', minWidth:'100%'}}>
                            {topProducts.map(product => (
                                <li key={product.id} className='top-product text-center bg-white pointer' >
                                    <div className='top-product-image mb-4 position-relative d-center'>
                                        <div className="position-absolute w-100 h-100 d-center" >
                                            <div className='d-flex justify-content-center w-100 fs-16 violaPurple' style={{gap:'15px', backgroundColor:'#FFFFFFCC', padding: '1px 10px'}}>
                                                <div className='d-center'>
                                                    <img className='me-1' style={{width:'24px'}} src={product.imgUrlTran} alt={product.imgAltTran} />
                                                    <span>{product.transaction} Transaction</span>
                                                </div>
                                                <div className='d-center'>
                                                    <img className='me-1' style={{width:'22px'}} src={product.imgUrlKilo} alt={product.imgAltKilo} />
                                                    <span>{product.weight} Tons</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image-holder w-100 h-100 transition-3 d-center p-3">
                                            <img className='mw-100 mh-100' src={product.imgUrl} alt={product.imgAlt} />
                                        </div>
                                    </div>
                                    <span className='smokeyGrey fs-22'>{product.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
          </main>
    </section>
  )
}

export default TopProducts