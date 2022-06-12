import React from 'react';
import {Router, Routes , Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Work from '../pages/Work';
import Fun from '../pages/Fun';


const Main = () => {
  return (
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/work' element={<Work/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/fun' element={<Fun/>}></Route>
        </Routes>
  );
}

export default Main;