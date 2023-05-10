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

  // let _body={

  //   nombre: body.nombre,
  //   apellido: body.apellido,
  //   email: body.email,
  //   password: body.password,
  //   fecha_nacimiento: body.fecha_nacimiento,
  //   fecha_registro: body.fecha_registro,
  //   ciudad: body.ciudad,
  //   pais: body.pais,
  //   generos_preferidos: body.generos_preferidos,
  //   biografia: body.biografia,

    
  // }
  // console.log(_body)
  return await axios.post(`${root}/auth/register`, body)
  // console.log(res)
};

export const editarPerfil = async (body, token) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.put(`${root}/perfil`, body, config);
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
 
