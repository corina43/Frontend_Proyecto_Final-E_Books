import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Productos } from '../Productos/Productos';
import {Home} from '../../common/Home/Home';


export const Body =() =>{
    return (
      <>
      
     <Routes>
     
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/productos" element={<Productos />} />
  {/* <Route path="/home" element={<Home />} /> */}
       
       
       
     </Routes>
     </>
    )
  }
  