import React, { useState, useEffect } from "react";

import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { userData } from "../User/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { testErrores } from "../../common/helpers/usefull";
import axios from "axios";
import { useJwt } from "react-jwt";
import { Col, Container, Row } from "react-bootstrap";



 export const Register = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem("jwt")
    let {decodedToken} = useJwt("jwt")
  
    if(token) {
      navigate('/')
    }
  
  
    const [user, setUser] = useState({
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
    //   password2: "",
    });
  
    const [userError, setUserError] = useState({
        nombreerror: "",
        apellidoerror: "",
        emailerror: "",
        fecha_nacimientoerror: "",
        fecha_registroerror: "",
        ciudaderror: "",
        paiserror: "",
        generos_preferidoserror: "",
        biografiaerror: "",
        passworderror: "",
        // password2error: "",
        incompleteerror: "",
        emailAlreadyInBBDD: "",
    });
    const root = "http://localhost:3009"
    const createUserProfile = async (body) => {
      let res = await axios.post(`${root}/auth/register`, body
        
      );
      navigate("/")
    };
 
    //Handlers//
  
    const inputHandler = (e) => {
      setUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    const errorHandler = (field, value, type, password1) => {
      let error = "";
      error = testErrores(value, type, password1);
      setUserError((prevState) => ({
        ...prevState,
        [field + "error"]: error,
      }));
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (validateBody(body)) {
        setUserError((prevState) => ({
          ...prevState,
          incompleteerror: "",
        }));
        createUserProfile(body)
        .then((created) => console.log(created))
        .catch((error) => {setUserError(
          (prevState) => (
            {
              ...prevState,
              emailAlreadyInBBDD: error.response.data,
            }
          )
        );});
        
      } else {
        setUserError((prevState) => ({
          ...prevState,
          incompleteerror: "You must complete every field",
        }));
      }
    };
  
    const body = {
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        fecha_nacimiento: user.fecha_nacimiento,
        fecha_registro: user.fecha_registro,
        ciudad: user.ciudad,
        pais: user.pais,
        generos_preferidos: user.generos_preferidos,
        biografia: user.biografia,
        password: user.password,
        // password2: user.password2,
    };
  
    const validateBody = (body) => {
      if (
        body.nombre !== "" &&
        body.apellido !== "" &&
        body.email !== "" &&
        body.fecha_nacimiento !== "" &&
        body.fecha_registro !== "" &&
        body.ciudad !== "" &&
        body.pais !== "" &&
        body.generos_preferidos !== "" &&
        body.biografia !== "" &&
        body.password !== ""
      
      ) {
        return true;
      }
    };
  
    return (
      <form
        onSubmit={submitHandler}
        className="container-fluid registerDesign d-flex justify-content-center align-items-center"
      >
        <Container>
          <Row className="row d-flex justify-content-center align-content-center divContainerReg">
            {/* <Col className="col-md-4 imagesReg">
              <Image className="rayImageReg zoom" src={ray}></Image>
              <Image className="smileImageReg zoom" src={smile}></Image>
            </Col> */}
            <Col className="col-10 col-md-4 text-center align-items-center inputsBoxRegister">
  
              <div>{userError.incompleteerror}</div>
              <div>{userError.emailAlreadyInBBDD}</div>
  
              <h3 id="registerText">REGISTER </h3>
  
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Nombre ... |"
                name="nombre"
              />
              <div className="errorInput">{userError.nombreerror}</div>

              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Apellido ... |"
                name="apellido"
              />

               <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "email")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="Email"
                placeholder="  Email ... | "
                name="email"
              />
            <div className="errorInput">{userError.emailerror}</div>
               <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "date")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="Date"
                placeholder="  Fecha de nacimiento ... | "
                name="fecha_nacimiento"
              />
              <div className="errorInput">{userError.fecha_nacimientoerror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "date")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="Date"
                placeholder="  Fecha de registro ... | "
                name="fecha_registro"
              />
              <div className="errorInput">{userError.fecha_registroerror}</div> 
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Ciudad ... |"
                name="ciudad"
              />
              <div className="errorInput">{userError.ciudaderror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Pais ... |"
                name="pais"
              />
              <div className="errorInput">{userError.paiserror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Generos Preferidos ... |"
                name="generos_preferidos"
              />
              <div className="errorInput">{userError.generos_preferidoserror}</div>
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "text")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="text"
                placeholder="  Biografia ... |"
                name="biografia"
              />
              <div className="errorInput">{userError.biografiaerror}</div>
            
              <input
                onBlur={(e) =>
                  errorHandler(e.target.name, e.target.value, "password")
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="Password"
                placeholder="  Password ... |"
                name="password"
              />
              <div className="errorInput">{userError.passworderror}</div>
              {/* <input
                onBlur={(e) =>
                  errorHandler(
                    e.target.name,
                    e.target.value,
                    "password2",
                    user.password
                  )
                }
                onChange={inputHandler}
                className="inputRegDesign"
                type="Password"
                placeholder="  Repeat password ... |"
                name="password2"
              />
              <div className="errorInput">{userError.password2error}</div> */}
  
              <div className="col d-flex text-center align-items-center buttonDivReg">
                <button className="buttonDesignRegister">Register</button>
              </div>
            </Col>
  
            {/* <Col className="col-md-4 imagesReg">
              <Image className="mouthImageReg zoom" src={mouth}></Image>
              <Image className="mouseImageReg zoom" src={mouse}></Image>
            </Col> */}
            
          </Row>
        </Container>
      </form>
    );
  };
  
