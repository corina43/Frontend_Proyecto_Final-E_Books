export const testErrores = (value, type, password1) => {
    switch (type) {
      case "text":
        if (!/[a-z]/gi.test(value)) {
          return "Formato incorrecto";
        } else {
          return "";
        }
  
      case "name":
        if (value === "") {
          return "El nombre no puede estar vacío";
        } else if (!/[a-z]/gi.test(value)) {
          return "Formato incorrecto";
        } else {
          return "";
        }
  
      case "email":
        if (
          !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        ) {
          return "Escribe un correo electrónico válido";
        } else {
          return "";
        }
  
      case "password":
        if (value.length < 8) {
          return "La contraseña debe contener al menos 8 caracteres";
        }
        // validate it has one lower case letter
        if (!value.match(/[a-z]/)) {
          return "La contraseña debe contener al menos una letra minuscula";
        }
        // validate it has one upper case letter
        if (!value.match(/[A-Z]/)) {
          return "La contraseña debe contener al menos una letra mayuscula";
        }
        // validate it has one number
        if (!value.match(/[0-9]/)) {
          return "La contraseña debe contener al menos un número";
          return "";
        } else {
          return "";
        }
  
      // case "password2":
      //   if (value !== password1) {
      //     return "Passwords don't match";
      //   } else {
      //     return "Las contraseñas no coinciden";
      //   }
  
      default:
        console.log("Error");
  
        break;
    }
  };