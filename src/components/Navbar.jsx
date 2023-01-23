import React from 'react'

const Navbar = () => {
  return (
    <section className='pb-2'>
        <nav className='max-container'>
            <div className="row m-0 py-1">
                <div className="col-6">
                    <div className='width-max-content'>
                        <h1 className='text-uppercase viola mb-0 px-3' style={{borderBottom:'2px solid #6E467B'}}>keylead</h1>
                        <p className='mb-0' >Food Products Exchange</p>
                    </div>
                </div>
                <div className='col-6 d-end'>
                    <div className="d-flex" style={{gap:'30px'}}>
                        <select name="" id="">
                            <option value="euro">Euro</option>
                            <option value="dollar">Dollar</option>
                        </select>
                        <select name="" id="">
                            <option value="en">English</option>
                            <option value="it">Italian</option>
                        </select>
                    </div>

                    <div className='ms-5 d-none d-md-block'>
                        <button className='custom-btn btn-viola-fill'>Add an advertisement</button>
                    </div>
                </div>
            </div>
            <div className="row m-0 py-1">
                <div className="col-5">
                    <div className="h-100">
                        <input type="search" name="" id=""  className='d-block w-100 h-100'/>
                    </div>
                </div>
                <div className="col-7">
                    <ul className='list-unstyled d-end m-0' style={{gap:'20px'}}>
                        <li className='py-1 px-2 pointer'>Products</li>
                        <li className='py-1 px-2 pointer'>Services</li>
                        <li className='py-1 px-2 pointer'>Blog</li>
                        <li className='py-1 px-2 pointer'>About us</li>
                        <li className='py-1 px-2 pointer'>Contact us</li>
                        <li className='py-1 ps-2 pointer'>Login / Register</li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar;