import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll, updateProduct } from "../../services/apiCalls"; 
import { userData } from "../../containers/User/userSlice";
import { Col, Container, Row, Button, Modal, Form, CardImg } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import { addChoosen } from "../../containers/Detail/detailSlice";
import "./UpdateProducto.css";

export const EditarProductos = () => {
  const [productos, setProductos] = useState([]);
  const ReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [genero, setGenero] = useState("");
  const [posterPath, setPosterPath] = useState("");

  useEffect(() => {
    if (productos.length === 0) {
      getAll(ReduxCredentials?.credentials?.token)
        .then((result) => {
         
          setProductos(result.data);
        
        })
        .catch((error) => console.log(error));
    }
  }, [productos]);

  const openModal = (producto) => {
    setSelectedProduct(producto);
    setTitulo(producto.titulo);
    setAutor(producto.autor);
    setDescripcion(producto.descripcion);
    setFechaPublicacion(producto.fecha_publicacion);
    setTipo(producto.tipo);
    setCategoria(producto.categoria);
    setGenero(producto.genero);
    setPosterPath(producto.poster_path);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const selected = (producto) => {
    dispatch(addChoosen({ choosenObject: producto }));
  
    openModal(producto);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llama al endpoint de actualización del producto
      const updatedProduct = await updateProduct(selectedProduct.id, {
        titulo,
        autor,
        descripcion,
        fecha_publicacion: fechaPublicacion,
        tipo,
        categoria,
        genero,
        poster_path: posterPath,
      });

      // Actualiza el estado de los productos con los datos actualizados
      setProductos((prevProductos) =>
        prevProductos.map((producto) =>
          producto.id === updatedProduct.id ? updatedProduct : producto
        )
      );

      closeModal();
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container fluid>
      <h1>Actualizar Productos</h1>
        <Row>
          {productos.map((producto) => {
          
            return (
              <Col
                className="libro"
                onClick={() => selected(producto)}
                key={productos.id}
              >
   <CardImg variant="top" src={producto.poster_path}
            style={{ width: "18rem" }}
            key={producto.id}
            titulo={producto.titulo}
            autor={producto.autor}
            descripcion={producto.descripcion}
            categoria={producto.categoria}
            genero={producto.genero}
        
          />
              </Col>
            );
          })}
        </Row>
      </Container>

      {modalOpen && (
        <Modal show={modalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Actualizar producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTitulo">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formAutor">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formFechaPublicacion">
                <Form.Label>Fecha de Publicación</Form.Label>
                <Form.Control
                  type="text"
                  value={fechaPublicacion}
                  onChange={(e) => setFechaPublicacion(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formTipo">
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                  type="text"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formCategoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                  type="text"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGenero">
                <Form.Label>Género</Form.Label>
                <Form.Control
                  type="text"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPosterPath">
                <Form.Label>URL del Poster</Form.Label>
                <Form.Control
                  type="text"
                  value={posterPath}
                  onChange={(e) => setPosterPath(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Actualizar
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};







