import React from 'react'
import Select from 'react-select'

import Filter from '../../components/Filter'
import FollowUs from '../../components/FollowUs'
import { sort_style } from '../../components/selectStyle'
import TopSellers from '../Home/TopSellers'
import Product from './product'

const sortItems = [
  { value: 'price', label:'price'},
  { value: 'date', label:'date'},
  { value: 'p', label:'p'},
];
const Products = () => {
  return (
    <>
        <section className='mb-4'>
            <main className='max-container h-100 py-2 py-lg-5'>
                <div className="row m-0">
                  <div className="col-12">
                    <Filter/>
                  </div>
                </div>
                <div className='row m-0'>
                    <div className='col-12'>
                        <div className='d-flex align-items-center py-2' style={{ borderBottom: '1px solid gray' }}>
                            <div className='me-3'>
                                <span>156 </span>
                                <span>Result</span>
                            </div>
                            <Select
                                id='sort' 
                                name='sort' 
                                options={sortItems} 
                                isSearchable={false}
                                defaultValue={{ label: 'sort', value: null }} 
                                styles={sort_style}
                            />
                            <img className='ms-auto pointer position-relative' style={{ top: '5px' }} width='126px' height='127px' src="/images/textbg/textbg-circle-text@2x.png" alt="" />
                        </div>
                    </div>
                </div>
                <Product/>
            </main>
        </section>
        <TopSellers title='Similar Products' showAll={false} />
        <FollowUs/>
    </>
  )
}

export default Products
