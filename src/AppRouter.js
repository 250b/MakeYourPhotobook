import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Start from './pages/Start';
import Login from './pages/Login';
import Main from './pages/Main';
import MyAlbum from './pages/MyAlbum';
import PhotoBook from './pages/PhotoBook';
import CreateAlbum from './pages/CreateAlbum';
import { Navigate } from 'react-router-dom';


function AppRouter({isLoggedIn}) {
  console.log(isLoggedIn)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {isLoggedIn?
          <>
            <Route path="/" element={<Start/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/main' element ={<Main/>}/>
            <Route path='/myalbum' element ={<MyAlbum/>}/>
            <Route path='/album' element ={<PhotoBook/>}/>
            <Route path='/createAlbum' element ={<CreateAlbum/>}/>
          </>:
          <>
            <Route path="/" element={<Start/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<Navigate to ="/" />}/>
          </>
        }
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default AppRouter;