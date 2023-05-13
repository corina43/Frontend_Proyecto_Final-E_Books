

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
                  <h3 className="title">{item.volumeInfo.title}</h3>
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





// import React, { useState } from "react";
// import Modal from "../Modal/Modal";
// import { Card, Col, Row } from "react-bootstrap";
// import "./LibrosCard.css";

// export const LibrosCard = ({ book }) => {
//   const [show, setShow] = useState(false);
//   const [bookItem, setBookItem] = useState(null);

//   const handleClick = (item) => {
//     setBookItem(item);
//     setShow(true);
//   };

//   return (
//     <>
//       {book && book.length > 0 ? (
//         <Row>
//           {book.map((item) => {
//             const thumbnail =
//               item.volumeInfo.imageLinks &&
//               item.volumeInfo.imageLinks.smallThumbnail;
//             const amount =
//               item.saleInfo &&
//               item.saleInfo.listPrice &&
//               item.saleInfo.listPrice.amount;
//             if (thumbnail && amount) {
//               return (
//                 <Col sm={6} md={4} lg={3} key={item.id}>
//                   <Card
//                     className="libro-card"
//                     onClick={() => handleClick(item)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <Card.Img variant="top" src={thumbnail} alt="" />
//                     <Card.Body>
//                       <Card.Title>{item.volumeInfo.title}</Card.Title>
//                       <Card.Text>&#8377;{amount}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               );
//             } else {
//               return null;
//             }
//           })}
//         </Row>
//       ) : (
//         <p>No se encontraron libros</p>
//       )}
//       <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
//     </>
//   );
// };
