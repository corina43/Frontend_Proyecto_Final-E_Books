import React, { useState } from "react";
import logo from '../../assets/images/logo7.png';
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
          <div className="containerlogo">
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
          
              </div>
              <div>
                
              </div>
              <div className="textoLogo col-md-7 col-lg-7 col-xl-6 col-xxl-5 d-none d-md-block">
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
