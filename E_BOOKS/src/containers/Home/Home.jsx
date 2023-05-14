import React, { useState } from "react";
import { LibrosCard } from "../../common/LibrosCard/LibrosCard";

import "./Home.css";
import axios from "axios";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
  
      axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC15ChLKEFQXxkXltYYU3jbGetZ6LmdUC0`
        )
        .then((res) => setData(res.data.items))
        console.log(res.data,'nnnnnnnnnn')
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="headerA">
        <div className="row1">
          <h1>A room without books<br /> is like a body without a soul.</h1>
        </div>
        <div className="row2">
          <h2>Encuentra tu libro</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Ingresa el nombre de tu libro"
              value={search}
            
              onChange={(e) => setSearch(e.target.value)}
              
              onKeyDown={searchBook}
             
            />
            {/* <button>
              <i className="fas fa-search"></i>
            </button> */}
          </div>
       
        </div>
      </div>

      <div className="containerHome">
        
        <LibrosCard book={bookData} />
      </div>
    </>
  )
};


// import React, { useState } from "react";
// import { LibrosCard } from "../../common/LibrosCard/LibrosCard";
// import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
// import axios from "axios";
// import "./Home.css";

// export const Home = () => {
//   const [search, setSearch] = useState("");
//   const [bookData, setBookData] = useState([]);

//   const searchBook = (evt) => {
//     if (evt.key === "Enter") {
//       axios
//         .get(
//           `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC15ChLKEFQXxkXltYYU3jbGetZ6LmdUC0`
//         )
//         .then((res) => setBookData(res.data.items))
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <>
//     {/* <Container className="container-fluid"> */}
//       <div className="headerA">
//         <div className="row1">
//           <h2>  A room without books <br />is like a body without a soul.</h2>
//         </div>
//         <div className="row2">
//           <h4>Encuentra tu libro</h4>
//           <div className="search">
//             <InputGroup>
//               <FormControl
//                 type="text"
//                 placeholder="Ingresa el nombre de tu libro"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 onKeyDown={searchBook}
//               />
//               <Button variant="primary" onClick={searchBook}>
//                 <i className="fas fa-search"></i>
//               </Button>
//             </InputGroup>
//           </div>
//         </div>
//       </div>

//       <Container>
//         <LibrosCard book={bookData} />
//       </Container>
//       {/* </Container> */}
//     </>
//   );
// };
