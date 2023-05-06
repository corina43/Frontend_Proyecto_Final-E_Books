
import React, { useState, useEffect } from 'react';
import { getPrestamos } from '../../services/apiCalls';
// import { Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userData } from "../../containers/User/userSlice";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './Prestamos.css'

export const Prestamos = (id_usuario) => {

  const [prestamos, setPrestamos] = useState([]);
  const ReduxCredentials = useSelector(userData);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  
    if (prestamos.length === 0) {
      getPrestamos(ReduxCredentials?.credentials?.token)
        .then(
          result => {
            console.log("Resultado completo:", result.data.data);
          

            setPrestamos(result.data.data)
            console.log(result.data,"hiiiiiiiiiiiii")
          }
        )
        .catch(error => console.log(error));
    }
  }, [prestamos])
  console.log(prestamos,"saliiiiiiiir");

  const selected = (prestamo) => {
    dispatch(addChoosen({ choosenObject: prestamo }))
    console.log(prestamo,'tengo sueño')
   
  }


  return (

    <>
   
    {prestamos.map((prestamo) => (
    
  <div className="tarjeta" key={prestamo.id}>
    <img className="tarjeta-img-top" src={prestamo.Producto.poster_path} alt={prestamo.Producto.titulo} />
    <div className="tarjeta-body">
      <h5 className="tarjeta-header">{prestamo.Producto.titulo}</h5>
      <p className="card-text">{prestamo.fecha_inicio} - {prestamo.fecha_fin}</p>
      <p className="card-text">{prestamo.comentario_producto}</p>
    </div>
    <div className="tarjeta-footer">
      <FontAwesomeIcon icon={faStar} />
      <p className="card-text">{prestamo.puntuacion}</p>
    </div>
  </div>
 
))}

  </>
);
};




 export default Prestamos;

