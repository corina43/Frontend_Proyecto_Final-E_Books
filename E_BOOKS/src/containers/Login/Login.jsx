import React, { useState, useEffect } from "react";
import { logMe } from "../../services/apiCalls";
import "./Login.css";

//Importo métodos de Redux
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../../containers/User/userSlice";

import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { decodeToken } from "react-jwt";

export const Login = () => {
  const navigate = useNavigate();

  //Instancio Redux en modo escritura y lectura
  const dispatch = useDispatch();
  //const credentialsRdx = useSelector(userData);

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });


  const [welcome, setWelcome] = useState("");

  // useEffect(() => {
  //   if (credentialsRdx?.credentials?.token) {
  //     //Si No token...home redirect
  //     navigate("/");
  //   }
  // }, []);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {
    console.log('Aqui van las validaciones')
  };

  const logeame = () => {
    logMe(credenciales)
      .then((respuesta) => {
        console.log(respuesta);
        let decode = decodeToken(respuesta.data.data)
        
        let datosBackend = {
          token: respuesta.data.data,
          usuario: decode,
        };
        let nombre = datosBackend.usuario.email;
        console.log('datosBackend');
        console.log(datosBackend);
        //Este es el momento en el que guardo en REDUX
        dispatch(login({ credentials: datosBackend }));
        setWelcome(`Bienvenid@ de nuevo ${nombre}`);
      
        //Redirección a Home
        setTimeout(() => {
          navigate("/");
        }, 5000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="loginDesign">
      {welcome !== "" ? (
        <div>{welcome}</div>
      
      ) : (
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              className="loginInput"
              type="email"
              name="email"
              placeholder="Email..."
              required={true}
              onChange={(e) => inputHandler(e)}
              onBlur={(e) => checkError(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              className="loginInput"
              type="password"
              name="password"
              placeholder="Contraseña..."
              required={true}
              onChange={(e) => inputHandler(e)}
              onBlur={(e) => checkError(e)}
            />
          </Form.Group>

          <Button className="btnLogin" variant="primary " onClick={() => logeame()}>
            {""}
            Iniciar sesión
          </Button>
        </Form>
      )}
    </div>
  );
};
