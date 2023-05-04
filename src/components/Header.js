import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import star from '../images/star.png';
import { useMediaQuery } from 'react-responsive';

function Header(props) {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });

  return (
    <Container>
        <LeftButtonContainer>
            {props.leftButton?<CustomButton text={props.leftButton} width='110' height="40" isMobile = {isMobile} onclick={props.leftButtonOnclick}/>:""}
        </LeftButtonContainer>
        <Title>{props.title}</Title>
        <RightButtonContainer>
            {props.rightButton?
            <CustomButton text={props.rightButton} width='150' height="40" isMobile = {isMobile} onclick={props.rightButtonOnclick}/>
            :<Icon src={star} onClick={props.starOnclick}/>}
        </RightButtonContainer>
    </Container>
    
  );
}
const Container = styled.div`
    height:140px;
    max-width:100vw;
    margin-Bottom:30px;
    display:flex;
    flex-direction:vertical;
    justify-content:space-between;
    position:absolute;
    top:0;
    z-index:2;
    // border:1px solid black;
`
const LeftButtonContainer = styled.div`
    min-width:150px;
    text-align:left;
    margin-left:30px;
    height:80px;
    padding-top:25px;
    // border:1px solid black;
    @media Screen and (max-width:600px){
      margin-left:20px;
      min-width:90px;
    }
`
const RightButtonContainer = styled.div`
    min-width:150px;
    text-align:right;
    margin-right:30px;
    height:80px;
    padding-top:25px;
    // border:1px solid black;
    @media Screen and (max-width:600px){
      margin-right:20px;
      min-width:90px;
    }
`
const Icon = styled.img`
  width:60px;
  height:60px;
  margin-top:-15px;
  @media Screen and (max-width:600px){
    width:40px;
    height:40px;
    margin-top:0px;
  }
`
const Title = styled.div`
  width:100vw;
  font-size:40px;
  margin:auto;
  @media Screen and (max-width:600px){
    font-size:24px;

  }
`
export default Header;
