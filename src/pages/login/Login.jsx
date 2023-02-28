import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (

    <section className='m-auto p-2 my-5' style={{maxWidth: '900px'}}>
      <div className="row m-0 h-100 rounded overflow-hidden" style={{boxShadow: '0 0 3px #ccc'}}>
        <div className="col-12 p-0 col-sm-5 col-md-6">
          <img className='userForm-img objectFit-cover w-100' src="/images/bg-slider@2x.png" alt="" />
        </div>
        <div className="col-12 col-sm-7 col-md-6 py-5 px-4">
          <div className="d-flex mb-4">
            <h3 className='mb-0'>Sign in</h3>
            <div className="d-center gap-2 ms-auto">
              <span className='d-center circle border-kangaroo pointer qube-2rem'>F</span>
              <span className='d-center circle border-kangaroo pointer qube-2rem'>G</span>
            </div>
          </div>

          <form action="">
            <div className="d-flex flex-column">
              <label htmlFor="username" className='mb-1 text-uppercase violaPurple fs-14'>username</label>
              <input type="text" className='form-input d-center px-2 overflow-hidden' placeholder='username' />
              <span className='fs-12 text-danger' style={{height:'20px'}}>
                {/* The fielid is required. */}
              </span>
            </div>

            <div className="d-flex flex-column">
              <label htmlFor="password" className='mb-1 text-uppercase violaPurple fs-14'>password</label>
              <div className='form-input d-flex overflow-hidden'>
                <input type={showPassword ? 'password' : 'text'} className='px-2 h-100 flex-grow-1 password-input' placeholder='password' />
                <div className='d-center px-2 pointer' style={{borderLeft: '1px solid #D9DADD'}} onClick={() => setShowPassword(!showPassword)}>
                  <i className={`fa violaPurple ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} aria-hidden="true"></i>
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
        </div>


      </div>
    </section>
  )
}

export default Login