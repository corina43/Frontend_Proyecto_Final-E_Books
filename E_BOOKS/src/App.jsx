import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Body } from './containers/Body/Body';
import { Header } from './common/Header/Header';



function App() {


  return (
    <div className="App">
 
 <Header/>
  
  <Body />
  
    </div>
  )
}

export default App
