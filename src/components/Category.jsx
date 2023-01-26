import React from 'react'
import categories from '../data/productCategory.json'

const Category = () => {

    const {productsCategories} = categories;
  return (
    <section className='mb-4'>
          <main className="max-container pt-2 pt-lg-4 pb-0 pb-lg-2">
              <div className="row m-0">
                <div className="col-12 overflow-auto">
                  <ul className='list-unstyled d-flex justify-content-between pb-2 m-0' style={{gap:'26px', width:'max-content', minWidth:'100%'}}>
                    {productsCategories.map(category => (
                        <li key={category.id} className='product-item d-center flex-column pointer'>
                        <div className="image-wrapper d-center mb-1">
                          <img className='w-75' src={category.imgUrl} alt={category.imgAlt} />
                        </div>
                        <span className='fs-14 violaPurple'>{category.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </main>
    </section>
  )
}

export default Category