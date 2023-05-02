import React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';
import star from '../images/star.png';

function Header(props) {

  return (
    <Container>
        <LeftButtonContainer>
            {props.leftButton?<CustomButton text={props.leftButton} width='100' height="40" />
            :""}
        </LeftButtonContainer>
        <Title>{props.title}</Title>
        <RightButtonContainer>
            {props.rightButton?<CustomButton text={props.rightButton} width='150' height="40"/>
            :<Icon src={star} onClick={props.onclick}/>}
        </RightButtonContainer>
    </Container>
    
  );
}
const Container = styled.div`
    height:110px;
    max-width:100vw;
    margin-Bottom:30px;
    display:flex;
    flex-direction:vertical;
    justify-content:space-between;
    // border:1px solid black;
    position:fixed;
    top:0;
`
const LeftButtonContainer = styled.div`
    min-width:150px;
    text-align:left;
    margin-left:30px;
    height:80px;
    padding-top:25px;
    
`
const RightButtonContainer = styled.div`
    min-width:150px;
    text-align:right;
    margin-right:30px;
    height:80px;
    padding-top:25px;

`
const Icon = styled.img`
  width:60px;
  height:60px;
  margin-top:-15px;
`
const Title = styled.div`
    width:100vw;
  font-size:40px;
  margin:auto;


`
export default Header;
