
import React, { useState, useEffect } from 'react';
import { getPrestamos } from '../../services/apiCalls';
import { Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userData } from "../../containers/User/userSlice";


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



    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Usuario</th>
          {/* <th>Producto</th> */}
          <th>Fecha de préstamo</th>
          <th>Fecha de devolución</th>
        </tr>
      </thead>
      <tbody>
        {prestamos.map((prestamo) => (
          <tr key={prestamo.id}>
            <td>{prestamo.id}</td>
            {/* <Card style={{ width: "18rem" }}> */}
      <Card.Img variant="top" src={prestamo.Producto.poster_path} />

            
             <td>{prestamo.Producto.titulo}</td> 
             <td>{prestamo.Producto.poster_path}</td> 
            <td>{prestamo.fecha_inicio}</td>
            <td>{prestamo.fecha_fin}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

 export default Prestamos;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table } from 'react-bootstrap';

// const Prestamos = () => {
//   const root = "http://localhost:3009"
//   const [prestamos, setPrestamos] = useState([]);

//   useEffect(() => {
//     const getPrestamos = async () => {
//       const response = await axios.get(`${root}/prestamos`);
//       setPrestamos(response.data.data);
//     };
//     getPrestamos();
//   }, []);

//   return (
//     <div>
//       <h1>Mis préstamos</h1>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Producto</th>
//             <th>Monto</th>
//             <th>Fecha de préstamo</th>
//           </tr>
//         </thead>
//         <tbody>
//           {prestamos.map((prestamo) => (
//             <tr key={prestamo.id}>
//               <td>{prestamo.id}</td>
//               <td>{prestamo.Producto.nombre}</td>
//               <td>{prestamo.monto}</td>
//               <td>{prestamo.fecha_inicio}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Prestamos;
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { userData } from "../../containers/User/userSlice";
// import { prestamoData, edit } from '../../containers/Prestamos/PrestamoSlice';
// import { getPrestamos  } from "../../services/apiCalls";
// //import './AppointmentPatient.css'

 
// export const Prestamos = () => {


//   const dispatch = useDispatch();
//   const prestamos = useSelector(prestamoData);
//   const user = useSelector(userData);



//   useEffect(() => {
//     if (prestamos.length === 0) {
//       getPrestamos(ReduxCredentials?.credentials?.token)
//         .then((message) => {
//           setPrestamos(message.data.data[0].Prestamos)
//         })
//         .catch((error) => console.log(error));
//     }
//   }, [prestamos]);

//   return (
//     <div className="appointmentsPatient-container">
//       <h3 className="appointments-title">Citas Pendientes</h3>
    
// {prestamos?.data?.data[0]?.Prestamos ? (
//         <>
//           {prestamos.data.data[0].Prestamos.map((data) => (
//             <div className="appointment" key={data.id}>
//               <p className="datos">Fecha y hora: <br/> {data.date_time}</p>
//               <div> {data?.Usuarios?.nombre}</div>
              
             
//             </div>
//           ))}
//         </>
//       ) : (
//         <p>No tienes citas .</p>
//       )}
//     </div>
//   );
// };