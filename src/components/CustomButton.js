import React from 'react';
import styled from 'styled-components';

function CustomButton(props) {
  return (
    <Button onClick={props.onclick} >{props.text}</Button>
  );
}
const Button = styled.button`
  width:100px;
  font-family: goblin;
  width:250px;
  height:50px;
  background-color:#D9D9D9;
  font-size:25px;
  border-radius:40px;
  margin-left:auto;
  margin-right:auto;
`
export default CustomButton;
