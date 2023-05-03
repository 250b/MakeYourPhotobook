import styled from "styled-components";
import React from "react";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import theme2 from "../images/theme2.svg";
import Edit from "./Edit";
import frame from '../images/frame1.svg'
import Header from "../components/Header";
import HTMLFlipBook from "react-pageflip";
import polar from '../images/polaroid.svg'

function PhotoBook() {
    const location = useLocation();
    console.log(location);
    const [showMenu, setShowMenu] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [saveButton, setSaveButton] = useState("edit");
   
    const theme1=[{theme1}, {theme2}, {theme1}, {theme2}];

    const selectedImages = [{frame}, {frame}, {frame}, {frame} ];

    const toshowMenu = ()=>{
        setShowMenu(true)
    }
    const tocloseMenu = ()=>{
      setShowMenu(false)
  }

  const toshowEdit=()=>{
    setShowEdit(true);
    setSaveButton("save");
    console.log(showEdit);
  }

    // const [page, setPage] = useState(0)
    // const [totalPage, setTotalPage] = useState(0)


    // const onPage = (e) => {
    //   setPage(
    //     e.data,
    //   );
    // };
  
  
  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <Header starOnclick={toshowMenu} leftButton="edit" leftButtonOnclick={toshowEdit} title="2023.04"/>
        {showEdit?<Edit/>:
        <MainContainer>
                <HTMLFlipBook
                    width={800}
                    height={800} 
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
                        <div><Image src={frame}/></div>
                        <div><Image src={theme2}/></div>
                        <div><Image src={polar}/></div>
                        <div><Image src={theme2}/></div>
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
    width:900px;
    max-height:800px;
    margin: auto;
    padding-top:140px;
    display:flex;
    // border:1px solid black;
    text-align:center;
    @media Screen and (max-width:1000px){
        width:600px;
        padding-top:140px;
        padding-bottom:140px;
    }
    @media Screen and (max-width:600px){
        width:0px;
        height100px;
        margin-left:calc(50vw - 150px);
        padding-top:100px;
        padding-bottom:200px;
    }
`
const Image = styled.img`
    width:450px;
    height:450px;
    border:2px solid black;
    @media Screen and (max-width:1000px){
        width:280px;
    }
    @media Screen and (max-width:600px){
        width:300px;
        height:300px;
        padding-top:0px;
    }
    
`
export default PhotoBook;
