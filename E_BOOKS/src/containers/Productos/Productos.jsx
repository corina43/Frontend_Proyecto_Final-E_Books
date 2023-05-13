import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../services/apiCalls";
import { userData } from "../../containers/User/userSlice";
import { Col, Container, Row } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import { addChoosen } from "../../containers/Detail/detailSlice";

export const Productos = () => {

  const [productos, setProductos] = useState([]);
  const ReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  
    if (productos.length === 0) {
      getAll(ReduxCredentials?.credentials?.token)
        .then(
          result => {
            console.log("Resultado completo:", result.data);
          

            setProductos(result.data)
            console.log(result.data,"hiiiiiiiiiiiii")
          }
        )
        .catch(error => console.log(error));
    }
  }, [productos])
  console.log(productos,"saliiiiiiiir");

  const selected = (producto) => {
    dispatch(addChoosen({ choosenObject: producto }))
    console.log(producto)
   
  }

  return (
    <>
      <Container fluid >
        <Row>
          {productos.map((producto) => {
            console.log(producto, "hola soy libro");
            return (
              <Col className="libro"  onClick={() => selected(producto)} key={productos.id}>
                <BookCard className='productos' productos={producto} />
            
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

