import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
//import { UpdateGame } from "../layout/games/UpdateGame";
//import { DeleteGames } from "../layout/games/DeleteGames";

function BookCard({ productos }) {
  const [remove, setRemove] = useState(false);
  const handleCloseRemove = () => setRemove(false);
  const handleShowRemove = () => setRemove(true);
//   const hola = "hola"

  const [update, setUpdate] = useState(false);
  const handleCloseUpdate = () => setUpdate(false);
  const handleShowUpdate = () => setUpdate(true);




  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productos.poster_path} />
      <Card.Body>

      
        <ul>
          {/* <li>
            <span className="textColor">Producto ID: </span>
            {productos.id}
          </li> */}
          <li>
            <span className="textColor">Titulo: </span>
            {productos.titulo}
          </li>
          <li>
            <span className="textColor">Autor: </span>
            {productos.autor}
          </li>
         <li>
            <span className="textColor">Descripcion: </span>
            {productos.descripcion}
          </li>
          <li>
            <span className="textColor">Fecha Publicacion: </span>
            {productos.fecha_publicacion}
          </li>
          <li>
            <span className="textColor">Tipo: </span>
            {productos.tipo}
          </li>
          <li>
            <span className="textColor">Categoria: </span>
            {productos.categoria}
          </li>
          <li>
            <span className="textColor">Genero: </span>
            {productos.genero}
          </li>
          {/* <li>
            <span className="textColor">Duracion: </span>
            {productos.duracion}
          </li>
          <li>
            <span className="textColor">Formato: </span>
            {productos.formato}
          </li> */}
        </ul>
        {/* <Button variant="danger" onClick={handleShowRemove}>
          Delete Game
        </Button>
        <Modal show={remove} onHide={handleCloseRemove}>
          <Modal.Header closeButton>
            <Modal.Title>You Sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body><DeleteGames></DeleteGames></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseRemove}>
              Nope
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={handleShowUpdate}>
        Update Game
      </Button>
      <Modal show={update} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update Game</Modal.Title>
        </Modal.Header>
        <Modal.Body><UpdateGame></UpdateGame></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate }>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
      </Card.Body>
    </Card>
  );
}

export default BookCard;
