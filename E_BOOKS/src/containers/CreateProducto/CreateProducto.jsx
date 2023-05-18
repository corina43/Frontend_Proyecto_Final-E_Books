import React, { useState } from 'react';
import axios from 'axios';
import './CreateProducto.css'
import { InputText } from "../../common/InputText/InputText";
const CrearProductoForm = () => {

  const [producto, setProducto] = useState({
    titulo: '',
    autor: '',
    descripcion: '',
    fecha_publicacion: '',
    tipo: '',
    categoria: '',
    genero: '',
    poster_path: '',
  });

  const [mensajeExito, setMensajeExito] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProducto({ ...producto, [name]: value });
  };

  const crearProducto = async () => {
    const root = "http://localhost:3009";
    try {
      // Enviar la solicitud para crear el producto
      const response = await axios.post(`${root}/productos/newproducto`, producto);
      console.log(response.data); 

      // Restablecer el formulario después de crear el producto
      setProducto({
        titulo: '',
        autor: '',
        descripcion: '',
        fecha_publicacion: '',
        tipo: '',
        categoria: '',
        genero: '',
        poster_path: '',
      });
        // Mostrar mensaje de éxito
      setMensajeExito('¡Producto creado exitosamente!');
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    crearProducto();
  };

  return (
    <div className='containerProd'>
      <h2>Crear Producto</h2>
      {mensajeExito && <div className="alert alert-success">{mensajeExito}</div>}
      <form onSubmit={handleSubmit}>
        <div className="prodtc">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            value={producto.titulo}
            onChange={handleChange}
          />
               <label htmlFor="autor" className="form-label">
            Autor
          </label>
          <input
            type="text"
            className="form-control"
            id="autor"
            name="autor"
            value={producto.autor}
            onChange={handleChange}
          />
               <label htmlFor="descripcion" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={producto.descripcion}
            onChange={handleChange}
          />
               <label htmlFor="fecha_publicacion" className="form-label">
            Fecha Publicacion
          </label>
          <input
            type="Date"
            className="form-control"
            id="fecha_publicacion"
            name="fecha_publicacion"
            value={producto.fecha_publicacion}
            onChange={handleChange}
          />

        
          
               <label htmlFor="tipo" className="form-label">
            Típo
          </label>
          <input
            type="text"
            className="form-control"
            id="tipo"
            name="tipo"
            value={producto.tipo}
            onChange={handleChange}
          />
               <label htmlFor="categoria" className="form-label">
            Categoria
          </label>
          <input
            type="text"
            className="form-control"
            id="categoria"
            name="categoria"
            value={producto.categoria}
            onChange={handleChange}
          />
               <label htmlFor="genero" className="form-label">
            Genero
          </label>
          <input
            type="text"
            className="form-control"
            id="genero"
            name="genero"
            value={producto.genero}
            onChange={handleChange}
          />
             
          <label htmlFor="poster_path" className="form-label">
    Poster Path (Dirección de la imagen)
  </label>
  <input
    type="text"
    className="form-control"
    id="poster_path"
    name="poster_path"
    value={producto.poster_path}
    onChange={handleChange}
  />
        </div>
       
        <button type="submit" className="btn-primary ">
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default CrearProductoForm;
