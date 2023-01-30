import React from 'react';

import Header from '../../components/Header';
import Category from './Category';
import Innovation from './Innovation';
import PhotoBox from './PhotoBox';
import Subscription from './Subscription';
import TopProducts from './TopProducts';
import TopSellers from './TopSellers';

const Home = () => {
  return (
    <>
      <Header/>
      <PhotoBox/>
      <Category/>
      <TopProducts/>
      <TopSellers/>
      <Subscription/>
      <Innovation/>
      <section className='border' style={{height:'500px'}}> </section>
    </>
  )
}

export default Home;