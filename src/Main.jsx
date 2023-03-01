import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Advertise from './pages/advertisement/Advertise';
import SellerAdv from './pages/advertisement/SellerAdv';
import BuyerAdv from './pages/advertisement/BuyerAdv';
import Products from './pages/products/Products';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import MainLayout from './layouts/MainLayout';
import FormLayout from './layouts/FormLayout';
import ContactUs from './pages/contact/ContactUs';

const Main = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' exact element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='advertise' element={<Advertise/>}>
          <Route path="" element={<SellerAdv/>} />
          <Route path="seller" element={<SellerAdv/>} />
          <Route path="buyer" element={<BuyerAdv/>} />
        </Route>
        <Route element={<FormLayout/>}>
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='contact-us' element={<ContactUs/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Main;