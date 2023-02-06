import Java from "./../../assets/images/Java.png"
import React from "./../../assets/images/ReactJs.png"
import Html from "./../../assets/images/Html.png"
import Css from "./../../assets/images/CSS3.png"
import Styled from "./../../assets/images/styled.png"
import Mongo from "./../../assets/images/MongoDb.png"
import MySQL from "./../../assets/images/MySQL.png"
import SpringBoot from "./../../assets/images/SpringBoot.png"
import Bootstrap from "./../../assets/images/Bootstrap.png"
import JS from "./../../assets/images/JavaScript.png"
import Card from "../Card";
import {Titulo, ContainerCard, ContainerHabilidade, BackgroundHabilidade, ExpProfissional, FormacaoAcademica, ContainerFormacao} from "./styled";
import TimeLine from "../TimeLine"


const Habilidades = () =>{
    return (
        <BackgroundHabilidade>
        <ContainerHabilidade>
        <Titulo>Habilidades tecnicas</Titulo>
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
          <ContainerFormacao>
          <ExpProfissional>
          <Titulo>Experiência Profissional</Titulo>
          <TimeLine items={[{ title: "2016 - Até o momento", descricao: "Motorista de Aplicativo - Uber · Autônomo" }, { title: "2019 - 2021", descricao: "Criador de Conteúdo - Twitch" }, { title: "2011 - 2019", descricao: "Cabo (Motorista Categoria D) - Exército Brasileiro" }  ]} ></TimeLine>
          </ExpProfissional>
          <FormacaoAcademica>
          <Titulo>Formação Acadêmica</Titulo>
          <TimeLine items={[{title: "2022 - 2022", descricao: "Desenvolvedor Full Stack - RecodePro"}, { title: "2019 - 2021", descricao: "Graduação - Gestão em tecnologia da Informação - Anhembi Morumbi" }]} ></TimeLine>
          </FormacaoAcademica>
          </ContainerFormacao>
        </ContainerHabilidade>
        </BackgroundHabilidade>
    )
}
export default Habilidades;