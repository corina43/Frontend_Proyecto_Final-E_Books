import axios from 'axios';




const root = "http://localhost:3009"

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

  let _body={

    nombre: body.nombre,
    apellido: body.apellido,
    email: body.email,
    password: body.password,
    fecha_nacimiento: body.fecha_nacimiento,
    fecha_registro: body.fecha_registro,
    ciudad: body.ciudad,
    pais: body.pais,
    generos_preferidos: body.generos_preferidos,
    biografia: body.biografia,

    
  }
  console.log(_body)
  let res = await axios.post(`${root}/auth/register`, _body)
  console.log(res)
};

export const verUsuarios = async (token) => {

  let config = {
    headers: {
      Authorization: `Bearer ${token}` 
    }
}

  return await axios.get(`${root}/usuarios/todos`, config);
}



export const getAll = async () => {
  try {
    let res = await axios.get(`${root}/productos`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};