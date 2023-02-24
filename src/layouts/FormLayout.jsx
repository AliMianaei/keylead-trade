import React from 'react'
import { Outlet } from 'react-router'

const FormLayout = () => {
  return (
    <div className='border'>
        <Outlet/>
    </div>
  )
}

export default FormLayout