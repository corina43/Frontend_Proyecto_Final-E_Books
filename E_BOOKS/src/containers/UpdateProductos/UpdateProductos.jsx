import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateProducto.css'


const EditarProducto = ({ id }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha_publicacion, setFecha_Publicacion] = useState('');
  const [tipo, setTipo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [genero, setGenero] = useState('');
  const [poster_path, setPoster_Path] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const root = "http://localhost:3009"
  useEffect(() => {
    updateProducto();
  }, []);

 const updateProducto = async ({id}) => {
    try {
        const response = await axios.put(`${root}/productos/productos/${id}`)  
    //   const response = await axios.get(`${root}/productos/${productId}`);
      const producto = response.data;

      setTitulo(producto.titulo);
      setAutor(producto.autor);
      setDescripcion(producto.descripcion);
      setFecha_Publicacion(producto.fecha_publicacion);
      setTipo(producto.tipo);
      setCategoria(producto.categoria);
      setGenero(producto.genero);
      setPoster_Path(producto.poster_path)
     
    } catch (error) {
      setError('Error al obtener los detalles del producto');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
       const response = await axios.put(`${root}/productos/productos/${id}`, {
        titulo,
        autor,
        descripcion,
        fecha_publicacion: Fecha_Publicacion,
        tipo,
        categoria,
        genero,
        poster_path,
       
      });

      setSuccess(response.data.message);
    } catch (error) {
      setError('Error al actualizar el producto');
    }
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="autor" className="form-label">
            Autor
          </label>
          <input
            type="text"
            className="form-control"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
          
        <label htmlFor="descripcion" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
               <label htmlFor="fecha_publicacion" className="form-label">
            Fecha Publicacion
          </label>
          <input
            type="date"
            className="form-control"
            id="fecha_publicacion"
            name="fecha_publicacion"
            value={fecha_publicacion}
            onChange={(e) => setFecha_Publicacion(e.target.value)}
          />
               <label htmlFor="tipo" className="form-label">
            Típo
          </label>
          <input
            type="text"
            className="form-control"
            id="tipo"
            name="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
               <label htmlFor="categoria" className="form-label">
            Categoria
          </label>
          <input
            type="text"
            className="form-control"
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
               <label htmlFor="genero" className="form-label">
            Genero
          </label>
          <input
            type="text"
            className="form-control"
            id="genero"
            name="genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          />
             
          <label htmlFor="poster_path" className="form-label">
    Poster Path (Dirección de la imagen)
  </label>
  <input
    type="text"
    className="form-control"
    id="poster_path"
    name="poster_path"
    value={poster_path}
    onChange={(e) => setPoster_Path(e.target.value)}
  />
        </div>
      
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
      </form>
    </div>
  );
};

 export default EditarProducto;
