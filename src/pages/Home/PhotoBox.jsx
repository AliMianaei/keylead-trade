import React from 'react'

const PhotoBox = () => {
  return (
    <section className='mb-4'>
        <main className="max-container">
            <div className="row m-0">
                <div className="col-12">
                    <div className="position-relative overflow-hidden">
                    <img className='w-100 h-100' style={{minHeight:'300px', objectFit: 'cover'}} src="/images/bg-slider@2x.png" alt="" />
                    <img className='position-absolute right-0 bottom-0 pointer' width='126px' height='127px' src="/images/textbg/textbg-circle-text@2x.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default PhotoBox