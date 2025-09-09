import React from 'react'
import "./App.css";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Home';
import Create from './components/Create';
import Edit from './components/Edit';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:userid' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>

      </Routes>
    </>
    
  )
}

export default App