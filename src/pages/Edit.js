import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import star from '../images/star.png'
import polaroid from '../images/polaroid.svg';
import Menu from "./Menu";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import theme1 from "../images/theme1.svg";
import arrowLeft from '../images/arrow_left.svg';
import arrowRight from '../images/arrow_right.svg';
import frame from '../images/frame1.svg';
import themeCover1 from '../images/themeCover.svg';
import themeCover2 from '../images/themeCover.svg';
import themeCover3 from '../images/themeCover.svg';
import themeCover4 from '../images/themeCover.svg';
import themeCover5 from '../images/themeCover.svg';
import React from "react";

function Edit(props) {
    // const [selectedTheme, setSelectedTheme]= useState();
    // const [selectedPhoto, setSelectedPhoto] = useState([]);

    // const handleSelectedTheme=(e)=>{
    //     setSelectedTheme(e.target.value)
    //     console.log(e.target.value)
    // }
    // const handleSelectedPhoto=(e)=>{
    //     let include = selectedPhoto.includes(e.target.value);
    //     console.log(include)
    //     if(!include){
    //         setSelectedPhoto(selectedPhoto.concat(e.target.value));
    //     }else{
    //         const filtered = selectedPhoto.filter((filter)=>filter!==e.target.value)
    //         setSelectedPhoto(filtered)
    //     }
    // }

    const themeList=[{name:"themeCover1", img:themeCover1},
                {name:"themeCover2", img:themeCover2},
                {name:"themeCover3", img:themeCover3},
                {name:"themeCover4", img:themeCover4},
                {name:"themeCover5", img:themeCover5}];

    const photoList=[{name:"photo1", img:frame},
                {name:"photo2", img:frame},
                {name:"photo3", img:frame},
                {name:"photo4", img:frame},
                {name:"photo5", img:frame}];

  return (
    <Container>
            <span>theme</span>
            <ThemeContainer>
                {themeList.map(theme=>(
                    <label>
                        <ThemeRadio type="radio" checked={theme.name==props.selectedTheme} value={theme.name} onChange={props.handleSelectedTheme}/>
                        <ThemeBox>
                            <Theme src={theme.img}/>
                        </ThemeBox>
                    </label>
                ))}
            </ThemeContainer>
            <PhotoContainer>
            {photoList.map(photo=>(
                    <label>
                        <ThemeRadio type="radio" checked={props.selectedPhoto.indexOf(photo.name)!=-1} value={photo.name} onClick={props.handleSelectedPhoto}/>
                        <PhotoBox>
                            <Photo src={photo.img}/>
                        </PhotoBox>
                    </label>
                ))}
            </PhotoContainer>
    </Container>
  );
}

const Container = styled.div`
    font-family: goblin;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: auto;
    padding-top:130px;
    display:flex;
    text-align:center;
    @media Screen and (max-width:1300px){
        width:calc(100vw - 0px);
    }

    >span{
        font-size:25px;
        margin:20px auto;
    }

`
const ThemeContainer = styled.div`
    display:flex;
    flex-direction:vertical;
    justify-content:center;
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    margin: auto;
    margin-bottom:20px;
    border:2px solid black;
    padding:20px;
    @media Screen and (max-width:1300px){
        grid-template-columns:repeat(3, 1fr);
    }
    @media Screen and (max-width:600px){
        padding:5px;
    }
    label>input[type=radio]:checked + div{
        border:2px solid black;
        box-sizing: border-box;
    }
`
const ThemeRadio = styled.input`
    visibility:hidden;
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`
const ThemeBox = styled.div`
    box-sizing: border-box;
    border:2px solid #ffffff;
    margin:0px 5px;
`
const Theme = styled.img`
    width:150px;
    margin:10px;
    box-sizing: border-box;
    @media Screen and (max-width:600px){
        width:90px;
        margin:0px;
        padding:5px;
    }
`
const PhotoContainer = styled.div`
display:flex;
flex-direction:vertical;
justify-content:center;
display:grid;
grid-template-columns:repeat(5, 1fr);
margin: auto;
margin-top:30px;
margin-bottom:20px;
// padding:20px;
// border:1px solid black;
@media Screen and (max-width:1300px){
    grid-template-columns:repeat(3, 1fr);
}
@media Screen and (max-width:600px){
    padding:5px;
}
label>input[type=radio]:checked + div{
    border:2px solid black;
    box-sizing: border-box;
}
`
const PhotoBox = styled.div`
    box-sizing: border-box;
    border:2px solid #ffffff;
    margin:7px 5px;
`
const Photo = styled.img`
    width:150px;
    margin:10px;
    box-sizing: border-box;
    @media Screen and (max-width:600px){
        width:90px;
        margin:0px;
        padding:5px;

    }
`

export default Edit;
