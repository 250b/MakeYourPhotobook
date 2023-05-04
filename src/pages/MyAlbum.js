import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import polaroid from '../images/polaroid.svg';
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import Header from "../components/Header";


function MyAlbum() {
  let navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)

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

const albums=["2023.4", "2023.5", "2023.6","2023.7","2023.8","2023.9"];
const Albums=(albums)=>{
  return(
    albums.albums.map((albumName=>(
      <Album onClick={()=>toMoveAlbum(albumName)}><Polar><img src={polaroid}/><span>{albumName}</span></Polar></Album>
    ))
  ))
}

  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <Header title="MY ALBUM" starOnclick={toshowMenu} />
        <MainContainer>
            <AlbumContainer>
              <Albums albums={albums}/>
              <Album onClick={toMoveCreate}><Polar><img src={polaroid}/><span>{"albumName"}</span></Polar></Album>
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
export default MyAlbum;
