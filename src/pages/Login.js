import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
 import React, { useState } from "react";
 import { firestore } from '../firebase';
 import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';


function Login() {
    let navigate = useNavigate();
    //회원가입 input
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPw, setSignupPw] = useState("");
    const [signupPwCheck, setSignupPwCheck] = useState("");
    const [signup, setSignup] = useState(false);

    //로그인 input
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPw, setLoginPw] = useState("");
    const [login, setLogin] = useState(true);
    const auth = getAuth();


    //로그인
    const toMain = async () => {
            try {
              const auth = getAuth();
              const { user } = await signInWithEmailAndPassword(auth, loginEmail, loginPw);
              const { stsTokenManager, uid } = user;
              navigate('/main');
            } catch (error) {
              console.log(error);
            }
    }
//로그인 input onchange
    const onLoginChange=(event)=>{
        const {
            target: { name, value }
          } = event
          if (name === 'email') {
              setLoginEmail(value);
              if((value!="" && loginPw!="")){ //로그인 버튼 활성화
                setLogin(false);
              }else{
                setLogin(true);
              }
          } else if (name === 'pw') {
              setLoginPw(value);
              if(loginEmail!="" && value!=""){//로그인 버튼 활성화
                setLogin(false);
              }else{
                setLogin(true);
              }
          }
    }

   //회원가입 input onchange
    const onSignupChange = (event) => {
        const {
          target: { name, value }
        } = event
        if (name === 'email') {
            setSignupEmail(value);
            if((signupPw===signupPwCheck) && (value!="")){//회원가입 버튼 활성화
                setSignup(false);
            }else{
                setSignup(true);
            }
        } else if (name === 'pw') {
            setSignupPw(value);
            if((value===signupPwCheck) && (signupEmail!="")){//회원가입 버튼 활성화
                setSignup(false);
            }else{
                setSignup(true);
            }
        }else if (name === 'pwCheck') {
            setSignupPwCheck(value);
            if((value===signupPw) &&(signupEmail!="")){
                setSignup(false);
            }else{
                setSignup(true);
            }
        }};

        //회원가입
        const joinWithVerification = async (email, pw) => {
        try {
            const auth = getAuth();
            const { user } = await createUserWithEmailAndPassword(auth, email, pw);

            const userInfo = firestore.collection("user");

            userInfo.doc(user.email).set({email: user.email, album: [], image:[]});

            alert("회원가입 완료");
          } catch (error) {
            alert(error);
          }
      };

    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>
                <InputTitle>EMAIL</InputTitle>
                <Input name="email" value={loginEmail} onChange={onLoginChange}></Input>
                <InputTitle>PW</InputTitle>
                <Input name="pw" value={loginPw} type="password" onChange={onLoginChange}></Input>
                <CustomButton text="YES!" onclick={toMain} disabled={login}/>
            </LoginContainer>
            <Line/>
            <LoginContainer>
                <Title>SIGN UP</Title>
                <InputTitle>EMAIL</InputTitle>
                <Input name="email" value={signupEmail} onChange={onSignupChange}></Input>
                <InputTitle>PW</InputTitle>
                <Input name="pw" value={signupPw}  type="password" onChange={onSignupChange}></Input>
                <InputTitle>PW CHECK</InputTitle>
                <Input name="pwCheck" value={signupPwCheck}  type="password" onChange={onSignupChange}></Input>
                <CustomButton text="YES!" onclick={()=>joinWithVerification(signupEmail,signupPw)} disabled={signup}/>
            </LoginContainer>
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
    border:2px solid black;
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
