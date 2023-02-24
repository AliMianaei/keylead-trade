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
import SuppliersRegion from './SuppliersRegion';
import Footer from '../../components/Footer';
import Menubar from '../../components/Menubar';
import { useLocation } from 'react-router';

const Home = () => {
  // const location = useLocation();
  // const {pathname} = location;

  const {pathname} = useLocation();

  console.log(pathname)
  return (
    <div className='position-relative'>
      <Header/>
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
      <Footer/>
      <Menubar active={pathname} />
    </div>
  )
}

export default Home;