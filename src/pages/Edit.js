import styled from "styled-components";
import frame from '../images/frame1.svg';
import kitsch from '../images/kitsch1.jpeg';
import nature from '../images/nature1.jpeg';
import cat from '../images/cat1.jpeg';
import black from '../images/black1.jpeg';
import pattern from '../images/pattern1.jpeg';
import React, { useEffect } from "react";
import { useState } from "react";
import { firestore } from '../firebase';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

function Edit(props) {


    const themeList=[{name:"kitsch", img:kitsch},
                {name:"nature", img:nature},
                {name:"cat", img:cat},
                {name:"black", img:black},
                {name:"pattern", img:pattern}];


                    const auth = getAuth();
                    const [user,setUser] = useState();
                    let userImageList=[]
                    // const [userImageList,setUserImageList]=useState([]);
                    const [imgUrlList, setImgUrlList] = useState([]);
                    let oldImgUrlList=[]
                    useEffect(()=>{
                        onAuthStateChanged(auth, (user) => {
                            if (user) {
                                // setUser(user);
                                const users = firestore.collection("user");
                                const userEmail = user.email;
                            
                                users.doc(userEmail).get().then((doc) => {
                                    userImageList = doc.data().image;
                                // userImageList = image;
                              console.log(userImageList)

                              for(let i=0; i<userImageList.length; i++){
                                
                                let userImage = userImageList[i];
                                console.log(userImage);
                                const image = firestore.collection('image');
                                
                                image.doc(userImage).get().then((document)=>{
                                    const imageInfo = document.data();
                                console.log(imgUrlList)
                                  
                                    console.log(imageInfo.imgUrl)
                                    var imgUrl = imageInfo.imgUrl;
                                    if(!oldImgUrlList.includes(imgUrl)){
                                        oldImgUrlList = [...oldImgUrlList,imgUrl]
                                    setImgUrlList(oldImgUrlList)
                                    }
                         
                            })
                            }

                            });

                            
                            } else {
                                    }
                            });
                    },[]);



                

    // const photoList=[{name:"photo1", img:frame},
    //             {name:"photo2", img:frame},
    //             {name:"photo3", img:frame},
    //             {name:"photo4", img:frame},
    //             {name:"photo5", img:frame}];

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
                        <ThemeRadio type="radio" checked={props.selectedPhoto.indexOf(url)!=-1} value={url} onChange={props.handleSelectedPhoto}/>
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
        padding-top:50px;
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

export default Edit;
