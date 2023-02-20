import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'Apple', label: 'Apple' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'Orange', label: 'Orange' },
];

const AdvFilterBox = ({title}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className='text-center'>
        <h5 className='bg-lily white m-0 p-3 fs-16'>{title} <span className='text-danger bold'>*</span></h5>
        <Select 
          theme= {(theme) => ({
            ...theme,
            borderRadius: 0,
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? '#CCCCCC' : '#CCCCCC',
              boxShadow: 'none',
              '&:hover': {
                borderColor: state.isFocused ? '#CCCCCC' : '#CCCCCC',
              }              
            }),
            option: (baseStyles, {isFocused, isSelected}) => ({
              ...baseStyles,
              color: isSelected && '#6E467B',
              fontWeight: isSelected && 'bold',
              backgroundColor: isSelected ? '#6E467B33' : isFocused ? '#6E467B10': '#FFFFFF',
              outline:0,
              ':active' : {
                ...baseStyles[':active'],
                backgroundColor: isSelected ? '#6E467B10' : '#6E467B10'
              }
            }),
          }}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
    </div>
  )
}

export default AdvFilterBox