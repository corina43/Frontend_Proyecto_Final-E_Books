import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch ,useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { adminData } from '../../containers/Admin/AdminSlice';
import { getAllPrestamos } from '../../services/apiCalls';
import './Admin.css'
import { Col, Container, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import { addChoosen } from "../../containers/Detail/detailSlice";
import { detailPrestamo } from '../../containers/Detail/detailSlice';

export const AdminPrestamos = () => {

    const ReduxCredentials = useSelector(userData);
    const isAdmin = useSelector(adminData)
    const navigate = useNavigate();
    

    // HOOKS
    const [prestamos, setPrestamos] = useState([]);
    
  

    useEffect(() => {

        if(prestamos.length === 0){

            getAllPrestamos(ReduxCredentials?.credentials?.token)
                .then(
                    result => {

                        setPrestamos(result.data.data.prestamos)                      
                        console.log(result.data.data.prestamos, "hola result")
                    }
                )
                .catch(error => console.log(error))

        }
    }, [prestamos]);
console.log(prestamos, "sou prestamos")
const selected = (prestamo) => {
    dispatch(addChoosen({ choosenObject: prestamo }))
    console.log(prestamo)
   
  }

    return (
      <>
      <Container fluid>
      <Row>
        {prestamos.map((prestamo) => {
          console.log(prestamo, "hola soy libro");
          return (
            <Col onClick={() => selected(prestamo)} key={prestamos.id}>
              <Card prestamos={prestamo} />
          
            </Col>
          );
        })}
      </Row>
    </Container>
  </>
);
}

{/* <div className="usersDesign">
  <h3>Prestamos existentes:</h3>
     {prestamos.length > 0 ? (
        <Row xs={1} md={2} lg={5}>
          {prestamos.map((prestamo) => {
            return (
              <Col key={prestamo.id}>
                <Card className="card my-3">
           <ListGroup variant="flush"> 
            <ListGroup.Item>
              <div className="text1">ID pRODUCTO:</div>
              <div className="text2"> {prestamo.id_producto}</div>
            </ListGroup.Item>
          
            <ListGroup.Item>
              <div className="text1"> Fecha inicio: </div>
              <div className="text2"> {prestamo.fecha_inicio}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="text1"> Fecha fin: </div>
              <div className="text2"> {prestamo.fecha_fin}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="text1"> Puntuacion: </div>
              <div className="text2"> {prestamo.puntuacion}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="text1">Comentario </div>
              <div className="text2"> {prestamo.comentario_producto}</div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
               
                 </Col>
            );
          })}
        </Row> */}
//       ) : (
        
//         <div>ESTAN VINIENDO</div>
//       )}
//     </div>
//   );
// };

