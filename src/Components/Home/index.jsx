import styled from "styled-components";
import Message from "../Message";


const HomeContainer= styled.div`
width: 70%;
margin: 0 auto;
height: 100vh;
display: flex;

`


const Home = () => {
    return (
     
        <HomeContainer>
               <Message textAlign="center" alignSelf="center" text="Olá, sou Alan, bem vindo ao meu portfolio.
" fontSize="60px"/>
        </HomeContainer>
    )

}
export default Home;