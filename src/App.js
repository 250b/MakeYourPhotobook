import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Start from './pages/Start';
import Login from './pages/Login';
import Main from './pages/Main';
import MyAlbum from './pages/MyAlbum';
import PhotoBook from './pages/PhotoBook';
import CreateAlbum from './pages/CreateAlbum';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/main' element ={<Main/>}/>
          <Route path='/myalbum' element ={<MyAlbum/>}/>
          <Route path='/album' element ={<PhotoBook/>}/>
          <Route path='/createAlbum' element ={<CreateAlbum/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;