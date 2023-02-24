import { useState, useEffect } from 'react'
import Select from 'react-select'

import { selectLanguage_style } from './selectStyle'
import { languages } from './selectOptions'

const SelectLanguage = () => {

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    }, []);

    return (
        <>
            <div className={`${screenSize > 767 ? 'd-block' : 'd-none'}`}>
                <Select 
                    id='language' 
                    name='language' 
                    options={languages} 
                    isSearchable={false}
                    defaultValue={{ label: languages[0].label, value: languages[0].value }} 
                    styles={selectLanguage_style}
                />
            </div>
            <div className={`circle qube-2half ${screenSize <= 767 ? 'd-center' : 'd-none'}`} style={{boxShadow: '0 0 3px 1px #ccc, 0 0 5px 1px #f5f5f5 inset'}}>
                <i className="fi fi-us" aria-hidden="true"></i>
            </div>
        </>
    )
}

export default SelectLanguage