// Home.js


import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

export const Home = () => {
  // Datos de ejemplo de libros
  const libros = {
    'Romance': [
      { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', img: 'https://via.placeholder.com/150?text=Orgullo+y+prejuicio' },
      { titulo: 'Cumbres borrascosas', autor: 'Emily Brontë', img: 'https://via.placeholder.com/150?text=Cumbres+borrascosas' },
      { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', img: 'https://via.placeholder.com/150?text=Orgullo+y+prejuicio' },
      { titulo: 'Cumbres borrascosas', autor: 'Emily Brontë', img: 'https://via.placeholder.com/150?text=Cumbres+borrascosas' }
    ],
    'Ciencia Ficción': [
      { titulo: 'Dune', autor: 'Frank Herbert', img: 'https://via.placeholder.com/150?text=Dune' },
      { titulo: '1984', autor: 'George Orwell', img: 'https://via.placeholder.com/150?text=1984' }
    ],
    'Misterio': [
      { titulo: 'El código Da Vinci', autor: 'Dan Brown', img: 'https://via.placeholder.com/150?text=El+código+Da+Vinci' },
      { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', img: 'https://via.placeholder.com/150?text=La+sombra+del+viento' }
    ],
    'Biografías': [
      { titulo: 'Steve Jobs', autor: 'Walter Isaacson', img: 'https://via.placeholder.com/150?text=Steve+Jobs' },
      { titulo: 'Einstein', autor: 'Walter Isaacson', img: 'https://via.placeholder.com/150?text=Einstein' }
    ]
  };

  return (
    // ...
    <Container fluid>
      {/* ... */}
      {/* Libros por categoría */}
      {Object.keys(libros).map((categoria, index) => (
        <React.Fragment key={index}>
          <h2 className="text-center my-4">{categoria}</h2>
          <Row>
            {libros[categoria].map((libro, libroIndex) => (
              <Col xs={12} md={6} lg={3} key={libroIndex}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={libro.img} />
                  <Card.Body>
                    <Card.Title>{libro.titulo}</Card.Title>
                    <Card.Text>{libro.autor}</Card.Text>
                    <Button variant="primary">Alquilar</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </React.Fragment>
      ))}
    </Container>
    // ...
  );
};


