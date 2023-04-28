import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductView = () => {
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState('');

  const getAllProducts = async () => {
    try {
      const response = await axios.get('localhost:3009/productos');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
    }
  };

  const getProductByTitulo = async (titulo) => {
    try {
      const response = await axios.get(`localhost:3009/productos/titulo/${titulo}`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener producto por título:', error);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`/api/productos/id/${id}`);
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
    getProductByTitulo(search);
  };

  return (
    <div>
      <h1>Productos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar por título"
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.titulo} - {producto.autor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductView;

