import styled from "styled-components";
import CustomButton from "../components/CustomButton"

function Login() {
  return (
    <Container>
      <LoginContainer>
        <Title>LOGIN</Title>
        <InputTitle>EMAIL</InputTitle>
        <Input></Input>
        <InputTitle>PW</InputTitle>
        <Input></Input>
        <CustomButton text="YES!"/>
      </LoginContainer>
      <Line/>
      <LoginContainer>
        <Title>SIGN UP</Title>
        <InputTitle>EMAIL</InputTitle>
        <Input></Input>
        <InputTitle>PW</InputTitle>
        <Input></Input>
        <InputTitle>PW CHECK</InputTitle>
        <Input></Input>
        <CustomButton text="YES!"/>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
    font-family: goblin;
    min-height:100vh;
    display:flex;
    flex-direction:vertical;
    justify-content:center;
    text-align:center;
    @media Screen and (max-width:1000px){
        flex-direction:column;
    }
`
const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:384px;
    padding:40px;
    margin-top:auto;
    margin-bottom:auto;
    margin-right:auto;
    margin-left:auto;
    margin-top:100px;
    margin-bottom:60px;
    @media Screen and (max-width:460px){
        width:calc(100vw - 80px);

    }

`
const Title = styled.div`
    font-size:40px;
    margin-bottom:30px;
`
const InputTitle = styled.div`
    font-size:20px;
    text-align:left;
    width:382px;
    margin-bottom:5px;
    margin-left:auto;
    margin-right:auto;
    @media Screen and (max-width:460px){
        width:calc(100vw - 80px);
    }

`
const Input = styled.input`
    background-color:#D9D9D9;
    width:360px;
    height:20px;
    border-radius:40px;
    padding:10px;
    margin-bottom:30px;
    @media Screen and (max-width:460px){
        width:calc(100vw - 100px);

    }

`
const Line = styled.div`
    border-left : 1px solid black;
    height : 500px;
    margin-top:auto;
    margin-bottom:auto;
    @media Screen and (max-width:1000px){
        border-bottom : 1px solid black;
        border-left:0;
        height:0;
        width:calc(100vw - 80px);
        margin-left:30px;
    }
`
export default Login;
