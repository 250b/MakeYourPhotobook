import Header from "../components/Header";
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import Edit from "./Edit";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function CreateAlbum() {
    let navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)

    const toshowMenu = ()=>{
      setShowMenu(true)
  }
  const tocloseMenu = ()=>{
    setShowMenu(false)
}
    const toMoveMyAlbum=()=>{
        navigate('/myalbum')
    }
    return(
        <Container>
            {showMenu?<Menu onclick={tocloseMenu}/>:""}
            <HeaderContainer>
                <Header starOnclick={toshowMenu} leftButton={"create"} leftButtonOnclick={toMoveMyAlbum}></Header>
                <TitleContainer>
                    <Input placeholder={"TITLE"}/>
                </TitleContainer>
            </HeaderContainer>
            <Edit/>
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
const HeaderContainer = styled.div`
`
const TitleContainer = styled.div`
    display:flex;
    flex-direction:vertical;
    width:400px;
    position:absolute;
    z-index:2;
    .left{
        left:calc(50vw - 215px);
        top:10px;
    }
    .right{
        left:calc(50vw + 160px);
        top:10px;
    }
`
const Ld = styled.span`
    font-size:100px;
    position:absolute;
    font-family:Segoe UI;
`
const Input = styled.input`
z-index:2;
font-family:goblin;
width:400px;
height:40px;
left:calc(50vw - 200px);
position:absolute;
top:40px;
font-size:40px;
border:0px;
padding-bottom:20px;
text-align:center;
border-bottom:5px solid black;
@media Screen and (max-width:600px){
    font-size:24px;
  }

`
export default CreateAlbum;