
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

<Container fluid className='miPrest'>
<Row>
  {prestamos.map((prestamo) => (
    <Col className='miPrestamo' key={prestamo.id} md={4} sm={6} xs={12}>
      <Card className="tarjeta">
        <Card.Img className="tarjeta-img-top" src={prestamo.Producto.poster_path} alt={prestamo.Producto.titulo} />
        <Card.Body className="tarjeta-body">
          <Card.Title className="tarjeta-header">{prestamo.Producto.titulo}</Card.Title>
          <span className="textColor">Fecha inicio - fin: </span>
          <Card.Text>{prestamo.fecha_inicio} - {prestamo.fecha_fin}</Card.Text>
          <span className="textColor">Comentario: </span>
          <Card.Text>{prestamo.comentario_producto}</Card.Text>
        </Card.Body>
        <Card.Footer className="tarjeta-footer">
          <FontAwesomeIcon icon={faStar} />
          <Card.Text>{prestamo.puntuacion}</Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  ))}
</Row>
</Container>
);
};




 export default Prestamos;

