import React, { useEffect } from 'react'

const Login = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='w-100 m-auto rounded' style={{maxWidth:'400px', boxShadow:'0 0 10px 1px #ddd'}}>
      <div className="row m-0 py-4">
        <h2 className="col-12 mb-3 d-center">LOGIN</h2>
        <div className="col-12 d-flex flex-column gap-2 mb-3">
          <label htmlFor="username" className=''> Username </label>
          <input type="text" id='username' name='username' className='p-2' placeholder='username'/>
        </div>

        <div className="col-12 d-flex flex-column gap-2 mb-3">
          <label htmlFor="username" className=''> Password </label>
          <input type="text" id='password' name='password' className='p-2' placeholder='password'/>
        </div>

        <div className="col-12 d-flex flex-column gap-2 mb-3">
          <label htmlFor="username" className=''> Password </label>
          <input type="text" id='password' name='password' className='p-2' placeholder='password'/>
        </div>
        
        <div className="d-flex gap-2 mb-4">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember me!</label>
        </div>

        <div className="text-center">
          <button className='btn btn-primary px-4'>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Login