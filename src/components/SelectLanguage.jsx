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
                <span class="fi fi-us"></span>
            </div>
        </>
    )
}

export default SelectLanguage