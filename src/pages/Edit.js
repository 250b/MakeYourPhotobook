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
    </Container>
  );
}

const Container = styled.div`
    font-family: goblin;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: auto;
    padding-top:130px;
    display:flex;
    text-align:center;
    @media Screen and (max-width:1300px){
        width:calc(100vw - 0px);
    }

    >span{
        font-size:25px;
        margin:20px 0px;
    }

`
const ThemeContainer = styled.div`
    display:flex;
    flex-direction:vertical;
    justify-content:center;
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    margin: auto;
    margin-bottom:20px;
    border:2px solid black;
    @media Screen and (max-width:1300px){
        grid-template-columns:repeat(3, 1fr);
    }
     
`
const Theme = styled.img`
    width:160px;
    height:300px;
    padding: 0px 20px;
    @media Screen and (max-width:600px){
        width:100px;
        height:150px;
        padding:0px 10px;
    }
`
const PhotoContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    margin:auto;
    @media Screen and (max-width:1300px){
        grid-template-columns:repeat(3, 1fr);
    }
`
const Photo = styled.img`
    padding: 10px 20px;
    width:160px;
    height:300px;
    margin:auto;
    @media Screen and (max-width:600px){
        width:100px;
        height:150px;
        padding:5px 10px;
    }
`

export default Edit;
