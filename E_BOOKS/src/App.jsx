import { useState } from 'react'

import './App.css'
import { Register } from './containers/Register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './common/Home/Home'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/register" element={<Register />} />
  </Routes>
   
     </BrowserRouter>
    </div>
  )
}

export default App
