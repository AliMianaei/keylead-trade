import React from 'react'

const PhotoBox = () => {
  return (
    <section className='mb-4'>
        <main className="max-container">
            <div className="row m-0">
                <div className="col-12">
                    <div className="position-relative overflow-hidden">
                    <img className='w-100 h-100 objectFit-cover' style={{minHeight:'180px'}} src="/images/bg-slider@2x.png" alt="" />
                    <img className='position-absolute right-0 bottom-0 pointer' style={{maxWidth: '126px', width:'22%'}}  src="/images/textbg/textbg-circle-text@2x.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default PhotoBox