import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import Select from 'react-select'
import { selectLanguage_style } from './selectStyle'

const languages = [
    {
        value: 'en', 
        label:  <div className='d-flex justify-content-around align-items-center'>
                <span>EN</span> 
                <img src='/images/icons/flags/en.png' alt="" width='20px'/> 
            </div>
    },
    {
        value: 'it', 
        label:  <div className='d-flex justify-content-around align-items-center'>
                <span>IT</span> 
                <img src='/images/icons/flags/it.png' width='20px'/> 
            </div>
    },
    {
        value: 'fA', 
        label:  <div className='d-flex justify-content-around align-items-center'>
                <span>Fa</span> 
                <img src='/images/icons/flags/it.png' width='20px'/> 
            </div>
    }
];

const SelectLanguage = () => {

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenSize(window.innerWidth);
            console.log(window.innerWidth)
        });
    }, []);

    return (
        <>
            <div className={screenSize > 768 ? 'd-block' : 'd-none'}>
                <Select 
                    id='language' 
                    name='language' 
                    options={languages} 
                    isSearchable={false}
                    defaultValue={{ label: languages[0].label, value: languages[0].value }} 
                    styles={selectLanguage_style}
                />
            </div>
            <div className={screenSize <= 768 ? 'd-block' : 'd-none'}>
                <img src='/images/icons/flags/en.png' alt="" width='20px'/> 
            </div>
        </>
    )
}

export default SelectLanguage