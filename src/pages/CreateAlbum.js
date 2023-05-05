import Header from "../components/Header";
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import Edit from "./Edit";
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

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email)
        // ...
      } else {
    
      }
    });



    const [selectedTheme, setSelectedTheme]= useState();
    const [selectedPhoto, setSelectedPhoto] = useState([]);

    const handleSelectedTheme=(e)=>{
        setSelectedTheme(e.target.value)
        console.log(e.target.value)
    }
    const handleSelectedPhoto=(e)=>{
        let include = selectedPhoto.includes(e.target.value);
        if(!include){
            setSelectedPhoto(selectedPhoto.concat(e.target.value));
        }else{
            const filtered = selectedPhoto.filter((filter)=>filter!==e.target.value)
            setSelectedPhoto(filtered)
        }
    }

    const onTitleChange=(event)=>{
        setTitle(event.target.value)
    }


    const toshowMenu = ()=>{
      setShowMenu(true)
  }
  const tocloseMenu = ()=>{
    setShowMenu(false)
}
    const toCreate=()=>{
        try{
            const user = firestore.collection("user");

            user.doc(userEmail).get().then((doc) => {
                const userInfo = doc.data();
            const newList = [...userInfo.album, title];
            console.log(newList);
            user.doc(userEmail).set({email: userEmail, album: newList});
            })
            
            const album = firestore.collection("album");
            console.log(title);
            album.doc(title).set({title:title, theme:selectedTheme, creater:userEmail})

            navigate('/myalbum')
        }catch(error){
            console.log(error)
        }

    }


    return(
        <Container>
            {showMenu?<Menu onclick={tocloseMenu}/>:""}
            <HeaderContainer>
                <Header starOnclick={toshowMenu} leftButton={"create"} leftButtonOnclick={toCreate}></Header>
                <TitleContainer>
                    <Input placeholder={"TITLE"} onChange={onTitleChange} value={title}/>
                </TitleContainer>
            </HeaderContainer>
            <Edit handleSelectedTheme={handleSelectedTheme} handleSelectedPhoto={handleSelectedPhoto} selectedTheme={selectedTheme} selectedPhoto={selectedPhoto}/>
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