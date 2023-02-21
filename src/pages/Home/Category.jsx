import React from 'react'
import { useState } from 'react';
import categories from '../../data/productCategory.json'

const Category = () => {
  const {productsCategories} = categories;
  const [showSubItems, setShowSubItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [category, setCategory] = useState({});
  const [subType, setSubType] = useState(0);

  const handleSubItems = (id) => {
    if(selectedItem === id) {
      setSelectedItem('');
      setShowSubItems(false);
      setCategory({});
    } else {
      setSelectedItem(id);
      setShowSubItems(true);
      setSubType(0);
      fetch('data/subCategories.json')
        .then((r) => r.json())
        .then(({subCategories}) => {
          console.log(subCategories[id]);
          setCategory(subCategories[id]);
        })
    }
  }
  return (
    <section className='mb-4'>
          <main className="max-container pt-2 pt-lg-4 pb-0 pb-lg-2">
              <div className="row m-0">
                <div className="col-12 overflow-auto pb-2">
                  <ul className='list-unstyled d-flex justify-content-between pb-2 m-0' style={{gap:'26px', width:'max-content', minWidth:'100%'}}>
                    {productsCategories.map((category, index) => (
                        <li key={category.id} className={`product-item d-center flex-column pointer ${selectedItem === category.id ? 'gradient-darkPurple' : 'gradient-lightPurple'}`} onClick={() => handleSubItems(category.id)}>
                        <div className="image-wrapper d-center mb-1">
                          <img className='w-75' src={selectedItem === category.id ? category.imgUrlWhite : category.imgUrl} alt={category.imgAlt} />
                        </div>
                        <span className={`fs-14 ${selectedItem === category.id ? 'white' : 'violaPurple'}`}>{category.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {showSubItems && <div className="row m-0 mt-4" >
                  <div className="col-12">
                      <div className="border-kangaroo h-100 rounded p-5">
                      {/* {category && category.cat} */}

                      <ul className="list-unstyled d-start mb-4">
                        {category && category.subCat && category.subCat.map(subCat => (
                          <li key={subCat.id} style={{minWidth:'100px'}} className={`text-center px-3 py-2 pointer me-2 ${subType === subCat.id ? 'bg-sunsetOrange white bold' : 'bg-mercury'}`} onClick={() => setSubType(subCat.id)}>
                            {subCat.type}
                          </li>
                        ))}
                      </ul>

                      <div className="subCat-wrapper">
                        {category && category.subCat && category.subCat[subType] && category.subCat[subType].items.map(item => (
                          <div key={item.id} className='position-relative overflow-hidden pointer' style={{boxShadow: '0 0 10px 1px #ccc'}}>
                            <div className="position-absolute rotate-45 bg-white w-100 text-center fs-16 bold violaPurple" style={{top:'20px', right:'-45px'}}>
                              {item.name}
                            </div>
                            <img src={item.imgUrl} alt="" className='w-100 h-100 objectFit-cover'/>
                            {/* <p className='text-center h-25 d-center'>{item.name}</p> */}
                          </div>
                        ))}  
                      </div>

                    </div>
                  </div>
              </div>}
          </main>
    </section>
  )
}

export default Category