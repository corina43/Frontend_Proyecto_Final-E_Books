import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userData } from "../User/userSlice";
import { detailData } from "../Detail/detailSlice";
import { EliminarUsuario } from "../../services/apiCalls";

export const DeleteUsuarios = () => {
  // REDUX USER DATA && USER DETAILS
  const ReduxCredentials = useSelector(userData);
  const userDetails = useSelector(detailData);
  const [welcome, setWelcome] = useState("");
  const navigate = useNavigate();
  let params = userDetails.choosenObject.id;


  const handleDelete = async (userId) => {
    setIsLoading(true);
    setError('');

    try {
     
      await EliminarUsuario(userId, ReduxCredentials?.credentials?.token);

    
      setWelcome(`Eliminado correctamente: ${userDetails.choosenObject.email}`);
      setTimeout(() => {
        navigate("/usuarios/todos/");
      }, 1500);
    } catch (error) {
  
      console.log(error);
      setWelcome(`No se puede eliminar un usuario administrador`);
      setTimeout(() => {
        setWelcome("");
        navigate("/usuarios/todos");
      }, 1500);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <>
      <div>
        {welcome !== "" ? (
          <div className="divHola">
            <Card>
              <Card.Header>{welcome}</Card.Header>
            </Card>
          </div>
        ) : (
          <div className="btnEliminar">
            <div className="admin"><h4> ¿ Quieres eliminar un usuario ?</h4></div>
            <Button variant="light" onClick={() => setShowModal(true)}>
              Eliminar Usuario
            </Button>
          </div>
        )}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Ingrese el ID del usuario a eliminar:</Form.Label>
            <Form.Control
              type="text"
              value={userId}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {error && <div className="text-danger">{error}</div>}
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => handleDelete(userId)} disabled={isLoading}>
            {isLoading ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
