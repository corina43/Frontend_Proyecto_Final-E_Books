
import  Container  from 'react-bootstrap/Container';

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userData, userout } from "../../containers/User/userSlice";
import Nav from "react-bootstrap/Nav";



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
                  
                  <Nav.Link as={Link} to="/usuarios">
                     Profile
                  </Nav.Link>
                  <NavDropdown title="Profile Update" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/profile/update">
                      Profile Update</NavDropdown.Item>
                 </NavDropdown>
                  <NavDropdown title="miInformacion" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/prestamos">
                      Mis Prestamos</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/productos">
                       Productos</NavDropdown.Item>
                  </NavDropdown>
                  
              
                  <Nav.Link as={Link} to="/productos/titulo">
                   Libros por titulo
                  </Nav.Link>
                </>
              ) : credencialesRedux?.credentials?.usuario?.id_rol === 1 ? (
                <>
                  <Nav.Link as={Link} to="/" onClick={() => logout()}>
                     Logout
                  </Nav.Link>
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/usuarios">
                      Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/profile/update">
                      Profile Update</NavDropdown.Item>
                  
                  </NavDropdown>
                  <NavDropdown title="Admin" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/usuarios/todos">
                    Todos los usuarios </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/usuarios/prestamos">
                      Prestamos</NavDropdown.Item>
                   
                    <NavDropdown.Item as={Link} to="/productos">
                      Productos</NavDropdown.Item>
                      </NavDropdown>
                   
                  <Nav.Link as={Link} to="/Vistaproductos">
                    Nuevos Libros
                  </Nav.Link>
               
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/" onClick={() => logout()}>
                    You Don´t Exist
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

