import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Router, Redirect, Navigate} from 'react-router-dom';
import Start from './pages/Start';
import Login from './pages/Login';
import Main from './pages/Main';
import MyAlbum from './pages/MyAlbum';
import PhotoBook from './pages/PhotoBook';
import CreateAlbum from './pages/CreateAlbum';
import { useEffect, useState } from 'react';
import {  getAuth,onAuthStateChanged } from 'firebase/auth';
import AppRouter from './AppRouter'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      console.log(user)
      if(user){
        setIsLoggedIn(true);
        console.log(isLoggedIn)
      } else {
        setIsLoggedIn(false);
        console.log(isLoggedIn)
      }
    })
  }, [])

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;