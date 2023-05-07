

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { createPrestamo } from "../../actions/prestamoActions";
import { CreatePrestamo } from "../../services/apiCalls"; 
import { Form, Button, Card, Row, Col, FormGroup } from "react-bootstrap";
import { userData } from "../User/userSlice";
import { InputText } from "../../common/InputText/InputText";
import './CreatePrestamo.css'
export const newPrestamo = () => {

    
  const ReduxCredentials = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [NewPrestamo, setNewPrestamo] = useState({
    id: "",
    id_usuario: "",
    id_producto: "",
    fecha_inicio: "",
    fecha_fin: "",
    puntuacion: "",
    comentario_producto:""
  });
  


const [backendMessage, setBackendMessage] = useState("");


const inputHandler = (e) => {
  setNewPrestamo((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};
// console.log(newPrestamo,'helllllllllllo')
const checkError = (e) => { };
const [successMessage, setSuccessMessage] = useState("");

const createNewPrestamo = () => {
  CreatePrestamo(NewPrestamo, ReduxCredentials?.credentials?.token)
    .then((resultado) => {
        setNewPrestamo(backendCall.data);
        setSuccessMessage("¡Cita creada con éxito!");
    //   setWelcome(`Correctly registered ${Prestamo.name}`);
      setTimeout(() => {
        navigate("/prestamos/misprestamos");
      }, 2500);
    })
    .catch((error) => console.log(error));
};

console.log(NewPrestamo, "esto es credenciales");
// console.log(valiCredenciales, "esto es Valicredenciales");

return (
  <>
 
    <div className="NewPrestamoDiv">
      <Card className="CardNewPrestamo">
        <Row >
          <Col>
            <Form className="FormNewPrestamo">
              <Form.Group>
                <Form.Label>Prestamo id:</Form.Label>
                <InputText
                  className="inputBasicDesign"
                      
                  
                  type={"text"}
                //   name={"id prestamo"}
                  maxLength={50}
                  placeholder={"Enter id prestamo"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
            
              <Form.Group>
                <Form.Label>Id usuario:</Form.Label>
                <InputText
                  className= "inputBasicDesign"
                      
                
                  type={"text"}
                  name={"id_usuario"}
                  maxLength={400}
                  placeholder={"Enter your id"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
             
              <Form.Group>
                <Form.Label>Id producto:</Form.Label>
                <InputText
                  className= "inputBasicDesign"
                
                  type={"text"}
                  name={"id_producto"}
                  maxLength={400}
                  placeholder={"Enter your id"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
             
            
         
              <Form.Group>
                <Form.Label>Fecha inicio:</Form.Label>
                <InputText
                  className= "inputBasicDesign"
                
                
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
                  className= "inputBasicDesign"
                  type="date"
                  name="fecha_fin"
                  id="fecha_fin"
                  required={true}
               
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Punctuacion:</Form.Label>
                <InputText
                  className= "inputBasicDesign"
               
                  type={"integer"}
                  name={"puntuacion"}
                  maxLength={50}
                  placeholder={"Enter puntuacion"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Comentario:</Form.Label>
                <InputText
                  className= "inputBasicDesign"
                     
                  type={"text"}
                  name={"comentario_producto"}
                  maxLength={50}
                  placeholder={"Enter comentario"}
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
                  New prestamo
                </Button></div>
                <Col xs={3}></Col>
                            {successMessage && <p>{successMessage}</p>}
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
 
  </>
);
};

export default newPrestamo;



