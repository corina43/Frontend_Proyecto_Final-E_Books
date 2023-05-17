
import React, { useState, useEffect } from "react";
import { validate } from "../../common/helpers/usefull";
import { createUserProfile } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Alert, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap";



import "./Register.css";


export const Register = () => {

    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({
        nombre: "",
        apellido: "",
        email: "",
        fecha_nacimiento: "",
        fecha_registro: "",
        ciudad: "",
        pais: "",
        generos_preferidos: "",
        biografia: "",
        password: "",
       
    });
  
  
    const [credencialesError, setCredencialesError] = useState({
          nombreError: "",
          apellidoError: "",
          emailError: "",
          fecha_nacimientoError: "",
          fecha_registroError: "",
          ciudadError: "",
          paisError: "",
          generos_preferidosError: "",
          biografiaError: "",
          passwordError: "",
     
    });
    const [credencialesValido, setCredencialesValido] = useState({
      
      nombreValido: false,
      apellidoValido: false,
      emailValido: false,
      fecha_nacimientoValido: false,
      passwordValido: false
    });
  console.log(credencialesValido)
    const [registerAct, setRegisterAct] = useState(false);
  
    const inputHandler = (e) => {
  
      setCredenciales((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      
      }));
    };
  
  
   // 3 - Ejecutamos los useEffect
  
   useEffect(() => {
 
     console.log("Credenciales ahora vale......", credenciales);
  
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
  
 
  
     setCredencialesValido((prevState) => ({
       ...prevState,
       [e.target.name +'Valido']: validation.validated,
     }));
  
 
  
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

    <div className="containerRegister">
    <Form className="register-form">
      <h2>Registro</h2>
      <FormGroup>
        <FormLabel for="nombre">Nombre</FormLabel>
        <FormControl
          type={"text"}
          name={"nombre"}
          id={"nombre"}
          placeholder={"Nombre..."}
          required = {true}
           value={credenciales.nombre}
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => checkError(e)}
          invalid={credencialesError.nombreError !== ""}
        />
        {credencialesError.nombreError && (
          <Alert color="danger">{credencialesError.nombreError}</Alert>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel for="apellido">Apellido</FormLabel>
        <FormControl
          type="text"
          name="apellido"
          id="apellido"
          placeholder="Apellido..."
          required
          value={credenciales.apellido}
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => checkError(e)}
          invalid={credencialesError.apellidoError !== ""}
        />
        {credencialesError.apellidoError && (
          <Alert color="danger">{credencialesError.apellidoError}</Alert>
        )}
      </FormGroup>
    <FormGroup>
        <FormLabel for="email">Email</FormLabel>
        <FormControl
          type="email"
          name="email"
          id="email"
          placeholder="Email..."
          required
          value={credenciales.email}
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => checkError(e)}
          invalid={credencialesError.emailError !== ""}
        />
        {credencialesError.emailError && (
          <Alert color="danger">{credencialesError.emailError}</Alert>
        )}
      </FormGroup>
    
    <FormGroup>
      <FormLabel for="fecha_nacimiento">Fecha de nacimiento</FormLabel>
      <FormControl
        type="date"
        name="fecha_nacimiento"
        id="fecha_nacimiento"
        required
        value={credenciales.fecha_nacimiento}
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => checkError(e)}
        invalid={credencialesError.fecha_nacimientoError !== ""}
      />
      {credencialesError.fecha_nacimientoError && (
        <Alert color="danger">
          {credencialesError.fecha_nacimientoError}
        </Alert>
      )}
    </FormGroup>
<FormGroup>
      <FormLabel for="fecha_registro">Fecha de registro</FormLabel>
      <FormControl
        type="date"
        name="fecha_registro"
        id="fecha_registro"
        required
        value={credenciales.fecha_registro}
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => checkError(e)}
        invalid={credencialesError.fecha_registroError !== ""}
      />
      {credencialesError.fecha_registroError && (
        <Alert color="danger">
          {credencialesError.fecha_registroError}
        </Alert>
      )}
    </FormGroup>

    <FormGroup>
      <FormLabel for="ciudad">Ciudad</FormLabel>
      <FormControl
        type="text"
        name="ciudad"
        id="ciudad"
        placeholder="Ciudad..."
        value={credenciales.ciudad}
        onChange={(e) => inputHandler(e)}
      />
    </FormGroup>
    <FormGroup>
      <FormLabel for="pais">País</FormLabel>
      <FormControl
        type="text"
        name="pais"
        id="pais"
        placeholder="País..."
        value={credenciales.pais}
        onChange={(e) => inputHandler(e)}
      />
    </FormGroup>
    <FormGroup>
      <FormLabel for="generos_preferidos">Géneros preferidos</FormLabel>
      <FormControl
        type="text"
        name="generos_preferidos"
        id="generos_preferidos"
        placeholder="Géneros preferidos..."
        value={credenciales.generos_preferidos}
        onChange={(e) => inputHandler(e)}
      />
    </FormGroup>
    <FormGroup>
      <FormLabel for="biografia">Biografía</FormLabel>
      <FormControl
        type="textarea"
        name="biografia"
        id="biografia"
        placeholder="Biografía..."
        value={credenciales.biografia}
        onChange={(e) => inputHandler(e)}
      />
    </FormGroup>
    <FormGroup>
        <FormLabel for="password">Contraseña</FormLabel>
        <FormControl
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña..."
          required
          value={credenciales.password}
          onChange={(e) => inputHandler(e)}
          onBlur={(e) => checkError(e)}
          invalid={credencialesError.passwordError !== ""}
        />
        {credencialesError.passwordError && (
          <Alert color="danger">{credencialesError.passwordError}</Alert>
        )}
      </FormGroup>
    <Button color="primary" onClick={userRegister} disabled={!registerAct}>
      ¡Regístrate!
    </Button>
  </Form>
</div>
);

};


    


