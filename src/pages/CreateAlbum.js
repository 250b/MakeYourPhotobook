import Header from "../components/Header";
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import Create from "./Create";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebase";
import { getAuth,onAuthStateChanged } from 'firebase/auth';

function CreateAlbum() {
    let navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [title, setTitle] = useState();
    const [userEmail, setUserEmail] = useState();
    const auth = getAuth();

    //유저 정보
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email)
      } else {
      }
    });

    const [selectedTheme, setSelectedTheme]= useState();
    const [selectedPhoto, setSelectedPhoto] = useState([]);

    //테마 선택
    const handleSelectedTheme=(e)=>{
        setSelectedTheme(e.target.value)
    }
    //이미지 선택
    const handleSelectedPhoto=(e)=>{
        let include = selectedPhoto.includes(e.target.value);
        if(!include){
            setSelectedPhoto(selectedPhoto.concat(e.target.value));
        }else{
            const filtered = selectedPhoto.filter((filter)=>filter!==e.target.value)
            setSelectedPhoto(filtered)
        }
    }

    //제목 변경 시 
    const onTitleChange=(event)=>{
            event.target.value =  event.target.value.replace(/[^a-zA-Z0-9.]/g, ''); //영어, . 만 가능
        setTitle(event.target.value)
    }

    //메뉴 열기
    const toshowMenu = ()=>{
      setShowMenu(true)
    }
    //메뉴 닫기
    const tocloseMenu = ()=>{
        setShowMenu(false)
    }

    //create 버튼 기능 - 앨범 생성
    const toCreate=()=>{
        try{
            const user = firestore.collection("user");
            user.doc(userEmail).get().then((doc) => {
                const userInfo = doc.data();
                if(!userInfo.album.includes(title)&&title&&selectedTheme&&selectedPhoto){ // 모든 정보가 입력되어야 생성 가능
                    const newList = [...userInfo.album, title];
                user.doc(userEmail).set({email: userEmail, album: newList, image: userInfo.image}); //유저 정보에 새 앨범 추가


                const album = firestore.collection("album");
            album.doc(title+userEmail).set({title:title, theme:selectedTheme, creater:userEmail, image:selectedPhoto}) //앨범 정보에 새 앨범 추가

            const image = firestore.collection("image");  
            navigate('/myalbum')}else{ 
                alert("모든 정보를 입력했는지 확인한 후 다시 시도하십시오")
            }
                })}
           catch(error){
            console.log(error)
        }

    }


    return(
        <Container>
            {showMenu?<Menu onclick={tocloseMenu}/>:""}
            <HeaderContainer>
                <Header starOnclick={toshowMenu} leftButton={"create"} leftButtonOnclick={toCreate}></Header>
                <TitleContainer>
                    <Input placeholder={"TITLE"} onChange={onTitleChange} value={title} maxLength="6"/>
                </TitleContainer>
            </HeaderContainer>
            <Create handleSelectedTheme={handleSelectedTheme} handleSelectedPhoto={handleSelectedPhoto} selectedTheme={selectedTheme} selectedPhoto={selectedPhoto}/>
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
const HeaderContainer = styled.div`
`
const TitleContainer = styled.div`
    display:flex;
    flex-direction:vertical;
    // width:400px;
    position:absolute;
    z-index:2;
    .left{
        left:calc(50vw - 215px);
        top:10px;
    }
    .right{
        left:calc(50vw + 160px);
        top:10px;
    }
    input:focus{
        outline:none;
    }
`
const Input = styled.input`
z-index:2;
font-family:goblin;
width:300px;
height:40px;
left:calc(50vw - 150px);
position:absolute;
top:40px;
font-size:40px;
border:0px;
padding-bottom:20px;
text-align:center;
border-bottom:5px solid black;
@media Screen and (max-width:600px){
    font-size:20px;
    width:150px;
    left:calc(50vw - 75px);
    padding-bottom:10px;
  }

`
export default CreateAlbum;