import React, { useEffect, useState } from "react";
import { userData } from "../../userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../../../helpers/useful";
import { verUsuariosPerfil, editarPerfil} from "../../services/apiCalls";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { InputText } from "../../../components/InputText/InputText";

export const editarPerfil = (onEditarPerfil) => {
  const  ReduxCredentials = useSelector(userData);
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([]);
  

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [valiusuario, setValiusuario] = useState({
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
       nombreError: true,
       apellidoError: true,
       emailError: true,
       fecha_nacimientoError: true,
       fecha_registroError: true,
       ciudadError: true,
       paisError: true,
       generos_preferidosError: true,
       biografiaError: true,
  });

  const [registerAct, setRegisterAct] = useState(false);
  const [welcome, setWelcome] = useState("");
  useEffect(() => {
    for (let error in userError) {
      if (userError[error] != "") {
        setRegisterAct(false);
        return;
      }
    }

    for (let empty in user) {
      if (user[empty] === "") {
        setRegisterAct(false);
        return;
      }
    }

    for (let validated in valiuser) {
      if (valiuser[validated] === false) {
        setRegisterAct(false);
        return;
      }
    }
    setRegisterAct(true);
  });

  const checkError = (e) => {
    let error = "";
    let checked = validate(
      e.target.name,
      e.target.value,
      e.target.required
    );

    error = checked.message;
    setValiusuario((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setUsuarioError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };
  useEffect(() => {
    if (usuarios.length === 0) {
        console.log(ReduxCredentials?.credentials?.token)
      verUsuariosPerfil(ReduxCredentials?.credentials?.token)
        .then((result) => {
          console.log(result.data,"holaaaaaaaaaa");
          console.log("esto es nOMBRE", result.data.apellido);
          setUsuarios({

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
        setUsuarios(result.data)
        console.log("esto es resulatado", result.data.biografia);
    }
)
        
        .catch((error) => console.log(error));
    };
  }, [usuarios]);
  console.log(usuarios, "usuarios info");
}







const updateUser = () => {
  try {
    profileUpdate(user, userRedux.credentials.token);
    setWelcome(`Correctly Updated Profile`);
    setTimeout(() => {
      onProfileUpdate();
    }, 1500);
  } catch (error) {
    setWelcome(`Updated Profile Error`);
    setTimeout(() => {
      onProfileUpdate();
    }, 1500);
  }
};

