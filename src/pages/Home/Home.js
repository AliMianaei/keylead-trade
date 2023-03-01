import React from 'react';
import Category from './Category';
import Innovation from './Innovation';
import PhotoBox from './PhotoBox';
import Subscription from './Subscription';
import TopProducts from './TopProducts';
import TopSellers from './TopSellers';
import TopNews from './TopNews';
import Events from './Events';
import Statistics from './Statistics';
import SuppliersRegion from './SuppliersRegion';

const Home = () => {
  return (
    <div className='position-relative'>
      <PhotoBox/>
      <Category/>
      <TopProducts/>
      <TopSellers title='Top Sellers' showAll={true} />
      <Subscription/>
      <Innovation/>
      <TopNews/>
      <Events/>
      <Statistics/>
      <SuppliersRegion/>
    </div>
  )
}

export default Home;