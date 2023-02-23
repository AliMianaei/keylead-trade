import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import Select from 'react-select'
import { selectLanguage_style } from './selectStyle'

const languages = [
    {
        value: 'usd', 
        label:  <div className='d-flex justify-content-around align-items-center'>
                <span>USD</span> 
                <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
    },
    {
        value: 'eur', 
        label:  <div className='d-flex justify-content-around align-items-center'>
                <span>EUR</span> 
                <i className="fa fa-eur" aria-hidden="true"></i>
            </div>
    },
];

const SelectCurrency = () => {

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
                <i class="fa fa-usd" aria-hidden="true"></i>
            </div>
        </>
    )
}

export default SelectCurrency