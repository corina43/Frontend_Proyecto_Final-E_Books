import React, { useState } from "react";
import logo from '../../assets/images/logo2.jpg';
import { Form, Button } from "react-bootstrap";
import './logo.css'

export const Logo = () => {
  const [criteria, setCriteria] = useState("");

  const criteriaHandler = (e) => {
    setCriteria(e.target.value);
  };

  return (
    <>
      <div className="logo">
        <header>
          <div className="container">
            <div className="row">
              <div className="LogoImg col-md-4 col-lg-4 col-xl-5 col-xxl-6 col-sm-11">
                <a href="/">
                  <img
                    src={logo}
                    className="image-header"
                    width="240"
                    height="90"
                    alt="Logo de la empresa"
                  />
                </a>
                {/* <Form.Control
                  type="search"
                  placeholder="Buscar"
                  id="inputDesign"
                  aria-label="Buscar"
                  onChange={(e) => criteriaHandler(e)}
                />
                <Button id="buttonDesign">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Button> */}
              </div>
              <div>
                
              </div>
              <div className="textoLogo col-md-7 col-lg-7 col-xl-6 col-xxl-5 d-none d-md-block">
                {/* <h5>
                  E_BOOKS_friends: sumérjase en la magia de los libros de ayer y hoy entre amigos y comparta sus experiencias.
                </h5> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
