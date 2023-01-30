import styled from "styled-components";
import CardsProjetos from "../CardsProjetos";

import BNA from "./../../assets/images/BNA.png"

const ProjetosContainer = styled.div`
display:flex;
width: 70%;
margin: 0 auto;
min-height: 100vh;
gap: 2vw;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 10%;
`


const Projetos = () => {
    return (
        <ProjetosContainer>
         <CardsProjetos img={BNA} title={'BNA VIAGENS'}></CardsProjetos>
         <CardsProjetos img={BNA} title={'BNA VIAGENS'}></CardsProjetos>
         <CardsProjetos img={BNA} title={'BNA VIAGENS'}></CardsProjetos>
        </ProjetosContainer>
    )
}

export default Projetos;