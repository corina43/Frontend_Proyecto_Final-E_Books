import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Productos } from '../Productos/Productos';
import {Home} from '../../containers/Home/Home'
import { Usuarios } from '../Profile/Profile';
import { Admin } from '../Admin/Admin';
//import  { PrestamosHistorialWrapper } from '../Prestamos/Prestamos';
import { AdminPrestamos } from '../Admin/AdminPrestamos';
import ObtenerHistorialPrestamos from '../Prestamos/Prestamos';
import VistaProductos from '../VistaProductos/VistaProductos';




export const Body =() =>{
    return (
      <>
      
     <Routes>
     
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/usuarios" element={<Usuarios />} />
  <Route path="/usuarios/todos" element={<Admin />} />
  <Route path="/usuarios/prestamos" element={<AdminPrestamos />} />
  <Route path="/productos" element={<Productos />} />
  <Route path="/Vistaproductos" element={<VistaProductos />} />
  <Route path="/prestamos/historial/:id_usuario" element={<ObtenerHistorialPrestamos />} /> 
  {/* <Route path="/prestamos/historial/:id_usuario" element={<PrestamosHistorialWrapper />} /> */}
  {/* <Route path="/home" element={<Home />} /> */}
       
       
       
     </Routes>
     </>
    )
  }
  