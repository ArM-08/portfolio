import styled from "styled-components";


export const Container = styled.div`
width: 70%;
margin: 0 auto;
min-height: 100%;
display: flex;
flex-direction: column;

`
export const ContainerCard = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 5vh;
`


export const SobreContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 20%;
`



export const ImgPerfil = styled.img`
width: 400px;
height: 400px;
border-radius: 200px;
background-color:  rgba(0, 0, 0, 0.3);
@media (max-width: 468px){
    width: 300px;
    height: 300px;
    border-radius: 200px;
}

`

export const MessageContainer = styled.div`
width: 500px;
display: flex;
align-items: center;

    `
export const Tecnologias = styled.h1`
color: #000;
font-size: 40px;
font-family: 'DM Sans', sans-serif;
text-align: center;
margin: 30px 0 30px 0;
`
export const TextoSobre = styled.p`
color: #000;
font-family: 'DM Sans', sans-serif;
font-size: 30px;
text-align: center;
`
