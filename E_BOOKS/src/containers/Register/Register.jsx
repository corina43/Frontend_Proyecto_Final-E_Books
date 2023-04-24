import React, { useState, useEffect } from "react";
import { InputText } from "../../common/InputText/InputText";
import { validate } from "../../common/helpers/useful";
import{createUserProfile} from  '../../services/apiCalls'
import { useNavigate } from "react-router-dom";
import './Register.css'



export const Register = () => {

  const navigate = useNavigate();
  // 1 - Primero siempre se comprueba el valor de los hooks
  const [credenciales, setCredenciales] = useState({
    username: "",
    email:"",
    password:""
     
  });

  //Este hook consistirá en el lugar de guardado de mensajes de error, a priori estarán en comillas vacías
  const [credencialesError, setCredencialesError] = useState({
   
    usernameError: "",
    emailError: "",
    passwordError: ""
  });
  const [credencialesValido, setCredencialesValido] = useState({
   
    usernameValido: false,
    emailValido: false,
    passwordValido: false
  });

  const [registerAct, setRegisterAct] = useState(false);

  const inputHandler = (e) => {

    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      //Este método hace una copia del estado del componente con spread para no tener que mutar el estado original,
      //posteriormente, mediante la técnica de diccionario de JS, asignamos el valor del input que esté escribiendose
      //EN ESE MOMENTO a la parte correspondiente del Hook.
    }));
  };

  //Funciones de ciclo de vida del componente, conocidas como useEffect
 // 3 - Ejecutamos los useEffect

 useEffect(() => {
  //Este useEffect se va a ejecutar SIEMPRE que hayan cambios en el hook credenciales
  // console.log("Credenciales ahora vale......", credenciales);

  console.log(credenciales);
  for (let errorFound in credencialesError) {
 
    if (credencialesError[errorFound] !== "" ) {
      setRegisterAct(false);
      return;
    }}
    for (let gol in credenciales) {
     
      if (credenciales[gol] === "" ) {
        setRegisterAct(false);
        return;
      }}
      for (let validated in credencialesValido) {
     
        if (credencialesValido[validated] === false) {
          setRegisterAct(false);
          return;
        }
  }

  setRegisterAct(true);
});

//Funcion de validacion

const checkError = (e) => {
  

  let errorFound = "";

 
  const validation = validate(
    e.target.name,
    e.target.value,
    e.target.required
  );

  
  errorFound = validation.message;

  //PARTE QUE NO FUNCIONA//

   setCredencialesValido((prevState) => ({
     ...prevState,
     [e.target.name +'Valido']: validation.validated,
   }));

  ///////////////////////////

  //Aqui seteamos el hook de los errores

  setCredencialesError((prevState) => ({
    ...prevState,
    [e.target.name + "Error"]: errorFound,
  }));
};

const userRegister = () => {
  createUserProfile(credenciales)
  .then(() => {
    console.log("todo correcto");
     navigate('/login')
  })
  .catch((errorFound) => console.log(errorFound));
};

// 2 - Se mira en la zona de renderizado...
return (
  <div className="homeDesign">
    <InputText
      className={
        credencialesError.usernameError === ""
          ? "inputBasicDesign"
          : "inputBasicDesign inputErrorDesign"
      }
      type={"text"}
      name={"name"}
      placeholder={"nombre..."}
      required={true}
      changeFunction={(e) => inputHandler(e)}
      validateFunction={(e) => checkError(e)}
    />
    <div>{credencialesError.usernameError}</div>
    <InputText
      // Cada input escoge su diseño en base a si hay un error o no en el hook de errores

      className={
        credencialesError.emailError === ""
          ? "inputBasicDesign"
          : "inputBasicDesign inputErrorDesign"
      }
      type={"email"}
      name={"email"}
      placeholder={"email..."}
      required={true}
      changeFunction={(e) => inputHandler(e)}
      validateFunction={(e) => checkError(e)}
    />
    <div>{credencialesError.emailError}</div>
    <InputText
      // Cada input escoge su diseño en base a si hay un error o no en el hook de errores
      className={
        credencialesError.passwordError === ""
          ? "inputBasicDesign"
          : "inputBasicDesign inputErrorDesign"
      }
      type={"password"}
      name={"password"}
      placeholder={"password..."}
      required={true}
      changeFunction={(e) => inputHandler(e)}
      validateFunction={(e) => checkError(e)}
    />
    <div>{credencialesError.passwordError}</div>

    <div
      className={
        registerAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
      }
      onClick={userRegister}
   
    >
      <button> Register me!</button>
    </div>
  </div>
);
    }
  

