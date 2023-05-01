import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import star from '../images/star.png'
import polaroid from '../images/polaroid.svg';
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import theme1 from "../images/theme1.svg";
import arrowLeft from '../images/arrow_left.svg';
import arrowRight from '../images/arrow_right.svg';
import Edit from "./Edit";
import frame from '../images/frame1.svg'

function PhotoBook() {
    const location = useLocation();
    console.log(location);
    const albumName = location.state;
    const [showMenu, setShowMenu] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [saveButton, setSaveButton] = useState("edit");
    const [slideIndex, setSlideIndex] = useState(0);

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

  useEffect(()=>{
    if(!showEdit){
         setShowEdit((showEdit)=>!showEdit);
         console.log(showEdit);}
  },[showEdit]
  )
useEffect(()=>{
  if(showEdit){
  setSaveButton((saveButton)=>"save");}
  console.log(showEdit);
  console.log(saveButton);
},[saveButton])

  const toshowEdit=()=>{
    setShowEdit(true);
    setSaveButton("save");
    console.log(showEdit);
  }

  return (
    <Container>
        {showMenu?<Menu onclick={tocloseMenu}/>:""}
        {showEdit?<Edit/>:
        <MainContainer>
            <ButtonContainer>
                <CustomButton text={saveButton} width='100' height="40" onclick={toshowEdit}/>
            </ButtonContainer>
            <Icon src={star} onClick={toshowMenu}/>
            <Title>2023.04</Title>
            <ThemeContainer>
                <Arrow src={arrowLeft} onClick={slideLeft}/>
                <Theme src={theme1}/>
                <SlideContainer>
                        <ShowContainer>
                            <ImageContainer style={{
                                transition: "all 500ms ease-in-out",
                                transform: `translateX(${
                                    -1 * (410 * slideIndex)}px)`,}}>
                                <img src={frame}/>
                                <img src={frame}/>
                                <img src={frame}/>
                                <img src={frame}/>
                            </ImageContainer>
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
    height:100vh;
    position: absolute;
    margin-top:140px;
`

const ButtonContainer = styled. div`
    position:absolute;
    top:-30px;
    left:30px;
`
const Icon = styled.img`
  width:60px;
  height:60px;
  margin-left:auto;
  margin-right:30px;
  margin-top:20px;
  position:absolute;
  top:-70px;
  right:0px;


  @media Screen and (max-width:600px){
    width:50px;
    height:50px;
}
`
const Title = styled.div`
  font-size:40px;
  margin-top:30px;
  margin-bottom:60px;
  @media Screen and (max-width:600px){
    font-size:30px;
}
`
const ThemeContainer = styled.div`
    display:flex;
    flex-direction:vertical;
    justify-content:center;
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
`
const ImageContainer = styled.div`
  width:1000px;
  display:flex;
  flex-direction:vertical;
  
`
const SlideContainer = styled.div`
  position:absolute;
`
export default PhotoBook;
