import React from 'react';

import Header from '../../components/Header';
import Category from './Category';
import Innovation from './Innovation';
import PhotoBox from './PhotoBox';
import Subscription from './Subscription';
import TopProducts from './TopProducts';
import TopSellers from './TopSellers';
import TopNews from './TopNews';
import Events from './Events';
import Statistics from './Statistics';

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
      <TopNews/>
      <Events/>
      <Statistics/>
      <section className='border' style={{height:'500px'}}> </section>
    </>
  )
}

export default Home;