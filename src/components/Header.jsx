import React from 'react'
import Select from 'react-select'
import Logo from './Logo';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import { select_style_lang  } from './selectStyle'

const languages = [
    {
        value: 'en', 
        label:  <div className='d-flex justify-content-around align-items-center'>
                    <span>EN</span> 
                    <img src='/images/icons/flags/en.png' width='20px'/> 
                </div>
    },
    // {
    //     value: 'it', 
    //     label:  <div className='d-flex justify-content-around align-items-center'>
    //                 <span>IT</span> 
    //                 <img src='/images/icons/flags/it.png' width='20px'/> 
    //             </div>
    // }
];

const Header = () => {
  return (
    <section className='mb-2 mb-lg-4'>
        <main className='max-container'>
            <div className="row m-0 py-2 mb-2">
                <div className="col-6">
                    <Logo/>
                </div>
                <div className='col-6 d-end'>
                    <div className="d-flex" style={{gap:'30px'}}>
                        <Select 
                                id='language' 
                                name='language' 
                                options={languages} 
                                isSearchable={false}
                                defaultValue={{ label:  
                                                    <div className='d-flex justify-content-around align-items-center'>
                                                        {/* <span>{localStorage.getItem('i18nextLng').substring(0, 2).toUpperCase()}</span>  */}
                                                        <span>Currency</span> 
                                                        {/* <img src={`/images/icons/flags/${localStorage.getItem('i18nextLng').substring(0, 2)}.png`} width='20px'/>  */}
                                                    </div>, 
                                                // value: localStorage.getItem('i18nextLng') 
                                                value: 'Eur'
                                            }} 
                                styles={select_style_lang}
                                // onChange={e => i18n.changeLanguage(e.value)}
                            />
                        <div className="">
                            <Select 
                                id='language' 
                                name='language' 
                                options={languages} 
                                isSearchable={false}
                                defaultValue={{ label:  
                                                    <div className='d-flex justify-content-around align-items-center'>
                                                        {/* <span>{localStorage.getItem('i18nextLng').substring(0, 2).toUpperCase()}</span>  */}
                                                        <span>English</span> 
                                                        {/* <img src={`/images/icons/flags/${localStorage.getItem('i18nextLng').substring(0, 2)}.png`} width='20px'/>  */}
                                                    </div>, 
                                                // value: localStorage.getItem('i18nextLng') 
                                                value: 'En'
                                            }} 
                                styles={select_style_lang}
                                // onChange={e => i18n.changeLanguage(e.value)}
                            />
                        </div>
                    </div>

                    <div className='ms-5 d-none d-md-block'>
                        <button className='custom-btn btn-violaPurple-fill'>Add an advertisement</button>
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 col-lg-5 mb-2">
                    <Searchbar/>
                </div>
                <div className="py-2 col-12 col-lg-7 d-flex justify-content-start justify-content-xl-end" style={{overflowX: 'auto'}}>
                    <Navbar/>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Header;