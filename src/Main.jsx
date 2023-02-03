import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Advertise from './pages/Advertisement/Advertise';
import SellerAdv from './pages/Advertisement/SellerAdv';
import BuyerAdv from './pages/Advertisement/BuyerAdv';

const Main = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='advertise' element={<Advertise/>}>
        <Route path="" element={<SellerAdv/>} />
        <Route path="seller" element={<SellerAdv/>} />
        <Route path="buyer" element={<BuyerAdv/>} />
      </Route>
    </Routes>
  )
}

export default Main;