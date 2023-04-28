import React from 'react'
import './BookCard.css'

function BookCard({productos, clickedProductos}) {
  if (productos.title.length > 12) {
    return (
      <div className="cardDesign">
        <p className="text">{productos.title.slice(0, 12) + "..."}</p>
        <img
          className="imageDesign"
          src={`${productos.poster_path}`}
          onClick={() => clickedProductos(productos)}
        />
      </div>
    );
  } else {
    return (
      <div className="cardDesign">
        <p className="text">{productos.title}</p>
        <img
          className="imageDesign"
          src={`${productos.poster_path}`}
          onClick={() => clickedProductos(productos)}
        />
      </div>
    );
  }
}

export default BookCard;
