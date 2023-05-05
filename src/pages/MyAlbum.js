import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import polaroid from '../images/polaroid.svg';
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import Header from "../components/Header";
import { firestore } from '../firebase';
import { getAuth,onAuthStateChanged } from 'firebase/auth';


function MyAlbum() {
  let navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [album, setAlbum] = useState([]);



    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const userEmail = user.email;
        const users = firestore.collection("user");
        // collection의 document인 "bucket_item"을 가져온다.
        users.doc(userEmail).get().then((doc) => {
          const userInfo = doc.data();
          setAlbum(userInfo.album);
          // console.log(album)
        })

      } else {
    
      }
    });


    const toshowMenu = ()=>{
      setShowMenu(true)
  }
    const tocloseMenu = ()=>{
      setShowMenu(false)
  }
  const toMoveAlbum = (albumName)=>{
    navigate("/album", {state:{albumName:{albumName}}});
}
const toMoveCreate = ()=>{
  navigate("/createAlbum");
}


const Albums=(album)=>{
  if(album.album!=undefined){
    return(
      album.album.map((albumName=>(
        <Album onClick={()=>toMoveAlbum(albumName)}><Polar><img src={polaroid}/><span>{albumName}</span></Polar></Album>
      ))
    ))

  }
}

  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <Header title="MY ALBUM" starOnclick={toshowMenu} />
        <MainContainer>
            <AlbumContainer>
              <Albums album={album}/>
              <Album onClick={toMoveCreate}><Polar><Add className="add"><div>+</div></Add></Polar></Album>
            </AlbumContainer>
        </MainContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: goblin;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  z-index:1;

`
const MainContainer = styled.div`
    z-index:1;
    width:100vw;
    height:100vh;
    // border:1px solid black;
`
const AlbumContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    margin:auto;
    margin-top:40px;
    padding-top:110px;
    // border:1px solid black;
    @media Screen and (max-width:900px){
        grid-template-columns:repeat(2, 1fr);
    }
`
const Album = styled.div`
    margin:auto;
    
}
`
const Polar = styled.div`
  width:300px;
  height:300px;
  position:relative;
  @media Screen and (max-width:600px){
    width:180px;
    height:180px;
}
  >img{
    width:250px;
    height:250px;
    position:absolute;
    left:25px;
    @media Screen and (max-width:900px){
        left:25px;
    }
    @media Screen and (max-width:600px){
        width:170px;
        height:170px; 
        left:5px;
    }
  }
  >span{
    width:200px;
    font-family:gochi;
    position:absolute;
    bottom:55px;
    font-size:40px;
    left:calc(100% - 250px);
    @media Screen and (max-width:600px){
      left:calc(100% - 150px);
      width:120px;
        font-size:25px;
        bottom:15px;
    }
  }
`
const Add= styled.div`
  width:300px;
    height:300px;
    position:relative;
    margin:auto;
  @media Screen and (max-width:600px){
    width:180px;
    height:180px;
  }
  >div{
    font-size:100px;
    font-family:Roboto;
    width:100%;
    height:100%;
    position:absolute;
    top:0px;
    left:0px;
    display : flex;
    justify-content : center;
    align-items : center;
  }
`
export default MyAlbum;
