import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { selectCode_style } from '../../components/selectStyle'
import { codes } from '../../components/selectOptions'

const ContactUs = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <>
      <div className="d-flex mb-4">
            <h3 className='mb-0 haiti'>Contact us</h3>
      </div>

      <form action="">
        <div className="row">
            <div className="col-6">
                <div className="d-flex flex-column">
                    <label htmlFor="name" className='mb-1 text-uppercase violaPurple fs-14'>name</label>
                    <input type="text" id='name' name='name' className='form-input d-center px-2 overflow-hidden' placeholder='name' />
                    <span className='fs-12 text-danger' style={{height:'20px'}}>
                        {/* The fielid is required. */}
                    </span>
                </div>
            </div>

            <div className="col-6">
                <div className="d-flex flex-column">
                    <label htmlFor="surname" className='mb-1 text-uppercase violaPurple fs-14'>surname</label>
                    <input type="text" id='surname' name='surname' className='form-input d-center px-2 overflow-hidden' placeholder='surname' />
                    <span className='fs-12 text-danger' style={{height:'20px'}}>
                        {/* The fielid is required. */}
                    </span>
                </div>
            </div>

        </div>
        

        <div className="d-flex flex-column">
          <label htmlFor="email" className='mb-1 text-uppercase violaPurple fs-14'>e-mail</label>
          <input type="email" id='email' name='email' className='form-input d-center px-2 overflow-hidden' placeholder='e-mail' />
          <span className='fs-12 text-danger' style={{height:'20px'}}>
            {/* The fielid is required. */}
          </span>
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="phone" className='mb-1 text-uppercase violaPurple fs-14'>phone number</label>
          <div className="d-flex gap-2">
            <Select 
                id='phoneCode' 
                name='phoneCode' 
                placeholder='code'
                options={codes}
                isSearchable={false}
                defaultValue='' 
                styles={selectCode_style}
            />
            <input type="tel" id='phone' name='phone' className='form-input d-center px-2 overflow-hidden w-100 fs-14' placeholder='phone number'
                value={phoneNumber}
                onChange={(e) => {
                    const re = /^[0-9\b]+$/;
                    if (e.target.value === '' || re.test(e.target.value)) {
                    setPhoneNumber(e.target.value)
                    }
                }}
            />
          </div>
          <span className='fs-12 text-danger' style={{height:'20px'}}>
            {/* The fielid is required. */}
          </span>
        </div>

        <div className="d-flex flex-column">
          <label htmlFor="message" className='mb-1 text-uppercase violaPurple fs-14'>message</label>
          {/* <input type="email" id='message' name='message' className='form-input d-center px-2 overflow-hidden' placeholder='message' /> */}
          <textarea name="message" id="message" className='form-input d-center p-2 overflow-auto' style={{minHeight:'150px', maxHeight:'250px'}} placeholder='Write here ...'></textarea>
          <span className='fs-12 text-danger' style={{height:'20px'}}>
            {/* The fielid is required. */}
          </span>
        </div>

        <div className="text-center mt-4">
          <button className='custom-btn btn-violaPurple-fill w-100 rounded' > Send </button>
        </div>
      </form>
    </>
  )
}

export default ContactUs