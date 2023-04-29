import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";
import polaroid from '../images/polaroid.svg';

function MyAlbum() {
  let navigate = useNavigate();

  return (
    <Container>
        <Title>MY ALBUM</Title>
        <AlbumContainer>
            <Album><Polar><img src={polaroid}/><span>first</span></Polar></Album>
            <Album><Polar><img src={polaroid}/><span>first</span></Polar></Album>
            <Album><Polar><img src={polaroid}/><span>first</span></Polar></Album>
            <Album><Polar><img src={polaroid}/><span>first</span></Polar></Album>
            <Album><Polar><img src={polaroid}/><span>first</span></Polar></Album>
        </AlbumContainer>
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

const Title = styled.div`
  font-size:40px;
  margin-top:30px;
  margin-bottom:30px;
  @media Screen and (max-width:600px){
    font-size:30px;
}

`
const AlbumContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    margin:auto;
    @media Screen and (max-width:900px){
        grid-template-columns:repeat(2, 1fr);
    }
`
const Album = styled.div`

`
const Polar = styled.div`
  width:300px;
  height:300px;
  position:relative;
  @media Screen and (max-width:600px){
    width:180px;
    height:180px;
}
  >img{
    width:250px;
    height:250px;
    position:absolute;
    left:25px;
    @media Screen and (max-width:900px){
        left:25px;
    }
    @media Screen and (max-width:600px){
        width:170px;
        height:170px; 
        left:5px;
    }
  }
  >span{
    position:absolute;
    bottom:65px;
    font-size:20px;
    left:115px;
    @media Screen and (max-width:900px){
        left:115px;
    }
    @media Screen and (max-width:600px){
        font-size:15px;
        bottom:20px;
        left:65px;
    }
  }
`
export default MyAlbum;
