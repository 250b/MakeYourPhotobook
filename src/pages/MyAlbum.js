import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import star from '../images/star.png'
import polaroid from '../images/polaroid.svg';
import Menu from "./Menu";
import { useState } from "react";


function MyAlbum() {
  let navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const toshowMenu = ()=>{
        setShowMenu(true)
    }
    const tocloseMenu = ()=>{
      setShowMenu(false)
  }
  const toMoveAlbum = ()=>{
    navigate("/album", {state:{albumName:"FIRST"}});
   
}

  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <MainContainer>
            <Icon src={star} onClick={toshowMenu}/>
            <Title>MY ALBUM</Title>
            <AlbumContainer>
                <Album onClick={toMoveAlbum}><Polar><img src={polaroid}/><span>FIRST</span></Polar></Album>
                <Album><Polar><img src={polaroid}/><span>FIRST</span></Polar></Album>
                <Album><Polar><img src={polaroid}/><span>FIRST</span></Polar></Album>
                <Album><Polar><img src={polaroid}/><span>FIRST</span></Polar></Album>
                <Album><Polar><img src={polaroid}/><span>FIRST</span></Polar></Album>
                <Album><Polar><img src={polaroid}/><span>ADD</span></Polar></Album>
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

`
const MainContainer = styled.div`
    z-index:1;
    width:100vw;
    height:100vh;
    position: absolute;
    margin-top:140px;
`
const Icon = styled.img`
  width:60px;
  height:60px;
  margin-left:auto;
  margin-right:30px;
  margin-top:20px;
  position:absolute;
  top:-70px;
  right:0px;


  @media Screen and (max-width:600px){
    width:50px;
    height:50px;
}
`
const Title = styled.div`
  font-size:40px;
  margin-top:30px;
  margin-bottom:60px;
  @media Screen and (max-width:600px){
    font-size:30px;
}
`
const AlbumContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    margin:auto;
    margin-top:0px;
    border:1px solid black;
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
    font-family:gochi;
    position:absolute;
    bottom:55px;
    font-size:40px;
    left:110px;
    @media Screen and (max-width:900px){
        left:105px;
    }
    @media Screen and (max-width:600px){
        font-size:25px;
        bottom:15px;
        left:63px;
    }
  }
`
export default MyAlbum;
