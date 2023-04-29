import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";

function Start() {
  let navigate = useNavigate();

  const toLogin =() =>{
    navigate("/login");
  }
  return (
    <Container>
      <TitleContainer>
        <Title>WOULD <Span/>YOU LIKE</Title>
        <Title>TO MAKE <Span/>YOUR</Title>
        <Title>PHOTO<Span/>BOOK?</Title>
      </TitleContainer>
      <CustomButton text="YES!" onclick={toLogin}/>
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
const Span = styled.span`
  @media Screen and (max-width:800px){
    display:block;
  }
`
const TitleContainer = styled.div`
  margin-bottom:40px;
`

const Title = styled.div`
  font-size:60px;
  @media Screen and (max-width:800px){
    font-size:40px;
  }
`
export default Start;
