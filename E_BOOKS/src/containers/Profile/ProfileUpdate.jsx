import React, { useEffect, useState } from "react";
import { userData } from "../../userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validate } from "../../../helpers/useful";
import { getMyProfile, profileUpdate } from "../../services/apiCalls";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { InputText } from "../../../components/InputText/InputText";

export const editarPerfil = () => {
  const credentialsRdx = useSelector(userData);
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

