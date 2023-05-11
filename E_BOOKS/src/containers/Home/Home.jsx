
import React, { useState } from "react";
import { LibrosCard } from "../../common/LibrosCard/LibrosCard";

import "./Home.css";
import axios from "axios";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      console.log(evt.key,'ggggggggggggg')
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
      <div className="header">
        <div className="row1">
          <h1>A room without books is like<br /> a body without a soul.</h1>
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
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
       
        </div>
      </div>

      <div className="container">
        
        <LibrosCard book={bookData} />
      </div>
    </>
  )
};