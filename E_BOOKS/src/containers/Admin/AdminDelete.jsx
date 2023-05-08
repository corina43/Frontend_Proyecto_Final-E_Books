
import React, { useState } from 'react';
import { useJwt } from "react-jwt";
import { adminData} from '../../containers/Admin/AdminSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminDelete.css';

const DeleteUser = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  let { decodedToken } = useJwt(token);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const deleteUser = () => {
    const root = "http://localhost:3009"
     axios
      .patch('${root}/usuarios/delete', { data: { email } })
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        setMessage('Error al eliminar el usuario');
      });
  };


    return (
      <div className="container">
        <h1>Eliminar Usuario</h1>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-danger" onClick={deleteUser}>
          Eliminar Usuario
        </button>
        {message && <p>{message}</p>}
      </div>
    );

    }
export default DeleteUser;
