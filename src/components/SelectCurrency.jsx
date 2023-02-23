import { useEffect, useState } from 'react'
import Select from 'react-select'

import { selectLanguage_style } from './selectStyle'
import { currencies } from './selectOptions'

const SelectCurrency = () => {

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    
    useEffect(() => {
        window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    }, []);

    return (
        <>
            <div className={screenSize > 768 ? 'd-block' : 'd-none'}>
                <Select 
                    id='currency' 
                    name='currency' 
                    options={currencies} 
                    isSearchable={false}
                    defaultValue={{ label: currencies[0].label, value: currencies[0].value }} 
                    styles={selectLanguage_style}
                />
            </div>
            <div className={screenSize <= 768 ? 'd-block' : 'd-none'}>
                <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
        </>
    )
}

export default SelectCurrency