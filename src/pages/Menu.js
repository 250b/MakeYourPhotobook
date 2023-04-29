import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import star from '../images/star.png'

function Menu() {
    let navigate = useNavigate();

  return (
    <Container>
        <ContentContainer>
            <Icon src={star}/>
            <div>'s photobook</div>
            <MenuList>My Album</MenuList>
            <MenuList>개인정보</MenuList>
            <MenuList>LOGOUT</MenuList>
        </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: goblin;
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color: #00000050;
  z-index:100;
  position: relative;
`
const ContentContainer = styled.div`
    background-color:#00000090;
    width:300px;
    height:100vh;
    margin-left:auto;
    border:1px solid black;
`

const Icon = styled.img`
  width:60px;
  height:60px;
  margin-left:auto;
  margin-right:20px;
  margin-bottom:50px;
`
const MenuList = styled.div`
    width:300px;
    height:80px;
    text-align:center;
    font-size:20px;
    padding-top:50px;
    border:1px solid black;
`

export default Menu;
