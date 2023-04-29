import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import frame from '../images/frame.svg';
import star from '../images/star.png'

function Main() {
    let navigate = useNavigate();


  return (
    <Container>
        <Icon src={star}/>
        <ContentContainer>
        <Title>MAKE YOUR</Title>
        <Frame src={frame}/>
        <InputContainer>
            <Input/>
            <Button>GO!</Button>
        </InputContainer>
        <Title>PHOTOBOOK</Title>
        </ContentContainer>
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

const ContentContainer = styled.div`
    @media Screen and (max-width:900px){
        width:100vw;
    }
`

const Title = styled.div`
  font-size:60px;
  @media Screen and (max-width:900px){
    font-size:50px;
  }
  @media Screen and (max-width:500px){
    font-size:40px;
  }
`
const Icon = styled.img`
  width:60px;
  height:60px;
  margin-left:auto;
  margin-right:20px;
  margin-bottom:50px;
`

const Frame = styled.img`
  width:400px;
  height:300px;
  margin-left:auto;
  margin-right:auto;
  @media Screen and (max-width:500px){
    width:320px;
  height:240px;
  }
`
const InputContainer = styled.div`
  display:flex;
  flex-direction:vertical;
  width:800px;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  margin-bottom:10px;
  @media Screen and (max-width:900px){
    width:calc(100vw - 100px);
  }
  @media Screen and (max-width:500px){
    width:300px;
`
const Input  =styled.input`
  width:700px;
  height:30px;
  border-radius:30px 0px 0px 30px;
  background-color:#D9D9D9;
  border: 1px solid black;
  margin-left:20px;
  @media Screen and (max-width:900px){
    width:calc(100vw - 200px);
    @media Screen and (max-width:500px){
        width:300px;
`
const Button = styled.button`
    font-family: goblin;
    font-size:20px;
    width:100px;
    height:34px;
    margin-left:0px;
    margin-right:20px;
    border: 1px solid black;
    border-radius:0px 30px 30px 0px;
    background-color: #FFFFFF;
`
export default Main;
