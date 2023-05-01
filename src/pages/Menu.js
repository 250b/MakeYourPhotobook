import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import star from '../images/star.png'

function Menu(props) {
    let navigate = useNavigate();

    const toMyAlbum =()=>{
        navigate('/myalbum')
    }

  return (
    <Container>
        <ContentContainer>
            <Icon src={star} onClick={props.onclick}/>
            <div>'s photobook</div>
            <MenuList onClick={toMyAlbum}>My Album</MenuList>
            <MenuList>개인정보</MenuList>
            <MenuList>LOGOUT</MenuList>
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
  z-index:100;
  position : fixed;
  overflow : hidden;
`
const ContentContainer = styled.div`
    background-color:#00000090;
    width:300px;
    height:100%;
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
const MenuList = styled.button`
    width:300px;
    height:80px;
    text-align:center;
    font-size:20px;
    font-family: goblin;
    border:1px solid black;
    background-color:#00000000;
`

export default Menu;
