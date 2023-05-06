import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


function PrestamosCard({ prestamos }) {
  const [remove, setRemove] = useState(false);
  const handleCloseRemove = () => setRemove(false);
  const handleShowRemove = () => setRemove(true);
//   const hola = "hola"

  const [update, setUpdate] = useState(false);
  const handleCloseUpdate = () => setUpdate(false);
  const handleShowUpdate = () => setUpdate(true);




  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src={prestamos.Productos.poster_path} /> */}
      <Card.Body>

      
        <ul>
         
          <li>
            <span className="textColor">Id prestamo: </span>
            {prestamos.id}
          </li>
          <li>
            <span className="textColor">Id usuario: </span>
            {prestamos.id_usuario}
          </li>
          <li>
            <span className="textColor">Id producto: </span>
            {prestamos.id_producto}
          </li>
        
          <li>
            <span className="textColor">Fecha inicio: </span>
            {prestamos.fecha_inicio}
          </li>
          <li>
            <span className="textColor">Fecha fin: </span>
            {prestamos.fecha_inicio}
          </li>
          <li>
            <span className="textColor">Puntuacion: </span>
            {prestamos.puntuacion}
          </li>
          <li>
            <span className="textColor">Comentario: </span>
            {prestamos.comentario_producto}
          </li>
       
          
        </ul>
       
      </Card.Body>
    </Card>
  );
}

export default PrestamosCard;