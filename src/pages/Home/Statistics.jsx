import React from 'react'

const Statistics = () => {
  return (
    <section className='mb-4'>
        <main className="max-container py-4">
            <div className="row m-0 mb-5 text-center">
                <div className="col-12"> <h4 className="violaPurple fs-32 mb-4">Revealing statistics</h4> </div>
                <div className="col-12 d-center"> 
                    <div className="overflow-hidden pointer" style={{width:'250px', height:'200px'}}>
                        <img className='w-100 h-100' src="/images/textbg/textbg-triangle-text@2x.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="row m-0">
                <div className="col-12 py-4 overflow-auto">
                    <ul className='d-flex justify-content-between list-unstyled p-0 mb-0 w-100 minWidth-max-content' style={{gap:'30px'}}>
                        <li className='border-kangaroo bg-white' style={{width:'360px', height:'270px'}}>
                            <img className='w-100 h-100' src="/images/diagram/diagram-dot@2x.png" alt="" />
                        </li>

                        <li className='border-kangaroo bg-white' style={{width:'360px', height:'270px'}}>
                            <img className='w-100 h-100' src="/images/diagram/diagram-rec@2x.png" alt="" />
                        </li>

                        <li className='border-kangaroo bg-white' style={{width:'360px', height:'270px'}}>
                            <img className='w-100 h-100' src="/images/diagram/diagram-mult@2x.png" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Statistics