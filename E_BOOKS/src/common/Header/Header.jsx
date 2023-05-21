
import  Container  from 'react-bootstrap/Container';

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData, userout } from "../../containers/User/userSlice";
import Nav from "react-bootstrap/Nav";
import './Header.css'


 export function Header () {
  const credencialesRedux = useSelector(userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userout({ credentials: {}, token: "" }));
    return navigate("/");
  };

  return (
    <div className="navbarstyle">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {!credencialesRedux.credentials?.usuario?.id_rol ? (
                <>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </>
              ) : credencialesRedux?.credentials?.usuario?.id_rol === 2 ? (
                <>
                  <Nav.Link as={Link} to="/" onClick={() => logout()}>
                     Logout
                  </Nav.Link>
                  
                  <NavDropdown title="Mi informacion" id="basic-nav-dropdown">
            
                   <NavDropdown.Item as={Link} to="/usuarios/profile">
                      Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/usuarios/perfil">
                      Profile Update
                    </NavDropdown.Item>
                 </NavDropdown>

                 <Nav.Link as={Link} to="/prestamos">
                      Mis Prestamos</Nav.Link>
                    <Nav.Link as={Link} to="/productos/autor/${autor}">
                     Libros por Autor</Nav.Link>
                 <Nav.Link as={Link} to="/Vistaproductos">
                   Crear prestamos
                  </Nav.Link>
                </>
              ) : credencialesRedux?.credentials?.usuario?.id_rol === 1 ? (
                <>
                  <Nav.Link as={Link} to="/" onClick={() => logout()}>
                     Logout
                  </Nav.Link>
                  <NavDropdown title="Mi informacion" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/usuarios/profile">
                      Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/usuarios/perfil">
                      Profile Update</NavDropdown.Item>
                  
                  </NavDropdown>
                  <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/usuarios/todos">
                    Todos los usuarios </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/usuarios/delete/${id}">
                    Borrar Usuarios </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/usuarios/prestamos">
                      Todos los Prestamos</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/prestamos">
                      Prestamos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos/autor/${autor}">
                      Productos</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to="/prestamos">
                      Mis Prestamos</Nav.Link>
                    <Nav.Link as={Link} to="/productos/autor/${autor}">
                     Libros por Autor</Nav.Link>
                   <Nav.Link as={Link} to="/Vistaproductos">
                   Crear prestamos
                  </Nav.Link>
                
                  <Nav.Link as={Link} to="/productos/newproducto">
                     Crear Producto
                  </Nav.Link>
                  <Nav.Link as={Link} to="/productos/productos/${id}">
                     Actualizar Producto
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/" onClick={() => logout()}>
                    You Don´t Exist
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

