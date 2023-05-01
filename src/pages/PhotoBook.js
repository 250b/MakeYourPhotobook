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

function PhotoBook() {
    const location = useLocation();
    console.log(location);
    const albumName = location.state;
    const [showMenu, setShowMenu] = useState(false)
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
            <ButtonContainer>
                <CustomButton text="edit" width='100' height="40"/>
            </ButtonContainer>
            <Icon src={star} onClick={toshowMenu}/>
            <Title>{albumName}</Title>
            <ThemeContainer>
                <Arrow src={arrowLeft}/>
                <Theme src={theme1}/>
                <Arrow src={arrowRight}/>
            </ThemeContainer>
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

const ButtonContainer = styled. div`
    position:absolute;
    top:-30px;
    left:30px;
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
    display:flex;
    flex-direction:vertical;
    justify-content:center;
`
const Arrow = styled.img`
    width:35px;
    height:35px;
    margin: auto 60px;
`
const Theme = styled.img`
    width:800px;
    height:600px;
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
export default PhotoBook;
