import React from 'react'
import { Link } from 'react-router-dom';
import Select from 'react-select'
import Logo from './Logo';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import SelectCurrency from './SelectCurrency';
import SelectLanguage from './SelectLanguage';
import { select_style_lang  } from './selectStyle'


const Header = () => {
  return (
    <section className='w-100 zIndex-max bg-white'>
        <main className='max-container'>
            <div className="row m-0 py-2 mb-2">
                <div className="col-6">
                    <Logo/>
                </div>
                <div className='col-6 d-end gap-3'>
                    <div className="d-flex gap-3">
                        <SelectCurrency/>
                        <SelectLanguage/>
                    </div>

                    <div className='d-none d-md-block'>
                        <Link to='/advertise' className='d-center text-decoration-none round-50'>
                            <button className='custom-btn btn-violaPurple-fill'>Add an advertisement</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 col-lg-5 mb-2">
                    <Searchbar/>
                </div>
                <div className="py-2 col-12 col-lg-7 d-flex justify-content-start justify-content-lg-end" style={{overflowX: 'auto'}}>
                    <Navbar/>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Header;