// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getAll } from "../../services/apiCalls";
// import { userData } from "../../containers/User/userSlice";
// import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
// import BookCard from "../../common/BookCard/BookCard";
// import { addChoosen } from "../../containers/Detail/detailSlice";
// import '../VistaProductos/VistaProductos.css'

// export const Productos = () => {

//   const [productos, setProductos] = useState([]);
//   const ReduxCredentials = useSelector(userData);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
  
//     if (productos.length === 0) {
//       getAll(ReduxCredentials?.credentials?.token)
//         .then(
//           result => {
//             console.log("Resultado completo:", result.data);
          

//             setProductos(result.data)
//             console.log(result.data,"hiiiiiiiiiiiii")
//           }
//         )
//         .catch(error => console.log(error));
//     }
//   }, [productos])
//   console.log(productos,"saliiiiiiiir");

//   const selected = (producto) => {
//     dispatch(addChoosen({ choosenObject: producto }))
//     console.log(producto)
   
//   }

//   return (
//     <>
//       <Container fluid >
//       <h1>Productos</h1>
//         <Row>
//         <div className="book-card-container "> 
//           {productos.map((producto) => {
//             console.log(producto, "hola soy libro");
//             return (
//               <Col className="libro"  onClick={() => selected(producto)} key={productos.id}>
           

//           <CardImg variant="top" src={producto.poster_path}
//             style={{ width: "20rem" }}
//             key={producto.id}
//             titulo={producto.titulo}
//             autor={producto.autor}
//             descripcion={producto.descripcion}
//             categoria={producto.categoria}
//             genero={producto.genero}
        
//           />
 
//               </Col>
//             );
//           })}
//             </div>
//         </Row>

//       </Container>
//     </>
//   );
// }





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../services/apiCalls";
import { userData } from "../../containers/User/userSlice";
import { Card, CardGroup, CardImg, Col, Container, Row } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import { addChoosen } from "../../containers/Detail/detailSlice";
import '../VistaProductos/VistaProductos.css';



export const Productos = () => {
  const root = "http://localhost:3009"
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState('');

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${root}/productos`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
    }
  };

  const getProductByAutor = async (autor) => {
    try {
      const response = await axios.get(`${root}/productos/autor/${autor}`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener producto por autor:', error);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`${root}/productos/id/${id}`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener producto por ID:', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getProductByAutor(search);
  };

  const selected = (producto) => {
    dispatch(addChoosen({ choosenObject: producto }))
  
   
  }
  const openModal = (producto) => {
    setSelectedProduct(producto);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  
  return (
    <div>
      <h1 className='hautor'>Busca los libros de tu autor preferido...</h1>
      <form className='formProductos' onSubmit={handleSubmit}>
        <input className='inputProductos'
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar por autor"
        />
        <button className='btnProductos' type="submit">Buscar</button>
      </form>
      <div className="book-card-container ">
        {productos.map((producto) => (
          <CardImg variant="top" src={producto.poster_path}
          style={{ width: "18rem" }}
            key={producto.id}
            titulo={producto.titulo}
            autor={producto.autor}
            descripcion={producto.descripcion}
            categoria={producto.categoria}
            genero={producto.genero}
            onClick={() => openModal(producto)}
          />
        ))}
      </div>
    
     {/* Modal  */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedProduct.titulo}</h2>
            <p>Autor: {selectedProduct.autor}</p>
            <p>Descripción: {selectedProduct.descripcion}</p>
            <p>Categoría: {selectedProduct.categoria}</p>
            <p>Genero: {selectedProduct.genero}</p>
            <p>Tipo: {selectedProduct.tipo}</p>
            <p>Fecha de Publicacion: {selectedProduct.fecha_publicacion}</p>
          </div>
        </div>
      )}
    </div>
  );
};






