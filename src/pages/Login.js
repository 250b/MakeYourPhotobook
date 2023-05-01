import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
 
function Login() {
    let navigate = useNavigate();

    const toMain =() =>{
        navigate("/main")
    };

    const InputForm = (inputList) =>{
        return(
            inputList.inputList.map(list =>
                (
                    <div>
                        <InputTitle>{list}</InputTitle>
                        <Input></Input>
                    </div>
                ))
            )
        }

    const InputContainer = ({title, inputList, onclick})=>{
    return(
        <LoginContainer>
            <Title>{title}</Title>
            <InputForm inputList={inputList}/>
            <CustomButton text="YES!" onclick={onclick}/>
        </LoginContainer>
      )
    }

    return (
        <Container>
            <InputContainer title="Login" inputList={["EMAIL", "PW"]} onclick = {toMain}/>
            <Line/>
            <InputContainer title="SIGN UP" inputList={["EMAIL", "PW", "PW CHECK"]}/>
        </Container>
    );
}

const Container = styled.div`
    font-family: goblin;
    min-height:100vh;
    display:flex;
    flex-direction:vertical;
    @media Screen and (max-width:1000px){
        flex-direction:column;
    }
`
const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:384px;
    height:450px;
    padding:40px;
    margin:auto;
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
    font-family: goblin;
    background-color:#D9D9D9;
    width:360px;
    height:20px;
    border-radius:40px;
    padding:10px 15px;
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
        height:0;
        width:calc(100vw - 80px);
        margin-left:40px;
    }
`
export default Login;
