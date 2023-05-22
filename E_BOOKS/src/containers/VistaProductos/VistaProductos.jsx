// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { CreatePrestamo } from "../../services/apiCalls";
// import { userData } from "../../containers/User/userSlice";
// import { Button, Card, CardGroup, CardImg, Col, Container, Form, Modal, Row } from "react-bootstrap";
// import BookCard from "../../common/BookCard/BookCard";
// import { InputText } from "../../common/InputText/InputText";
// import './VistaProductos.css';

// const VistaProductos = () => {
//   const root = "http://localhost:3009";
//   const [productos, setProductos] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [search, setSearch] = useState('');
//   const ReduxCredentials = useSelector(userData);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [NewPrestamo, setNewPrestamo] = useState({
//     id: "",
//     titulo: "",
//     id_usuario: "",
//     // id_producto: "",
//     fecha_inicio: "",
//     fecha_fin: "",
//     puntuacion: "",
//     comentario_producto: ""
//   });

//   const [backendMessage, setBackendMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const user = useSelector(userData);

//   const getAllProducts = async () => {
//     try {
//       const response = await axios.get(`${root}/productos`);
//       setProductos(response.data);
//     } catch (error) {
//       console.error('Error al obtener todos los productos:', error);
//     }
//   };

//   const getProductByTitulo = async (titulo) => {
//     try {
//       const response = await axios.get(`${root}/productos/titulo/${titulo}`);
//       setProductos(response.data);
//       console.log(data, 'ggggggggggggg');
//     } catch (error) {
//       console.error('Error al obtener producto por título:', error);
//     }
//   };

//   const getProductById = async (id) => {
//     try {
//       const response = await axios.get(`${root}/productos/id/${id}`);
//       setProductos(response.data);
//     } catch (error) {
//       console.error('Error al obtener producto por ID:', error);
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const inputHandler = (e) => {
//     setNewPrestamo((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const checkError = (e) => {};

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getProductByTitulo(search);
//   };

//   const openModal = (producto) => {
//     setSelectedProduct(producto);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   const createNewPrestamo = () => {
//     setNewPrestamo((prevState) => ({
//       ...prevState,
//       id_producto: selectedProduct.id
//     }));

//     CreatePrestamo(NewPrestamo, ReduxCredentials?.credentials?.token)
//       .then((resultado) => {
//         setSuccessMessage("¡Préstamo creado con éxito!");
//         setTimeout(() => {
//           navigate("/prestamos/misprestamos");
//         }, 2500);
//       })
//       .catch((error) => console.log(error));
//   };


  
//   return (
//     <>
//       <h1>Productos</h1>
//       <form className='formProductos' onSubmit={handleSubmit}>
//         <input
//           className='inputProductos'
//           type="text"
//           value={search}
//           onChange={handleSearch}
//           placeholder="Buscar por título"
//         />
//         <button className='btnProductos' type="submit">Buscar</button>
//       </form>
    
//       <div className="book-card-container">
//         {productos.map((producto) => (
//           <CardImg
//             variant="top"
//             src={producto.poster_path}
//             style={{ width: "18rem" }}
//             key={producto.id}
//             titulo={producto.titulo}
//             autor={producto.autor}
//             descripcion={producto.descripcion}
//             categoria={producto.categoria}
//             genero={producto.genero}
//             onClick={() => openModal(producto)}
//           />
//         ))}
//       </div>

    
//        {/* Modal para el formulario de préstamo */}
//       {selectedProduct && (
   
//         <Modal show={openModal} onHide={closeModal}>
//           <Modal.Header closeButton>
//             <Modal.Title>Realizar prestamo</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//                 <Row>
//                   <Col>
//                     <Form className="FormNewPrestamo">
//                     <Form.Group>
//                         <Form.Label>Titulo:</Form.Label>
//                         <InputText
//                           className="inputBasicDesign"
//                           type={"text"}
//                           name={"titulo"}
//                           maxLength={50}
//                           placeholder={"Ingresa el titulo del libro"}
//                           required={true}
//                           changeFunction={(e) => inputHandler(e)}
//                           blurFunction={(e) => checkError(e)}
//                         />
//                       </Form.Group>
//                       <Form.Group>
//                         <Form.Label>Fecha inicio:</Form.Label>
//                         <InputText
//                           className="inputBasicDesign"
//                           type="date"
//                           name="fecha_inicio"
//                           id="fecha_inicio"
//                           required={true}
//                           changeFunction={(e) => inputHandler(e)}
//                           blurFunction={(e) => checkError(e)}
//                         />
//                       </Form.Group>
//                       <Form.Group>
//                         <Form.Label>Fecha fin:</Form.Label>
//                         <InputText
//                           className="inputBasicDesign"
//                           type="date"
//                           name="fecha_fin"
//                           id="fecha_fin"
//                           required={true}
//                           changeFunction={(e) => inputHandler(e)}
//                           blurFunction={(e) => checkError(e)}
//                         />
//                       </Form.Group>
//                       <Form.Group>
//                         <Form.Label>Puntuación:</Form.Label>
//                         <InputText
//                           className="inputBasicDesign"
//                           type={"integer"}
//                           name={"puntuacion"}
//                           maxLength={50}
//                           placeholder={"Ingresa la puntuación"}
//                           required={true}
//                           changeFunction={(e) => inputHandler(e)}
//                           blurFunction={(e) => checkError(e)}
//                         />
//                       </Form.Group>
//                       <Form.Group>
//                         <Form.Label>Comentario:</Form.Label>
//                         <InputText
//                           className="inputBasicDesign"
//                           type={"text"}
//                           name={"comentario_producto"}
//                           maxLength={50}
//                           placeholder={"Ingresa un comentario"}
//                           required={true}
//                           changeFunction={(e) => inputHandler(e)}
//                           blurFunction={(e) => checkError(e)}
//                         />
//                       </Form.Group>
//                       <br />
//                       <div className="buttonNewPrestamo">
//                         <Button
//                           className=""
//                           variant="primary"
//                           onClick={createNewPrestamo}
//                         >
//                           Crear préstamo
//                         </Button>
//                       </div>
//                     </Form>
//                   </Col>
//                 </Row>
//                 </Modal.Body>
//         </Modal>
//         //   </div>
//         // </div>
//       )}
//     </>
//   );
// };

// export default VistaProductos;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreatePrestamo } from "../../services/apiCalls";
import { userData } from "../../containers/User/userSlice";
import { Button, Card, CardGroup, CardImg, Col, Container, Form, Modal, Row } from "react-bootstrap";
import BookCard from "../../common/BookCard/BookCard";
import { InputText } from "../../common/InputText/InputText";
import './VistaProductos.css';

const VistaProductos = () => {
  const root = "http://localhost:3009";
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedTitulo, setSelectedTitulo] = useState(null);
  const [search, setSearch] = useState('');
  const ReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [NewPrestamo, setNewPrestamo] = useState({
    id: "",
    titulo: "",
    id_usuario: "",
    fecha_inicio: "",
    fecha_fin: "",
    puntuacion: "",
    comentario_producto: ""
  });

  const [backendMessage, setBackendMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const user = useSelector(userData);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${root}/productos`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
    }
  };

  const getProductByTitulo = async (titulo) => {
    try {
      const response = await axios.get(`${root}/productos/titulo/${titulo}`);
      setProductos(response.data);
   
    } catch (error) {
      console.error('Error al obtener producto por título:', error);
    }
    }; 

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`${root}/productos/id/${id}`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener producto por ID:', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getProductByTitulo(search);
  }, []);
  
  useEffect(() => {
    CreatePrestamo();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const inputHandler = (e) => {
    setNewPrestamo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    getProductByTitulo(search);
  };

  const openModal = (titulo) => {
    setSelectedTitulo(titulo);
  };

  const closeModal = () => {
    setSelectedTitulo(null);
  };

  const createNewPrestamo = () => {
    setNewPrestamo((prevState) => ({
      ...prevState,
      titulo: selectedTitulo
    }));

    CreatePrestamo(NewPrestamo, ReduxCredentials?.credentials?.token)
    .then((resultado) => {
      setSuccessMessage("¡Préstamo creado con éxito!");
      setTimeout(() => {
        navigate("/prestamos");
      }, 1500);
    })
    .catch((error) => console.log(error));
};

const selected = (titulo) => {
  dispatch(addChoosen({ choosenObject: titulo }));

};

return (
  <>
    <h1 className='hautor'>Busca el titulo del libro que quieres prestar... </h1>
    <form className='formProductos' onSubmit={handleSubmit}>
      <input
        className='inputProductos'
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Buscar por título"
      />
      <button className='btnProductos' type="submit">Buscar</button>
    </form>

    <div className="book-card-container">
      {productos.map((producto) => (
        <CardImg
          variant="top"
          src={producto.poster_path}
          style={{ width: "18rem" }}
          key={producto.titulo}
          autor={producto.autor}
          descripcion={producto.descripcion}
          categoria={producto.categoria}
          genero={producto.genero}
          onClick={() => openModal(producto.titulo)}
        />
      ))}
    </div>

    {/* Modal para el formulario de préstamo */}
    {selectedTitulo && (
      <Modal show={openModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Realizar préstamo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form className="FormNewPrestamo">
                <Form.Group>
                  <Form.Label>Fecha inicio:</Form.Label>
                  <InputText
                    className="inputBasicDesign"
                    type="date"
                    name="fecha_inicio"
                    id="fecha_inicio"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Fecha fin:</Form.Label>
                  <InputText
                    className="inputBasicDesign"
                    type="date"
                    name="fecha_fin"
                    id="fecha_fin"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Puntuación:</Form.Label>
                  <InputText
                    className="inputBasicDesign"
                    type="integer"
                    name="puntuacion"
                    maxLength={50}
                    placeholder="Ingresa la puntuación"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Comentario:</Form.Label>
                  <InputText
                    className="inputBasicDesign"
                    type="text"
                    name="comentario_producto"
                    maxLength={50}
                    placeholder="Ingresa un comentario"
                    required={true}
                    changeFunction={(e) => inputHandler(e)}
                    blurFunction={(e) => checkError(e)}
                  />
                </Form.Group>
                <br />
                <div className="buttonNewPrestamo">
                  <Button
                    className=""
                    variant="primary"
                    onClick={createNewPrestamo}
                  >
                    Crear préstamo
                  </Button>
                </div>
                <Col xs={3}></Col>
                {successMessage && <p className="successMessage">{successMessage}</p>}
                </Form>
                  </Col>
                </Row>
            </Modal.Body>
        </Modal>
      
      )}
    </>
  );
};

export default VistaProductos;
