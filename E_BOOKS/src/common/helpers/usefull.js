export const validate = (name, data, required) => {
  switch (name) {
    // NOMBRE
    case "nombre":
    // APELLIDO
    case "apellido":
      if (data === "" && required === true) {
        return { message: "Por favor, complete el campo", validated: false };
      } else if (!/[a-zA-Z]/.test(data)) {
        return { message: "Por favor, ingrese un texto válido", validated:false  };
      }
      return { message: "", validated: true };

    // EMAIL
    case "email":
      if (data === "" && required === true) {
        return { message: "Campo 'Email' requerido.", validated: false };
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {
        return { message: "Formato de correo electrónico inválido.", validated: false };
      }
      return { message: "", validated: true };

    // CONTRASEÑA
    case "password":
      if (data === "" && required === true) {
        return { message: "Campo 'Contraseña' requerido.", validated: false };
      } else if (!/.{8,}$/.test(data)) {
        return {
          message: "La contraseña debe contener al menos ocho caracteres.",
          validated: false,
        };
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data)) {
        return {
          message: "La contraseña debe contener al menos una letra y un número.",
          validated: false,
        };
      }
      return { message: "", validated: true };

    // FECHA DE NACIMIENTO
    case "fecha_nacimiento":
      if (data === "" && required === true) {
        return {
          message: "Campo 'Fecha de nacimiento' requerido",
          validated: false,
        };
      }
      return { message: "", validated: true };

    // CIUDAD
    case "ciudad":
    // PAIS
    case "pais":
    // GENEROS PREFERIDOS
    case "generos_preferidos":
    // BIOGRAFÍA
    case "biografia":
      
      if (data === "" && required === true) {
        return { message: "Por favor, complete el campo", validated: false };
      } else if (!/[a-zA-Z]/.test(data)) {
        return { message: "Por favor, ingrese un texto válido", validated:false  };
      }
      return { message: "", validated: true };

    default:
      console.log("Error no reconocido",error);
  }
};


