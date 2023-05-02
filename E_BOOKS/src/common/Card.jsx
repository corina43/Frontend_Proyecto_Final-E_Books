import React from 'react'
import './Card.css'

function Card({producto, clickedProducto}) {
  if (producto.titulo.length > 12) {
    return (
      <div className="cardDesign">
        <p className="text">{producto.titulo.slice(0, 12) + "..."}</p>
        <img
          className="imageDesign"
          src={`${producto.poster_path}`}
          onClick={() => clickedProducto(producto)}
        />
      </div>
    );
  } else {
    return (
      <div className="cardDesign">
        <p className="text">{producto.titulo}</p>
        <img
          className="imageDesign"
          src={`${producto.poster_path}`}
          onClick={() => clickedProducto(producto)}
        />
      </div>
    );
  }
}

export default Card;
