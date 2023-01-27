import React from 'react';
import Category from '../../components/Category';
import Header from '../../components/Header';
import PhotoBox from '../../components/PhotoBox';
import TopProducts from '../../components/TopProducts';
import TopSellers from '../../components/TopSellers';

const Home = () => {
  return (
    <>
      <Header/>
      <PhotoBox/>
      <Category/>
      <TopProducts/>
      <TopSellers/>
      <section className='border' style={{height:'500px'}}> </section>
    </>
  )
}

export default Home;