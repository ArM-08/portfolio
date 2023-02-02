import styled from "styled-components";
import Message from "../Message";

const BackgroundHome = styled.div`
width: 100%;
min-height: 100%;
background: #000;
 `


const HomeContainer= styled.div`
width: 80%;
margin: 0 auto;
height: 100vh;
display: flex;

`


const Home = () => {
    return (
     <BackgroundHome>
        <HomeContainer>
               <Message textAlign="center" alignSelf="center" text="Olá, sou Alan, bem vindo ao meu portfolio.
" fontSize="60px"/>
        </HomeContainer>
        </BackgroundHome>
    )

}
export default Home;