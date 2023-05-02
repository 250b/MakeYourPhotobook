import styled from "styled-components";
import frame from '../images/frame.svg';
import Menu from "./Menu";
import { useState } from "react";
import Header from "../components/Header";

function Main() {
    const [showMenu, setShowMenu] = useState(false);

    const toshowMenu = ()=>{
        setShowMenu(true)
    }
    const tocloseMenu = ()=>{
      setShowMenu(false)
    }

  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <MainContainer>
            <Header leftButton="edit" title="2023.4" rightButton="delete" onclick={toshowMenu}/>
            <ContentContainer>
                <Title>MAKE YOUR</Title>
                <Frame src={frame}/>
                <InputContainer>
                    <Input/>
                    <Button>GO!</Button>
                </InputContainer>
                <Title>PHOTOBOOK</Title>
            </ContentContainer>
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
`
const Icon = styled.img`
  width:60px;
  height:60px;
  margin-bottom:50px;
  position:absolute;
  top:-70px;
  right:40px;
`
const ContentContainer = styled.div`
    height:550px;
    padding-top:110px;
`
const Title = styled.div`
  font-size:60px;
  @media Screen and (max-width:700px){
    font-size:50px;
  }
  @media Screen and (max-width:500px){
    font-size:40px;
  }
`
const Frame = styled.img`
  width:400px;
  height:300px;
  margin: 0px auto;
  @media Screen and (max-width:500px){
  width:320px;
  height:240px;
  }
`
const InputContainer = styled.div`
  display:flex;
  flex-direction:vertical;
  width:800px;
  margin:20px auto 10px auto;
  @media Screen and (max-width:900px){
    width:calc(100vw - 100px);
  }
  @media Screen and (max-width:500px){
    width:300px;
`
const Input  =styled.input`
  font-family: goblin;
  width:700px;
  height:30px;
  border-radius:30px 0px 0px 30px;
  background-color:#D9D9D9;
  border: 1px solid black;
  padding:0px 20px;
  margin-left:20px;
  @media Screen and (max-width:900px){
  width:calc(100vw - 200px)};
  @media Screen and (max-width:500px){
    width:300px};
`
const Button = styled.button`
    font-family: goblin;
    font-size:20px;
    width:100px;
    height:32px;
    margin-left:0px;
    margin-right:20px;
    border: 1px solid black;
    border-radius:0px 30px 30px 0px;
    background-color: #FFFFFF;
`
export default Main;
