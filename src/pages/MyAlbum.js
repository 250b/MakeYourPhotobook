import styled from "styled-components";
import CustomButton from "../components/CustomButton"
import { useNavigate } from "react-router-dom";

function MyAlbum() {
  let navigate = useNavigate();

  return (
    <Container>
        <Title>MY ALBUM</Title>
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
  font-size:60px;
  @media Screen and (max-width:800px){
    font-size:40px;
  }
`
export default MyAlbum;
