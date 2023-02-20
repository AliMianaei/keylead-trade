import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import AdvFilterBox from '../../components/AdvFilterBox'
import { readImageFile } from '../../utils/readImageFile';

const SellerAdv = () => {

  const [bio, setBio] = useState(false);
  const [images, setImages] = useState([]);
  const [encodedImages, setEncodedImages] = useState([]);

  const handleUploadImage = e => { 
    const uploadedImages = Array.from(e.target.files);
    const imagesState = [...images];
    const encodedImagesState = [...encodedImages];

    const newImages = [];
    const promises = [];

    uploadedImages.map(uploadedImage => {
        const preventDuplicateImage = imagesState.filter(image => image.name === uploadedImage.name);
        if(preventDuplicateImage.length === 0) {
            promises.push(readImageFile(uploadedImage));
            newImages.push(uploadedImage);
        }
    })

    Promise.all(promises).then((results) => {
        // const res = [];
        // results.map(result => res.push(result.binary));
        // setEncodedImages([...encodedImagesState, ...res]);
        setEncodedImages([...encodedImagesState, ...results]);
    });   
    setImages([...imagesState, ...newImages]);
  }

  const handleDeleteImage = index => {
    const imgArray = [...images];
    const imgEncodedArray = [...encodedImages];

    const filteredImages = imgArray.filter((img, imgIndex) => imgIndex !== index);
    setImages(filteredImages);

    const filteredEncodedImages = imgEncodedArray.filter((img, imgIndex) => imgIndex !== index);
    setEncodedImages(filteredEncodedImages);
  }

  return (
    <form action="" className=''>
      <div className='sellerAdv'>
        <AdvFilterBox title= 'Main Category'/>
        <AdvFilterBox title= 'Type'/>
        <AdvFilterBox title= 'Quantity'/>
        <AdvFilterBox title= 'Country'/>
        <AdvFilterBox title= 'Province'/>
        <AdvFilterBox title= 'Price per unit'/>
        <AdvFilterBox title= 'Characteristic'/>
        <AdvFilterBox title= 'Variety'/>
        <AdvFilterBox title= 'Packaging Type'/>
        <AdvFilterBox title= 'Country of Origion'/>
        {/* <div className="">
          <label htmlFor="bio" className={`h-100 d-center pointer border-thistle ${bio ? 'white' : 'violaPurple'} ${bio ? 'bg-violaPurple' : 'bg-white'}`}>
            <span className='me-2'>Bio</span>
            <span className={`${bio ? 'd-inline' : 'd-none'}`}>&#10004;</span>
          </label>
          <input 
            type="checkbox" 
            name="bio" 
            id="bio"
            className='d-none' 
            onChange={(e) => setBio(e.target.checked)} />
        </div> */}
      </div>
      <div className="d-end my-5">
        <label htmlFor="bio" className={`bio-label d-center pointer border-thistle ${bio ? 'white' : 'violaPurple'} ${bio ? 'bg-violaPurple' : 'bg-white'}`}>
          <span className='me-2'>Bio</span>
          <span className={`${bio ? 'd-inline' : 'd-none'}`}>&#10004;</span>
        </label>
        <input 
          type="checkbox" 
          name="bio" 
          id="bio"
          className='d-none' 
          onChange={(e) => setBio(e.target.checked)} />
      </div>
      <div className='d-flex flex-wrap mb-5'>
        <label htmlFor="uploadImg" className={`flex-column smokeyGrey pointer me-5 ${images.length >= 2 ? 'd-none' : 'd-center'}`} style={{border: '1px dashed grey', width:'200px', height:'200px'}}>
          <span className='fs-22'>+</span>
          <span className='position-relative' style={{top:'-10px'}}>Photo</span>
        </label>
        <input 
          className='uploadImg d-none' 
          type="file" 
          name="uploadImg" 
          id="uploadImg" 
          multiple={true}
          accept="image/*"
          onChange={e => handleUploadImage(e)}
          disabled={images.length >= 2}
        />

        {images && images.map((image, index) => (
          <div key={index} className='uploadedImage position-relative border-kangaroo d-center me-4 overflow-hidden' style={{width:'200px', height:'200px'}}>
            <img className='w-100 h-100 objectFit-cover' src={image? URL.createObjectURL(image) : null} alt="Product image" />
            <div className="handleImageBtn d-flex text-center position-absolute w-100" style={{bottom:0}}>
              {/* <span className='w-50 bg-softPurple white pointer p-1 fs-14'>Show</span> */}
              <span className='w-100 bg-sunsetOrange pointer p-1 fs-14' onClick={() => handleDeleteImage(index)}>Delete</span>
            </div>
          </div>
        ))}
        <div className={`border-kangaroo me-4 flex-column smokeyGrey ${images.length >=2 ? 'd-none' : 'd-center'}`} style={{width:'200px', height:'200px'}}>
          <span>Max</span>
          <span>{`${2 - images.length}`} Photo{`${images.length === 1 ? '' : 's'}`}</span>
        </div>
        <textarea placeholder='Description...' className='ms-auto p-4 resize-none outline-none border-kangaroo smokeyGrey' style={{maxWidth:'500px', width:'100%', height:'200px'}}></textarea>
      </div>
      <div className='text-end'>
        <button className='custom-btn btn-rosyPink-fill px-5'>Confirm</button>
      </div>
    </form>
  )
}

export default SellerAdv