export const selectLanguage_style = {
  control: (styles, {isFocused}) => ({ 
    ...styles, 
    backgroundColor: '#FFFFFF', 
    border: '1px solid #CCCCCC', 
    borderColor: isFocused && '#CCCCCC', 
    width:'130px', 
    color:'#FFFFFF', 
    boxShadow:'none',
    '&:hover': {
      borderColor:'#CCCCCC', 
    }
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '0',
  }),
  menu: (styles) => ({
    ...styles,
    border: '1px solid #CCCCCC',
    boxShadow:'none',
    overflow:'hidden',
  }),
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    return {
      ...styles,
      backgroundColor: '#FFFFFF',
      backgroundColor: isSelected && '#6E467B22 !important',
      borderBottom: '0.5px solid #EEEEEE',
      color: isSelected ? '#6E467B' : '#888888',
      fontWeight: isSelected ? 'bold' : 400 ,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':hover': {
        backgroundColor: isFocused && '#6E467B09',
      }
    };
  },
  
  clearValue: () => {
    // console.log('clear')
  },
};

export const sort_style = {
  control: (styles, {isFocused}) => ({ 
    ...styles, 
    // backgroundColor: '#FFFFFF',
    background: 'linear-gradient(180deg, var(--white), var(--mercury))',
    // boxShadow: '0 0 10px #6E467B inset', 
    border: '1px solid #E1E2E3', 
    borderColor: isFocused && '#E1E2E3', 
    width:'130px', 
    color:'#6E467B', 
    boxShadow:'none',
    borderRadius: '50px',
    padding:'3px',
    textAlign: 'center',
    '&:hover': {
      borderColor:'#E1E2E3', 
    }
  }),
  menuList: (styles) => ({
    ...styles,
    padding: '0',
  }),
  menu: (styles) => ({
    ...styles,
    border: '1px solid #CCCCCC',
    boxShadow:'none',
    overflow:'hidden',
  }),
  option: (styles, {data, isDisabled, isFocused, isSelected}) => {
    return {
      ...styles,
      backgroundColor: '#FFF44F',
      backgroundColor: isSelected && '#6E467B22 !important',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      borderBottom: '0.5px solid #EEEEEE',
      color: isSelected ? '#6E467B' : '#888888',
      fontWeight: isSelected ? 'bold' : 400 ,
      cursor: isDisabled ? 'not-allowed' : 'default',
      ':hover': {
        backgroundColor: isFocused && '#6E467B09',
      }
    };
  },
  
  clearValue: () => {
    // console.log('clear')
  },
};