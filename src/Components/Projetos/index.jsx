import styled from "styled-components";
import CardsProjetos from "../CardsProjetos";

import BNA from "./../../assets/images/BNA.png"

const ProjetosContainer = styled.div`
display:flex;
width: 80%;
margin: 0 auto;
height: 100%;
min-height: 100vh;
gap: 2vw;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 10%;
`
const TitleProjeto = styled.h1`
color: #000;
font-size: 40px;
font-family: 'DM Sans', sans-serif;
width: 100%;
text-align: center;
`



const Projetos = () => {
    return (
        <ProjetosContainer>
            <TitleProjeto>Projetos</TitleProjeto>
         <CardsProjetos img={BNA} title={'BNA VIAGENS'}></CardsProjetos>
         <CardsProjetos img={BNA} title={'BNA VIAGENS'}></CardsProjetos>
         <CardsProjetos img={BNA} title={'BNA VIAGENS'}></CardsProjetos>
        </ProjetosContainer>
    )
}

export default Projetos;