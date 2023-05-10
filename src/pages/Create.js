import styled from "styled-components";
import kitsch from '../images/kitsch1.jpeg';
import nature from '../images/nature1.jpeg';
import cat from '../images/cat1.jpeg';
import black from '../images/black1.jpeg';
import pattern from '../images/pattern1.jpeg';
import React, { useEffect } from "react";
import { useState } from "react";
import { firestore } from '../firebase';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

function Create(props) {

    //테마별 대표 이미지
    const themeList=[{name:"kitsch", img:kitsch},
                {name:"nature", img:nature},
                {name:"cat", img:cat},
                {name:"black", img:black},
                {name:"pattern", img:pattern}];


    const auth = getAuth();
    const [user,setUser] = useState();
    let userImageList=[]
    const [imgUrlList, setImgUrlList] = useState([]);
    let oldImgUrlList=[]


    //유저가 업로드한 이미지 가져오기
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
        const users = firestore.collection("user");//유저 정보 가져오기
        const userEmail = user.email; 
        users.doc(userEmail).get().then((doc) => {
            userImageList = doc.data().image; //유저가 업로드한 이미지 목록
            
            for(let i=0; i<userImageList.length; i++){ //유저가 업로드한 이미지 정보 가져오기
                let userImage = userImageList[i];
                const image = firestore.collection('image');
                                    
                image.doc(userImage).get().then((document)=>{
                const imageInfo = document.data();
                var imgUrl = imageInfo.imgUrl;
                if(!oldImgUrlList.includes(imgUrl)){
                    oldImgUrlList = [...oldImgUrlList,imgUrl] //map을 위한 이미지 url 배열 만들기
                    setImgUrlList(oldImgUrlList)}
                    })}
                        });} else {
                                        }
                                });
                    },[]);


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
            {imgUrlList.map(url=>(
                    <label>
                        <ThemeRadio type="radio" checked={props.selectedPhoto.indexOf(url)!=-1} value={url} onClick={props.handleSelectedPhoto}/>
                        <PhotoBox>
                            <Photo src={url}/>
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
    @media Screen and (max-width:600px){
        padding-top:100px;
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
    margin:0px auto;
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
    height:220px;
    margin:10px;
    box-sizing: border-box;
    object-fit:cover;
    border:1px solid black;
    @media Screen and (max-width:600px){
        width:90px;
        height:130px;
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
    margin:0px auto;
    margin-bottom:20px;
    padding:20px;
    @media Screen and (max-width:1300px){
        grid-template-columns:repeat(3, 1fr);
    }
    @media Screen and (max-width:600px){
        padding:5px;
    }
    label>input[type=radio]:checked + div{
        border:3px solid black;
        box-sizing: border-box;
    }
`
const PhotoBox = styled.div`
    box-sizing: border-box;
    border:2px solid #ffffff;
    width:150px;
    height:220px;
    margin:10px 17px;
    box-sizing: border-box;
    object-fit:cover;
    border:1px solid black;
    @media Screen and (max-width:600px){
        width:90px;
        height:130px;
        margin:7px;
        box-sizing: border-box;
    }
`
const Photo = styled.img`
height:216px;
object-fit:cover;
@media Screen and (max-width:600px){
    height:125px;
}

`

export default Create;
