import axios from 'axios';
import api from './api';



const root = "http://localhost:3009";

export const logMe = async (body) => {

    return await axios.post(`${root}/auth/login`, body);
} 

export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}/usuarios`, config);
}

export const verUsuariosPerfil = async (token) => {
  let config = {
    headers: { 
      'Authorization': 'Bearer '+ token,  
    }
    };
    let res = await axios.get(`${root}/usuarios/profile`, config)
    return res.data
    
}

export const createUserProfile = async (body) => {

 
  return await axios.post(`${root}/auth/register`, body)

};

export const editarPerfil = async (body,token) => {
  let config = {
    headers: {
       Authorization: `Bearer ${token}`,
    
    },
  
   };
   console.log(token,'dime el token')
  return await axios.patch(`${root}/usuarios/perfil`, body,config);
};

export const verUsuarios = async (token) => {

  let config = {
    headers: {
      Authorization: `Bearer ${token}` 
    }
   
}

  return await axios.get(`${root}/usuarios/todos`, config);
}



export const getAll = async (token) => {

  const config = {
    headers: {'Authorization': 'Bearer '+ token, }
    
  };
  return await axios.get(`${root}/productos`, config)

};

export const EliminarUsuario = async (id, token) => {
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.delete(`${root}/usuarios/delete/${id}`, config);
};

export const getAllPrestamos = async (token) => {
  const config = {
    headers: {'Authorization': 'Bearer '+ token, }
    
  };
  return await axios.get(`${root}/usuarios/prestamos`, config)
};



export const getPrestamos = async (token) => {
  const config = {
    headers: {'Authorization': 'Bearer '+ token, }
    
  };
  return await axios.get(`${root}/prestamos`, config)
};

export const CreatePrestamo = async (body, token) => {
  console.log(token);
   let config = {
       headers: {
           'Authorization': 'Bearer '+ token,  
       }
   }
 
   return await axios.post(`${root}/prestamos/crearprestamos`, body, config)
 };
 
