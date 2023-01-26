import React from 'react';
import Category from '../components/Category';
import Header from '../components/Header';
import PhotoBox from '../components/PhotoBox';

const Home = () => {
  return (
    <>
      <Header/>
      <PhotoBox/>
      <Category/>
    </>
  )
}

export default Home;