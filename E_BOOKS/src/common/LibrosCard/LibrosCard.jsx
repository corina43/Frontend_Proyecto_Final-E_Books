

import React, { useState } from "react";
import Modal from "../Modal/Modal";

export const LibrosCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState(null);

  const handleClick = (item) => {
    setBookItem(item);
    setShow(true);
  };

  return (
    <>
      {book && book.length > 0 ? (
        book.map((item) => {
          const thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          const amount =
            item.saleInfo &&
            item.saleInfo.listPrice &&
            item.saleInfo.listPrice.amount;
          if (thumbnail && amount) {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => handleClick(item)}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h4 className="title">{item.volumeInfo.title}</h4>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })
      ) : (
        <p>No se encontraron libros</p>
      )}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};




