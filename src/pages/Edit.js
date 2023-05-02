import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import star from '../images/star.png'
import polaroid from '../images/polaroid.svg';
import Menu from "./Menu";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import theme1 from "../images/theme1.svg";
import arrowLeft from '../images/arrow_left.svg';
import arrowRight from '../images/arrow_right.svg';
import frame from '../images/frame1.svg';
import themeCover from '../images/themeCover.svg';
import React from "react";

function Edit() {
  return (
    <Container>
        <MainContainer>
            <span>theme</span>
            <ThemeContainer>
                <Theme src={themeCover}/>
                <Theme src={themeCover}/>
                <Theme src={themeCover}/>
                <Theme src={themeCover}/>
                <Theme src={themeCover}/>
            </ThemeContainer>
            <PhotoContainer>
                <Photo src={frame}/>
                <Photo src={frame}/>
                <Photo src={frame}/>
                <Photo src={frame}/>
                <Photo src={frame}/>
                <Photo src={frame}/>
                <Photo src={frame}/>
                <Photo src={frame}/>
            </PhotoContainer>
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

const SaveButtonContainer = styled. div`
    position:absolute;
    top:-30px;
    left:30px;
`
const DeleteButtonContainer = styled. div`
    position:absolute;
    top:-30px;
    right:30px;
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
const ThemeContainer = styled.div`
    width:1000px;
    height:300px;
    border:1px solid black;
    display:flex;
    flex-direction:vertical;
    justify-content:center;
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    margin: auto;
    margin-bottom:20px;
`
const Theme = styled.img`
    width:190px;
    height:300px;
`
const PhotoContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    width:1000px;
    margin:auto;
`
const Photo = styled.img`
    width:150px;
    margin:auto;
    margin-bottom:20px;
`

export default Edit;
