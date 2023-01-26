export const select_style = {
    control: styles => ({ ...styles, backgroundColor: 'white', padding: '9px', borderColor:'#707070' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {

      return {
        ...styles,
        backgroundColor: isFocused ? '#ddd' : '',
        color: isSelected ? '#BB342F' : '#333333',
        fontWeight: isSelected ? 800 : 400 ,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    clearValue: () => {
      // console.log('clear')
    },
};

export const select_style_lang = {
  control: styles => ({ ...styles, backgroundColor: 'white', borderColor:'#707070', width:'130px', color:'#ffffff', boxShadow:'none'}),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {

    return {
      ...styles,
      backgroundColor: isFocused ? '#ddd' : '',
      color: isSelected ? '#288FCA' : '#333333',
      fontWeight: isSelected ? 800 : 400 ,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  clearValue: () => {
    // console.log('clear')
  },
};

export const select_style_profile = {

  control: (styles, { data, isDisabled, isFocused, isSelected }) => {

    return {
      ...styles,
      padding: '9px', 
      borderColor:'#707070',
      // backgroundColor: isFocused ? '#ddd' : '',
      backgroundColor: isDisabled ? '#264E701A' : 'white',
      color: isSelected ? '#264E70' : '#333333',
      fontWeight: isSelected ? 800 : 400 ,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },

  option: (styles, { data, isDisabled, isFocused, isSelected }) => {

    return {
      ...styles,
      backgroundColor: isFocused ? '#ddd' : '',
      color: isSelected ? '#264E70' : '#333333',
      fontWeight: isSelected ? 800 : 400 ,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  clearValue: () => {
    // console.log('clear')
  },
};