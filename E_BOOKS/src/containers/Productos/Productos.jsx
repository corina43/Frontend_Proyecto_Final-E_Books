import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addBook, bookData } from "../../common/Books/bookSlice";
import { Col, Container, Row } from "react-bootstrap";

import "./Productos.css";
import BookCard from "../../common/BookCard/BookCard";

export function Productos() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickedProductos = (productos) => {
    dispatch(addBook({ ...productos, details: productos }));
    navigate("/bookdetail");
  };

  const searchedBook = useSelector(bookData);
  const books = searchedBook ? searchedBook.search : [];
  const query = searchedBook ? searchedBook.query : [];

  useEffect(() => {
    if (productos?.length === 0) {
      getAll().then((productos) => setProductos(productos));
    }
  });

  if (productos?.length !== 0 && query !== "") {
    return (
      <Container className="container homeDesign">
        <Row className="d-flex justify-content-center">
          {books.map((book, index) => {
            return (
              <Col
                key={index}
                 className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              >
                <BookCard productos={book} clickedProductos={clickedProductos} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else if (productos?.length > 0) {
    return (
      <Container className="container homeDesign">
        <Row className="d-flex justify-content-center">
          {productos.map((productos, index) => {
            return (
              <Col
                key={index}
                className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              >
                <BookCard
                  productos={productos}
                  clickedProductos={clickedProductos}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else {
    return (
      <div className="homeDesignEmpty">
        <span className="loader"></span>
      </div>
    );
  }
}

