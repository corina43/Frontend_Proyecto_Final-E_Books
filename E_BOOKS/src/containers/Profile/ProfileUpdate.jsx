import React, { useEffect, useState } from "react";
import { userData } from "../User/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../../common/helpers/usefull";
import { verUsuariosPerfil, editarPerfil } from "../../services/apiCalls";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { InputText } from "../../common/InputText/InputText";
import './ProfileUpdate.css'

export const EditarPerfil = ({ }) => {
  const ReduxCredentials = useSelector(userData);
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState({});
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    fecha_nacimiento: "",
    fecha_registro: "",
    ciudad: "",
    pais: "",
    generos_preferidos: "",
    biografia: "",
  });

  const [valiUsuario, setValiUsuario] = useState({
    nombreVali: true,
    apellidoVali: true,
    emailVali: true,
    fecha_nacimientoVali: true,
    fecha_registroVali: true,
    ciudadVali: true,
    paisVali: true,
    generos_preferidosVali: true,
    biografiaVali: true,
  });

  const [usuarioError, setUsuarioError] = useState({
    nombreError: "",
    apellidoError: "",
    emailError: "",
    fecha_nacimientoError: "",
    fecha_registroError: "",
    ciudadError: "",
    paisError: "",
    generos_preferidosError: "",
    biografiaError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);
  const [welcome, setWelcome] = useState("");

  useEffect(() => {
    for (let error in usuarioError) {
      if (usuarioError[error] !== "") {
        setRegisterAct(false);
        return;
      }
    }

    for (let empty in usuario) {
      if (usuario[empty] === "") {
        setRegisterAct(false);
        return;
      }
    }

    for (let validated in valiUsuario) {
      if (valiUsuario[validated] === false) {
        setRegisterAct(false);
        return;
      }
    }

    setRegisterAct(true);
  }, [usuario, usuarioError, valiUsuario]);

  const checkError = (e) => {
    const { name, value, required } = e.target;
    const checked = validate(name, value, required);

    setValiUsuario((prevState) => ({
      ...prevState,
      [name + "Vali"]: checked.validated,
    }));

    setUsuarioError((prevState) => ({
      ...prevState,
      [name + "Error"]: checked.message,
    }));
  };
  const inputHandler = (e) => {
    setUsuario((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
  
    if (usuario.nombre === ""){
      verUsuariosPerfil(ReduxCredentials?.credentials?.token)
        .then((result) => {
          setUsuario(result.data);
          console.log(result.data,'holaaaaaaaaaaaaaaaaa')
          setUsuario({
            nombre: result.data.nombre,
            apellido: result.data.apellido,
            email: result.data.email,
            fecha_nacimiento: result.data.fecha_nacimiento,
            fecha_registro: result.data.fecha_registro,
            ciudad: result.data.ciudad,
            pais: result.data.pais,
            generos_preferidos: result.data.generos_preferidos,
            biografia: result.data.biografia,
          });
        })
        .catch((error) => console.log(error));
    }
  }, [usuario, ReduxCredentials?.credentials?.token]);
console.log(usuario, ReduxCredentials?.credentials?.token,'jooooooooooo')

  const updateUser = () => {
    try {
      editarPerfil(usuario, ReduxCredentials?.credentials?.token);
      setWelcome("Perfil actualizado correctamente");
      setTimeout(() => {
        editarPerfil();
      }, 1500);
    } catch (error) {
      setWelcome("Error al actualizar el perfil");
      setTimeout(() => {
        editarPerfil();
      }, 1500);
    }
  };
  
 
  return (
    <>
      <div>
        {welcome !== "" ? (
          <div className="divWellcome">
            <Card>
              <Card.Header>{welcome}</Card.Header>
            </Card>
          </div>
        ) : (
          <div>
            <Container className="containerUpt">
              <Row className="updateProfile">
                <Col>
                  <Form>
                    <Form.Group>
                      <Form.Label>Nombre:</Form.Label>
                      <InputText
                        className={"inputLogin"}
                        type={"text"}
                        name={"nombre"}
                        maxLength={70}
                        placeholder={usuarios.nombre}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <div>{usuarioError.nombreError}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Apellido:</Form.Label>
                      <InputText
                        className={"inputLogin"}
                        type={"text"}
                        name={"apellido"}
                        maxLength={70}
                        placeholder={usuarios.apellido}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <div>{usuarioError.apellidoError}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email:</Form.Label>
                      <InputText
                        className={"inputLogin"}
                        type={"email"}
                        name={"email"}
                        maxLength={70}
                        placeholder={usuarios.email}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <div>{usuarioError.emailError}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Fecha de nacimiento:</Form.Label>
                      <InputText
                        className={"inputLogin"}
                        type={"date"}
                        name={"fecha_nacimiento"}
                        placeholder={usuarios.fecha_nacimiento}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <div>{usuarioError.fecha_nacimientoError}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Fecha de registro:</Form.Label>
                      <InputText
                        className={"inputLogin"}
                        type={"date"}
                        name={"fecha_registro"}
                        maxLength={70}
                        placeholder={usuarios.fecha_registro}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <div>{usuarioError.fecha_registroError}</div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Ciudad:</Form.Label>
                      <InputText
                        className={"inputLogin"}
                        type={"text"}
                        name={"ciudad"}
                        maxLength={70}
                        placeholder={usuarios.ciudad}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)}
                      />
                      <div>{usuarioError.ciudadError}</div>
                    </Form.Group>
                    <Form.Group>
                   <Form.Label>País:</Form.Label>
                    <InputText
                      className={"inputLogin"}
    type={"text"}
    name={"pais"}
    maxLength={70}
    placeholder={usuarios.pais}
    changeFunction={(e) => inputHandler(e)}
    blurFunction={(e) => checkError(e)}
  />
  <div>{usuarioError.paisError}</div>
</Form.Group>
<Form.Group>
  <Form.Label>Géneros preferidos:</Form.Label>
  <InputText
    className={"inputLogin"}
    type={"enum"}
    name={"generos_preferidos"}
    maxLength={70}
    placeholder={usuarios.generos_preferidos}
    changeFunction={(e) => inputHandler(e)}
    blurFunction={(e) => checkError(e)}
  />
  <div>{usuarioError.generos_preferidosError}</div>
</Form.Group>
<Form.Group>
  <Form.Label>Biografía:</Form.Label>
  <InputText
    className={"inputLogin"}
    type={"text"}
    name={"biografia"}
    maxLength={70}
    placeholder={usuarios.biografia}
    changeFunction={(e) => inputHandler(e)}
    blurFunction={(e) => checkError(e)}
  />
  <div>{usuarioError.biografiaError}</div>
</Form.Group>
<br />
<div className="buttonUpdate">
  <Button
    className=""
    variant="primary"
    onClick={() => updateUser()}
  >
    Actualizar Usuario
  </Button>
</div>
</Form>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  </>
);
        }
