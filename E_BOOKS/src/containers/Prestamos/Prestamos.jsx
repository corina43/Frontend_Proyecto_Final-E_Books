
import React, { useState, useEffect } from 'react';
import { ObtenerHistorialPrestamos } from '../../services/apiCalls';
import { Table } from 'react-bootstrap';

const HistorialPrestamos = ({ id_usuario }) => {
  const [historialPrestamos, setHistorialPrestamos] = useState([]);
//   const user = useSelector(userData);
  useEffect(() => {
    const obtenerHistorial = async () => {
      try {
     
        setHistorialPrestamos(result.data.data);
        console.log(result.data.data,'oliiiiiiiiiii')
      } catch (error) {
        console.error(error);
      }
    };
    obtenerHistorial();
  }, [id_usuario]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          <th>Producto</th>
          <th>Fecha de préstamo</th>
          <th>Fecha de devolución</th>
        </tr>
      </thead>
      <tbody>
        {historialPrestamos.map((prestamo) => (
          <tr key={prestamo.id}>
            <td>{prestamo.id}</td>
            <td>{prestamo.Usuarios.nombre}</td>
            <td>{prestamo.Productos.nombre}</td>
            <td>{prestamo.fecha_inicio}</td>
            <td>{prestamo.fecha_fin}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

 export default ObtenerHistorialPrestamos;

