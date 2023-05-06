import styled from "styled-components";
import frame from '../images/frame.svg';
import React from "react";
import Menu from "./Menu";
import { useState,useRef,useCallback,useEffect } from "react";
import Header from "../components/Header";
import { onAuthStateChanged, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {getStorage, ref, uploadBytes, listAll, getDownloadURL,} from "firebase/storage";
import { firestore ,firebaseApp,
  firebaseDb,
  firebaseStorage,} from '../firebase';

function Main() {
  // const [userEmail, setUserEmail] =  useState()

  const auth = getAuth();
  let userEmail=""
onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail = user.email
    // setUserEmail(user.email)
    // ...
  } else {

  }
});

    const [showMenu, setShowMenu] = useState(false);

    const toshowMenu = ()=>{
        setShowMenu(true)
    }
    const tocloseMenu = ()=>{
      setShowMenu(false)
    }
  
    const photoInput = useRef();
    
    const imgInput=()=>{
      console.log("clicked");
      photoInput.current.click();
    }
    



    const [imageUpload, setImageUpload] = useState("");
      const storage = getStorage(firebaseApp);

    const onUploadImage = useCallback((e) => {
      if (e.target.files) {
        console.log(e.target.files[0])
        setImageUpload(e.target.files[0]);
        console.log(e.target.files[0])
        return;
      }
      console.log(imageUpload);
    }, []);


    useEffect(() => {
      if (!imageUpload) return;
      const imageRef = ref(storage, `image/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url)
          const image = firestore.collection("image");
        image.doc(imageUpload.name).set({
            imgUrl: url,
            creater:userEmail
          });

          const user = firestore.collection("user");
          user.doc(userEmail).get().then((doc) => {
          const userInfo = doc.data();
          const newList = [...userInfo.image, imageUpload.name];
          user.doc(userEmail).update({image:newList});

          setImageUpload("");
        });
      });
    }, [imageUpload])});


    // const uploadImgUrl = async () => {
    //   await addDoc(collection(firebaseDb, "image"), {
    //     imgUrl: image,
    //     creater: userEmail
    //   });
    //   setImageUpload("");
    //   setImage("");
    // };

    
    // // first time fetch
    // useEffect(() => {
    //   fetchImages();
    // }, []);

  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <MainContainer>
            <Header starOnclick={toshowMenu}/>
            <ContentContainer>
                <Title>MAKE YOUR</Title>
                <Frame src={frame} onClick={imgInput}/>
                <input type="file" accept="image/jpg, image/jpeg, image/png" ref={photoInput} onChange={onUploadImage} style={{display: "none"}}/>
                <InputContainer>
                    <Input placeholder="위 아이콘을 눌러 사진을 등록하거나 링크를 입력해주세요"/>
                    <Button>GO!</Button>
                </InputContainer>
                <Title>PHOTOBOOK</Title>
            </ContentContainer>
        </MainContainer>
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
const MainContainer = styled.div`
    z-index:1;
    width:100vw;
`
const Icon = styled.img`
  width:60px;
  height:60px;
  margin-bottom:50px;
  position:absolute;
  top:-70px;
  right:40px;
`
const ContentContainer = styled.div`
    height:550px;
    padding-top:110px;
`
const Title = styled.div`
  font-size:60px;
  @media Screen and (max-width:600px){
    font-size:50px;
  }
  @media Screen and (max-width:500px){
    font-size:40px;
  }
`
const Frame = styled.img`
  width:400px;
  height:300px;
  margin: 0px auto;
  @media Screen and (max-width:500px){
  width:320px;
  height:240px;
  }
`
const InputContainer = styled.div`
  display:flex;
  flex-direction:vertical;
  width:800px;
  margin:20px auto 10px auto;
  @media Screen and (max-width:900px){
    width:calc(100vw - 100px);
  }
  @media Screen and (max-width:500px){
    width:300px;}
`
const Input  =styled.input`
  font-size:15px;
  font-family: goblin;
  width:700px;
  height:30px;
  border-radius:30px 0px 0px 30px;
  background-color:#D9D9D9;
  border: 1px solid black;
  padding:0px 20px;
  margin-left:auto;
  @media Screen and (max-width:900px){
  width:calc(100vw - 100px)};
  @media Screen and (max-width:500px){
    width:200px;}
`
const Button = styled.button`
    font-family: goblin;
    font-size:20px;
    width:100px;
    height:32px;
    margin-left:0px;
    border: 1px solid black;
    border-radius:0px 30px 30px 0px;
    background-color: #FFFFFF;
`
export default Main;
