import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'
// import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const FormLayout = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  return (
    <div className="row m-0 vh-100">
        <div className="col-12 col-md-7 col-xl-8">
            <div className="login-side-wrapper">
              <Logo/>
                <h2 className="side-subtitle">All in one place, protected by Blockchain</h2>
                <p className="side-paragraph">Group all the documents that are part of your home, 
                    from the financial documents of the loan to the documents of the electrical system. 
                    All under the security of the blockchain.
                </p>
                <div className="border text-center" style={{width:'300px'}}>
                    <img className='w-100' src="/images/products/orange_old.png" alt="" />
                </div>
            </div>
        </div>
        <div className="aside-formLayout col-12 col-md-5 col-xl-4 p-0 bg-violaPurple white font-lato border">
            <div className='row position-relative zIndex-1' style={{margin: '90px 0 0'}}>   
                <div className='col-11 col-sm-10 col-md-11 col-lg-10 col-xl-9 m-auto py-5'>
                    {pathname === '/register/confirm' ? null :
                      <>
                        <h2 className='mb-3'>Welcome!</h2>
                        <div className='d-flex sel-btn position-relative round-50 overflow-hidden'>
                            <span className={`d-center w-50 h-100 transition-1 fs-18 bold pointer ${pathname !== '/login' && 'text-primary'}`} onClick={() => navigate('/login')}>Sign in</span>
                            <span className={`d-center w-50 h-100 transition-1 fs-18 bold pointer ${pathname !== '/register' && 'text-primary'}`} onClick={() => navigate('/register')}>Sign up</span>
                            <span className={`position-absolute d-center w-50 h-100 bg-lily transition-1 fs-18 bold violaP round-50 ${pathname === '/register' && 'translateX-100'}`}> {`${pathname === '/register' ? 'Sign up' : 'Sign in'}`} </span>
                        </div>
                        <h5 className=''> {` Insert your credentials to ${pathname === '/register' ? 'create' : 'access'} your account`} </h5>
                      </>
                    }
                    <Outlet/>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default FormLayout