import React from 'react'

const Menubar = () => {
  return (
    <section className='menubar-sticky position-fixed bottom-0 d-block d-lg-none w-100 bg-white text-center' style={{boxShadow: '0 0 5px 1px #ddd', height:'60px'}}>
        <ul className="d-flex justify-content-around list-unstyled mb-0 h-100">
            <li className='d-center flex-column p-2 px-3 px-sm-4 violaPurple'>
                <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                <p className='mb-0'>Home</p>
            </li>

            <li className='d-center flex-column p-2 px-3 px-sm-4 violaPurple'>
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                <p className='mb-0'>Profile</p>
            </li>

            <li className='d-center flex-column p-2 px-3 px-sm-4 rosyPink bold'>
                <i className="fa fa-plus-square-o fa-2x" aria-hidden="true"></i>
                <p className='mb-0'>Add</p>
            </li>

            <li className='d-center flex-column p-2 px-3 px-sm-4 violaPurple'>
                <i className="fa fa-gift fa-2x" aria-hidden="true"></i>
                <p className='mb-0'>Package</p>
            </li>

            <li className='d-center flex-column p-2 px-3 px-sm-4 violaPurple'>
                <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                <p className='mb-0'>Chat</p>
            </li>
        </ul>
    </section>
  )
}

export default Menubar