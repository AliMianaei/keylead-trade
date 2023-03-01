import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  
  
  
  return (

    <>
      <div className="d-flex mb-4">
            <h3 className='mb-0 haiti'>Sign in</h3>
            <div className="d-center gap-2 ms-auto">
              <span className='d-center pointer'>
                <i className="fa fa-facebook-square fs-28 rounded" aria-hidden="true"></i>
              </span>
              <span className='d-center pointer'>
                <i className="fa fa-google-plus-square fs-28" aria-hidden="true"></i>
              </span>
              <span className='d-center pointer'>
                <i className="fa fa-twitter-square fs-28" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <form action="">
            <div className="d-flex flex-column">
              <label htmlFor="email" className='mb-1 text-uppercase violaPurple fs-14'>e-mail</label>
              <input type="email" id='email' name='email' className='form-input d-center px-2 overflow-hidden' placeholder='e-mail' />
              <span className='fs-12 text-danger' style={{height:'20px'}}>
                {/* The fielid is required. */}
              </span>
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="password" className='mb-1 text-uppercase violaPurple fs-14'>password</label>
              <div className='form-input d-flex overflow-hidden'>
                <input type={showPassword ? 'text' : 'password'} id='password' name='password' className='px-2 h-100 flex-grow-1 password-input' placeholder='password' />
                <div className='d-center px-2 pointer' style={{borderLeft: '1px solid #D9DADD'}} onClick={() => setShowPassword(!showPassword)}>
                  <i className={`fa violaPurple ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <span className='fs-12 text-danger'>
                  {/* The fielid is required. */}
                </span>
                <span className='fs-14 pointer violaPurple bold'>
                  Forget your password?
                </span>
              </div>
            </div>

            <div className="d-flex align-items-center mt-2">
              <input type="checkbox" name="remember" id="remember" className='me-2 custom-checkbox'/>
              <label htmlFor="remember"className='pointer violaPurple'>Remember me</label>
            </div>

            <div className="text-center mt-4">
              <button className='custom-btn btn-violaPurple-fill w-100 rounded' > Sign in </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <span className='charcoalGrey'>Not a member? </span> <Link to='/register' className='text-decoration-none darkPurple bold'>Sign up</Link>
          </div>
    </>
  )
}

export default Login