import styled from "styled-components";
import React from "react";
import {useNavigate } from "react-router-dom";
import star from '../images/star.png'
import { getAuth , signOut} from 'firebase/auth';

function Menu(props) {
    let navigate = useNavigate();

    //myalbum
    const toMyAlbum =()=>{
      if(window.location.pathname=='/myalbum'){ //현재 페이지와 동일할 경우 redirect (메뉴바 꺼짐)
        window.location.replace("/myalbum") 
      }
      navigate('/myalbum')
    }

    //home
    const toMain =()=>{
      if(window.location.pathname=='/main'){//현재 페이지와 동일할 경우 redirect (메뉴바 꺼짐)
        window.location.replace("/main")
      }
      navigate('/main')
  }

  //logout
  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
        <ContentContainer>
            <Icon className="star" src={star} onClick={props.onclick}/>
            <div className="div"></div>
            <MenuList onClick={toMain}>HOME</MenuList>
            <MenuList onClick={toMyAlbum}>My ALBUM</MenuList>
            <MenuList>ACCOUNT</MenuList>
            <MenuList onClick={logout}>LOGOUT</MenuList>
        </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: goblin;
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color: #00000050;
  z-index:10;
  position : fixed;
  top:0px;
  overflow : hidden;
`
const ContentContainer = styled.div`
    background-color:#ffffff;
    width:300px;
    height:100%;
    margin-left:auto;
    border:1px solid black;
    position:fixed;
    right:0px;
    .div{
      margin-top:80px;
      padding-bottom:10px;
      border-bottom:1px solid black;
    }
`

const Icon = styled.img`
  position:fixed;
  right:0px;
  top:10px;
  width:60px;
  height:60px;
  margin-right:30px;
  @media Screen and (max-width:600px){
    width:40px;
    height:40px;
    top:25px;
    right:-10px;
    margin-right:30px;
    margin-top:0px;
  }
`
const MenuList = styled.button`

    width:300px;
    height:80px;
    text-align:center;
    font-size:20px;
    font-family: goblin;
    border-bottom:1px solid black;
    border-left:0px;
    border-right:0px;
    border-top:0px;
    background-color:#00000000;
`

export default Menu;
