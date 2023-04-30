import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//redux
import { useDispatch ,useSelector } from 'react-redux';
import { userData } from '../User/userSlice';
import { adminData } from '../../containers/Admin/isAdminSlice';
import { getAllUser } from '../../services/apiCalls';
//import './Admin.css'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';


export const Admin = () => {

    const ReduxCredentials = useSelector(userData);
    const isAdmin = useSelector(adminData)
    const navigate = useNavigate();
    

    // HOOKS
    const [users, setUsers] = useState([]);

  

    useEffect(() => {

        if(users.length === 0){

            getAllUser(dataRdx?.credentials?.token)
                .then(
                    result => {

                        setUsers(result.data.data)                      
                        console.log(result.data.data, "hola result")
                    }
                )
                .catch(error => console.log(error))

        }
    }, [users]);
console.log(users, "sou users")
    return (
        

<div className="usersDesign">
  <h3>Usuarios existentes:</h3>
     {users.length > 0 ? (
        <Row xs={1} md={2} lg={5}>
          {users.map((data) => {
            return (
              <Col key={data.id}>
                <Card className="my-3">
          <Card.Body>
            <Card.Title>{data.user_name}</Card.Title>
            <Card.Text>{data.email}</Card.Text>
          </Card.Body>
        </Card>
               
                 </Col>
            );
          })}
        </Row>
      ) : (
        
        <div>ESTAN VINIENDO</div>
      )}
    </div>
  );
};

