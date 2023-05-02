import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Body } from './containers/Body/Body';
import { Header } from './common/Header/Header';
import { Logo } from './common/Logo/Logo';



function App() {


  return (
    <div className="App">
 <Logo/>
 <Header/>
  
  <Body />
  
    </div>
  )
}

export default App
