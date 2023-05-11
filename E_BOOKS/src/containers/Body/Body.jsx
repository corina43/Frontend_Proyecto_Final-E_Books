import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Productos } from '../Productos/Productos';

import { Usuarios } from '../Profile/Profile';
import { Admin } from '../Admin/Admin';

import { AdminPrestamos } from '../Admin/AdminPrestamos';
import {Home} from '../../containers/Home/Home'
import VistaProductos from '../VistaProductos/VistaProductos';
import { Prestamos } from '../Prestamos/Prestamos';

import CrearPrestamo from '../CreatePrestamo/CreatePrestamo';
import  { DeleteUsuarios } from '../Admin/AdminDelete';





export const Body =() =>{
    return (
      <>
      
     <Routes>
     
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/usuarios/profile" element={<Usuarios />} />
  <Route path="/usuarios/perfil" element={<Usuarios />} />
  <Route path="/usuarios/todos" element={<Admin />} />
  <Route path="/usuarios/prestamos" element={<AdminPrestamos />} />
  <Route path="/usuarios/delete/${id}" element={<DeleteUsuarios />} />
  <Route path="/productos" element={<Productos />} />
  <Route path="/Vistaproductos" element={<VistaProductos />} />
  <Route path="/prestamos" element={<Prestamos />} /> 
  <Route path="/prestamos/crearprestamos" element={<CrearPrestamo />} /> 

       
       
       
     </Routes>
     </>
    )
  }
  