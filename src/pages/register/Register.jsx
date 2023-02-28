import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <div className="d-flex mb-4">
            <h3 className='mb-0 haiti'>Sign up</h3>
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
              <label htmlFor="username" className='mb-1 text-uppercase violaPurple fs-14'>username</label>
              <input type="text" id='username' name='username' className='form-input d-center px-2 overflow-hidden' placeholder='username' />
              <span className='fs-12 text-danger' style={{height:'20px'}}>
                {/* The fielid is required. */}
              </span>
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="username" className='mb-1 text-uppercase violaPurple fs-14'>email</label>
              <input type="email" id='email' name='email' className='form-input d-center px-2 overflow-hidden' placeholder='email' />
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
                <span className='fs-12 text-danger' style={{height:'20px'}}>
                  {/* The fielid is required. */}
                </span>
              </div>
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="confirmPassword" className='mb-1 text-uppercase violaPurple fs-14'>confirm password</label>
              <div className='form-input d-flex overflow-hidden'>
                <input type={showConfirmPassword ? 'text' : 'password'} id='confirmPassword' name='confirmPassword' className='px-2 h-100 flex-grow-1 password-input' placeholder='confirm password' />
                <div className='d-center px-2 pointer' style={{borderLeft: '1px solid #D9DADD'}} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <i className={`fa violaPurple ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden="true"></i>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <span className='fs-12 text-danger' style={{height:'20px'}}>
                  {/* The fielid is required. */}
                </span>
              </div>
            </div>

            {/* <div className="d-flex align-items-center mt-2">
              <input type="checkbox" name="remember" id="remember" className='me-2 custom-checkbox'/>
              <label htmlFor="remember"className='pointer violaPurple'>Remember me</label>
            </div> */}

            <div className="text-center mt-4">
              <button className='custom-btn btn-violaPurple-fill w-100 rounded' > Sign up </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <span className='charcoalGrey'>Are you a member? </span> <Link to='/login' className='text-decoration-none darkPurple bold'>Sign in</Link>
          </div>
    </>
  )
}

export default Register