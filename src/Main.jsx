import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const Main = () => {
  return (
    <Routes>
        <Route path='/' exact element={<Home/>} />
    </Routes>
  )
}

export default Main;