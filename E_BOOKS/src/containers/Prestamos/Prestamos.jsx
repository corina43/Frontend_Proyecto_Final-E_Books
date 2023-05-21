
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
         
          

            setPrestamos(result.data.data)
            
          }
        )
        .catch(error => console.log(error));
    }
  }, [prestamos])


  const selected = (prestamo) => {
    dispatch(addChoosen({ choosenObject: prestamo }))
  
   
  }


  return (

<Container fluid className='miPrest'>
<Row>

  {prestamos.map((prestamo) => (
    <Col className='miPrestamo' key={prestamo.id} >
      <Card className="tarjeta">
        <Card.Img className="tarjeta-imagen-top" src={prestamo.Producto.poster_path} alt={prestamo.Producto.titulo} />
        <Card.Body className="tarjeta-body">
         
          <span className="textColor">Fecha inicio - fin: </span>
          <Card.Text className='txt'>{prestamo.fecha_inicio} - {prestamo.fecha_fin}</Card.Text>
          <span className="textColor">Comentario: </span>
          <Card.Text className='txt'>{prestamo.comentario_producto}</Card.Text>
          <FontAwesomeIcon className='icon' icon={faStar} />
          <Card.Text className='txt'>{prestamo.puntuacion}</Card.Text>
        </Card.Body>

        
    
      </Card>
    </Col>
  ))}
</Row>
</Container>
);
};




 export default Prestamos;

