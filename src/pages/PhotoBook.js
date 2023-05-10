import styled from "styled-components";
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Edit from "./Edit";
import Header from "../components/Header";
import HTMLFlipBook from "react-pageflip";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { firestore } from '../firebase';

function PhotoBook() {
  let navigate = useNavigate();
    const location = useLocation();
    const albumName = location.state.albumName.albumName; //myalbum에서 넘겨준 state(앨범 이름)
    const [showMenu, setShowMenu] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    //테마 정보
    const themeList={
      nature:["url('./nature1.jpeg')", "url('./nature2.jpeg')", "url('./nature3.jpeg')", "url('./nature4.jpeg')"],
       cat:["url('./cat1.jpeg')", "url('./cat2.jpeg')", "url('./cat3.jpeg')"],
       pattern:["url('./pattern1.jpeg')", "url('./pattern2.jpeg')", "url('./pattern3.png')", "url('./pattern4.jpeg')"],
       black:["url('./black1.jpeg')", "url('./black2.jpeg')", "url('./black3.jpeg')", "url('./black4.jpeg')"],
       kitsch:["url('./kitsch1.jpeg')", "url('./kitsch2.png')", "url('./kitsch3.jpeg')", "url('./kitsch4.jpeg')"],
  }

    const auth = getAuth();
    let userEmail =""
    let themeName=""
    const [forPropsThemeName, setForPropsThemeName] =useState("")
    const [theme, setTheme] =useState([])
    const [selectedImages, setSelectedImages] =useState([])
    const [selectedTheme,setSelectedTheme] = useState("")


  // 앨범 정보 가져오기
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userEmail = user.email
    const album = firestore.collection("album");
    album.doc(albumName+userEmail).get().then((document)=>{ //state로 받은 앨범이름으로 앨범 정보 가져오기
      const albumInfo = document.data();
        themeName=albumInfo.theme
        setTheme(themeList[themeName])
        setSelectedTheme(themeName)
        setForPropsThemeName(albumInfo.theme)
        setSelectedImages(albumInfo.image)
        })
      } else {
      }
    });

  //메뉴 열기
    const toshowMenu = ()=>{
        setShowMenu(true)
    }

  //메뉴 닫기
    const tocloseMenu = ()=>{
      setShowMenu(false)
  }

  //앨범 수정 열기
  const toshowEdit=()=>{
    setShowEdit(true);
  }

  //저장버튼(앨범 수정 닫기 기능으로 대체)
  const tosave=()=>{
    // const album = firestore.collection("album")
    // album.doc(albumName+userEmail).set(
    //   {
    //     title:albumName,
    //     creater:userEmail,
    //     theme:selectedTheme,
    //     image:selectedImages
    //   })
    setShowEdit(false);
    // album.doc(albumName+userEmail).get().then((document)=>{
    //   const albumInfo = document.data();
    //   })
  }

  //포토북 페이지 
  const Pages=(theme, selectedImages)=>{
     const result=[]; 
      for(let i=0; i< selectedImages.length; i++){
        result.push(<Page theme={theme[i%theme.length]}><Image src={selectedImages[i]}/></Page>)
      }
      return result;
  }

  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <Header starOnclick={toshowMenu} leftButton={showEdit?"save":"edit"} leftButtonOnclick={showEdit?tosave:toshowEdit} rightButton={showEdit?"delete":null}title={albumName}/>
        {showEdit?<Edit toshowMenu={toshowMenu} selectedPhoto={selectedImages} selectedTheme ={forPropsThemeName} albumName={albumName}/>:
        <>
        <MainContainer>
                <HTMLFlipBook
                    width={700}
                    height={900} 
                    size="stretch"
                    minWidth={300}
                    maxShadowOpacity={0.3}
                    showCover={false}
                    mobileScrollSupport={true}
                    className="demo-book">
                    {Pages(theme, selectedImages)}
                 </HTMLFlipBook>
        </MainContainer>
        </>}
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
    width:800px;
    max-height:800ppx;
    margin: auto;
    padding-top:130px;
    display:flex;
    text-align:center;
    @media Screen and (max-width:1000px){
        width:600px;
        padding-top:180px;
        padding-bottom:140px;
    }
    @media Screen and (max-width:600px){
        width:0px;
        height100px;
        margin-left:calc(50vw - 150px);
        padding-top:140px;
        margin-top:auto;
        margin-bottom:auto;
    }
`
const Page = styled.div`
    min-width:400px;
    min-height:400px;
    background-image:${(props)=>props.theme};
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    background-attachment: fixed;
    border:2px solid black;
    @media Screen and (max-width:1000px){
        min-width:270px;
        min-height:360px;
    }
    @media Screen and (max-width:600px){
        width:300px;
        padding-top:0px;
    }
`
const Image = styled.img`
  width:160px;
  height:450px;
  margin-top:30px;
  object-fil:cover;
  border:1px solid black;
  @media Screen and (max-width:1000px){
      width:120px;
      height:320px;
      margin-top:30px;
  }
  @media Screen and (max-width:600px){
    width:120px;
    padding-top:0px;
}
`
export default PhotoBook;
