import styled from "styled-components";
import React from "react";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Edit from "./Edit";
import frame2 from '../images/frame2.svg'
import frame3 from '../images/frame3.svg'
import Header from "../components/Header";
import HTMLFlipBook from "react-pageflip";
import { onAuthStateChanged, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {getStorage, ref, uploadBytes, listAll, getDownloadURL,} from "firebase/storage";
import { firestore ,firebaseApp,
  firebaseDb,
  firebaseStorage,} from '../firebase';

function PhotoBook() {
    const location = useLocation();
    const albumName = location.state.albumName.albumName;
    console.log(location.state.albumName.albumName);
    const [showMenu, setShowMenu] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const themeList={
      nature:["url('./nature1.jpeg')", "url('./nature2.jpeg')", "url('./nature3.jpeg')", "url('./nature4.jpeg')"],
       cat:["url('./cat1.jpeg')", "url('./cat2.jpeg')", "url('./cat3.jpeg')"],
       pattern:["url('./pattern1.jpeg')", "url('./pattern2.jpeg')", "url('./pattern3.png')", "url('./pattern4.jpeg')"],
       black:["url('./black1.jpeg')", "url('./black2.jpeg')", "url('./black3.jpeg')", "url('./black4.jpeg')"],
       kitsch:["url('./kitsch1.jpeg')", "url('./kitsch2.jpeg')", "url('./kitsch3.jpeg')", "url('./kitsch4.jpeg')"],
  }


    //유저 정보 확인해서 동일하고 이름도 동일한 앨범 가져오기
    //앨범의 테마 가져와서 설정
    const auth = getAuth();
    let userEmail =""
    let themeName=""
    const [theme, setTheme] =useState([])
    const [selectedImages, setSelectedImages] =useState([])
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userEmail = user.email
        console.log(userEmail)
      } else {
      }
    });
    console.log(userEmail)
    const album = firestore.collection("album");
    album.doc(albumName).get().then((document)=>{
      const albumInfo = document.data();
      if(albumInfo.creater=userEmail){
        themeName=albumInfo.theme
        console.log(themeName)
        console.log(themeList[themeName])
        setTheme(themeList[themeName])
        setSelectedImages(albumInfo.image)

      }
})
// setTheme(themeList[themeName])
useEffect(()=>{
  // setTheme(themeList[themeName])
  console.log(themeList[themeName])
},[themeName])

console.log(theme)
    // const selectedImages = [frame2, frame3, frame2, frame3 ];

    const toshowMenu = ()=>{
        setShowMenu(true)
    }
    const tocloseMenu = ()=>{
      setShowMenu(false)
  }

  const toshowEdit=()=>{
    setShowEdit(true);
  }
  const tocloseEdit=()=>{
    setShowEdit(false);
  }

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
        <Header starOnclick={toshowMenu} leftButton={showEdit?"save":"edit"} leftButtonOnclick={showEdit?tocloseEdit:toshowEdit} rightButton={showEdit?"delete":null}title={albumName}/>
        {showEdit?<Edit/>:
        <MainContainer>
                <HTMLFlipBook
                    width={700}
                    height={900} 
                    size="stretch"
                    minWidth={300}
                    // maxWidth={1500}
                    // minHeight={1000}
                    // maxHeight={1000}
                    maxShadowOpacity={0.3}
                    showCover={true}
                    mobileScrollSupport={true}
                    // onFlip={onPage}
                    className="demo-book">
                    {Pages(theme, selectedImages)}
                        {/* <Page theme="url('./theme1.svg')"><Image src={frame}/></Page>
                        <Page theme={theme1}><Image src={frame}/></Page>
                        <Page theme={theme1}><Image src={frame}/></Page>
                        <Page theme={theme1}><Image src={frame}/></Page> */}
                 </HTMLFlipBook>
        </MainContainer>}
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
    // border:1px solid black;
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
  width:400px;
  height:450px;
  margin-top:30px;
  object-fil:cover;
  @media Screen and (max-width:1000px){
      width:270px;
      height:360px;
      margin-top:10px;
  }
`
export default PhotoBook;
