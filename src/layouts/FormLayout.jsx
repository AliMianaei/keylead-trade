import React, { useEffect } from 'react'
import { Outlet } from 'react-router'

const FormLayout = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <section className='m-auto p-2 my-md-3' style={{maxWidth: '900px'}}>
      <div className="row m-0 h-100 rounded overflow-hidden" style={{boxShadow: '0 0 3px #ccc'}}>
        <div className="col-12 p-0 col-sm-5 col-md-6">
          <img className='userForm-img objectFit-cover w-100' src="/images/bg-form.png" alt="" />
        </div>
        <div className="col-12 col-sm-7 col-md-6 py-5 px-4">
          <Outlet/>
        </div>


      </div>
    </section>
  )
}

export default FormLayout