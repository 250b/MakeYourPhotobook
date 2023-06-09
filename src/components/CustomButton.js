import React from 'react';
import styled from 'styled-components';

function CustomButton(props) {
  return (
    <Button {...props} onClick={props.onclick}>{props.text}</Button>
  );
}
const Button = styled.button`
  width:${(props)=>props.isMobile?"":props.width||250}px;
  font-family: goblin;
  height:${(props)=>props.height||50}px;
  background-color:#D9D9D9;
  font-size:${(props)=>props.isMobile?15:20}px;
  border-radius:40px;
  margin-left:auto;
  margin-right:auto;
  border:2px solid black;
`
export default CustomButton;
