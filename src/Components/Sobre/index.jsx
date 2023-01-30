
import { Container, SobreContainer, ImgPerfil, MessageContainer, Tecnologias, ContainerCard, TextoSobre} from "./styled";
import Card from "../Card";
import JS from "./../../assets/images/JavaScript.png"
import perfil from "./../../assets/images/perfilpng.png"
import Java from "./../../assets/images/Java.png"
import React from "./../../assets/images/ReactJs.png"
import Html from "./../../assets/images/Html.png"
import Css from "./../../assets/images/CSS3.png"
import Styled from "./../../assets/images/styled.png"
import Mongo from "./../../assets/images/MongoDb.png"
import MySQL from "./../../assets/images/MySQL.png"
import SpringBoot from "./../../assets/images/SpringBoot.png"
import Bootstrap from "./../../assets/images/Bootstrap.png"
const Sobre = () => {
    return(
        <Container>
        <SobreContainer>
            <ImgPerfil src={perfil}/>
          <MessageContainer>
          <TextoSobre>Me chamo Alan, sou formado em Gestão de tecnologia da informação pela anhembi Morumbi, e desenvolvedor full Stack pela RecodePro</TextoSobre>
          </MessageContainer>
          </SobreContainer>
          <Tecnologias>Habilidades tecnicas</Tecnologias>
          <ContainerCard>
         
            <Card img={JS} titulo={'JavaScript'}></Card>
            <Card img={Java} titulo={'Java'}></Card>
            <Card img={React} titulo={'ReactJs'}></Card>
            <Card img={Html} titulo={'HTML5'}></Card>
            <Card img={Css} titulo={'CSS3'}></Card>
            <Card  img={Styled} titulo={'Styled-Components'}></Card>
            <Card  img={Mongo} titulo={'MongoDB'}></Card>
            <Card  img={MySQL} titulo={'MySQL'}></Card>
            <Card  img={SpringBoot} titulo={'SpringBoot'}></Card>
            <Card  img={Bootstrap} titulo={'Bootstrap'}></Card>
            </ContainerCard>
            </Container>
    )
}


export default Sobre;