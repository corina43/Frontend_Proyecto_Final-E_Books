import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch ,useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { adminData } from '../../containers/Admin/AdminSlice';
import { getAllPrestamos } from '../../services/apiCalls';
import './AdminPrestamos.css'
import { Col, Container, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import PrestamosCard from '../../common/PrestamosCard/PrestamosCard'
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

                        setPrestamos(result.data)                      
                     
                    }
                )
                .catch(error => console.log(error))

        }
    }, [prestamos]);

const selected = (prestamo) => {
    dispatch(addChoosen({ choosenObject: prestamo }))

   
  }

    return (
      <>
      <Container fluid className='adminPrestamos'>
      <Row>
        {prestamos.map((prestamo) => {
        
          return (
            <Col className='prestamito' onClick={() => selected(prestamo)} key={prestamos.id}>
              <PrestamosCard prestamos={prestamo} />
          
            </Col>
          );
        })}
      </Row>
    </Container>
  </>
);
}


