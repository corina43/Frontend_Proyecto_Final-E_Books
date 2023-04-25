export const validate = (name, data, required) => {
  switch (name) {
    // NOMBRE
    case "nombre":
    // APELLIDO
    case "apellido":
      if (data === "" && required === true) {
        return { message: "Por favor, complete el campo", valid: false };
      } else if (!/[a-zA-Z]/.test(data)) {
        return { message: "Por favor, ingrese un texto válido", valid: false };
      }
      return { message: "", valid: true };

    // EMAIL
    case "email":
      if (data === "" && required === true) {
        return { message: "Campo 'Email' requerido.", valid: false };
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)) {
        return { message: "Formato de correo electrónico inválido.", valid: false };
      }
      return { message: "", valid: true };

    // CONTRASEÑA
    case "password":
      if (data === "" && required === true) {
        return { message: "Campo 'Contraseña' requerido.", valid: false };
      } else if (!/.{8,}$/.test(data)) {
        return {
          message: "La contraseña debe contener al menos ocho caracteres.",
          valid: false,
        };
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(data)) {
        return {
          message: "La contraseña debe contener al menos una letra y un número.",
          valid: false,
        };
      }
      return { message: "", valid: true };

    // FECHA DE NACIMIENTO
    case "fecha_nacimiento":
      if (data === "" && required === true) {
        return {
          message: "Campo 'Fecha de nacimiento' requerido",
          valid: false,
        };
      }
      return { message: "", valid: true };

    // CIUDAD
    case "ciudad":
    // PAIS
    case "pais":
    // GENEROS PREFERIDOS
    case "generos_preferidos":
    // BIOGRAFÍA
    case "biografia":
      if (data === "" && required === false) {
        return { message: "", valid: true };
      } else if (!/[a-zA-Z]/.test(data)) {
        return { message: "Solo se permiten caracteres latinos", valid: false };
      }
      return { message: "", valid: true };

    default:
      console.log("Error no reconocido");
  }
};


