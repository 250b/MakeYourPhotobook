import styled from "styled-components";
import React from "react";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import star from '../images/star.png'
import polaroid from '../images/polaroid.svg';
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import theme1 from "../images/theme1.svg";
import theme2 from "../images/theme2.svg";
import arrowLeft from '../images/arrow_left.svg';
import arrowRight from '../images/arrow_right.svg';
import Edit from "./Edit";
import frame from '../images/frame1.svg'
import Header from "../components/Header";
import HTMLFlipBook from "react-pageflip";

function PhotoBook() {
    const location = useLocation();
    console.log(location);
    const albumName = location.state;
    const [showMenu, setShowMenu] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [saveButton, setSaveButton] = useState("edit");
    const [slideIndex, setSlideIndex] = useState(0);

    const theme1=[{theme1}, {theme2}, {theme1}, {theme2}];

    const selectedImages = [{frame}, {frame}, {frame}, {frame} ];

    const toshowMenu = ()=>{
        setShowMenu(true)
    }
    const tocloseMenu = ()=>{
      setShowMenu(false)
  }
  const slideRight=()=>{
    console.log(slideIndex)
    if(slideIndex==3){
        setSlideIndex(0);
    }else{
        setSlideIndex(slideIndex+1);
    }   
}

const slideLeft=()=>{
    console.log(slideIndex)
    if(slideIndex==3 || slideIndex==0){
        setSlideIndex(0);
    }else{
        setSlideIndex(slideIndex-1);
    }   
}


  const toshowEdit=()=>{
    setShowEdit(true);
    setSaveButton("save");
    console.log(showEdit);
  }

const Page = React.forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref}> /* ref required */
        <h1>Page Header</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    );
  });
  const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(0)


    const onPage = (e) => {
      setPage(
        e.data,
      );
    };
  
    const componentDidMount=()=> {
      setTotalPage(
        this.flipBook.getPageFlip().getPageCount(),
      );
    }
  
  
  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        <Header starOnclick={toshowMenu} leftButton="edit" leftButtonOnclick={toshowEdit} title="2023.04"/>
        {showEdit?<Edit/>:
        <MainContainer>
            <ThemeContainer>
                <Arrow src={arrowLeft} onClick={slideLeft}/>
                <SlideContainer>
                        <ShowContainer>
                        <HTMLFlipBook
                            width={550}
                            height={733}
                            size="stretch"
                            minWidth={0}
                            maxWidth={1300}
                            minHeight={400}
                            maxHeight={1533}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={true}
                            onFlip={onPage}
                            className="demo-book"
                        ><img src={theme2}/>
                        <div className="demoPage">Page 2</div>
                        <div className="demoPage">Page 3</div>
                        <div className="demoPage">Page 4</div>
                        </HTMLFlipBook>
                        </ShowContainer>
                    </SlideContainer>
                <Arrow src={arrowRight} onClick={slideRight}/>
            </ThemeContainer>
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
    width:100vw;
    display:flex;
    flex-direction:column;
    text-align:center;
`
const ThemeContainer = styled.div`
    display:flex;
    flex-direction:vertical;
    justify-content:center;
    border:1px solid black;
`
const Arrow = styled.img`
    width:35px;
    height:35px;
    margin: auto 60px;
`
const Theme = styled.img`
    width:800px;
    height:600px;
`
const ShowContainer =styled.div`
    overflow:hidden;
    display:flex;
    margin-top:50px;
    width:500px;
    height:350px;
    .book{
        border:1px solid black;
    }
`
const ImageContainer = styled.div`
  width:1000px;
  display:flex;
  flex-direction:vertical;
`
const Image = styled.div`
  display:flex;
`
const SlideContainer = styled.div`
  position:absolute;
`
export default PhotoBook;
