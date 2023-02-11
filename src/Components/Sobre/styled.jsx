import styled from "styled-components";


export const Container = styled.div`
width: 80%;
margin: 0 auto;
min-height: 100vh;
height: 100%;
display: flex;
flex-direction: column;

`

export const TextoSobre = styled.p`
color: #000;
font-family: 'DM Sans', sans-serif;
font-size: 30px;
text-align: center;

`
export const MidiasContainer = styled.div`
display: flex;
gap:30px;
flex-direction: column;
align-self: center;

`
export const ContainerPerfil = styled.div`
display: flex;
gap:30px;

`


export const SobreContainer = styled.div`
display: flex;

justify-content: space-between;
flex-wrap: wrap;
align-items: center;
min-height: 100vh;
height: 100%;
@media(max-width: 1440px){
   
    justify-content: space-around;
}
`

export const ContainerButton = styled.div`
display:flex;
gap: 20px;
`

export const Button = styled.button`
width: 150px;
height: 30px;
border-radius: 30px;
background: #F4C430;
border: none;
text-decoration: none;
text-align: center;
display:flex;
justify-content: center;
align-items: center;
color: #000;
font-family: 'DM Sans', sans-serif;
`
export const ButtonMidia = styled.button`
background-image: url(${props=> props.logo || "#000" });
background-color: #FFF;
width: 45px;
height: 45px;
background-size: 100% 100%;
border-radius: 50px;
border: none;

`
export const FundoImg = styled.div`

margin: 30px 0 30px 0;
align-self: center;
width: 400px;
height: 496px;
border-radius: 330px;
background:#F4C430;
background-size: 120% 120%;
@media (max-width: 468px){
    width: 250px;
    height: 396px;
}
`
export const CircleImg = styled.div`
align-self: center;
position: absolute;
z-index: -1;
width: 450px;
height: 495px;
border-radius: 330px;
background: transparent;
border: 3px solid #F4C430;
background-size: 120% 120%;
@media (max-width: 468px){
    width: 300px;
    height: 395px;
    border: 2px solid #F4C430;
}
`


export const ImgPerfil = styled.img`
align-self: center;
width: 450px;
height: 500px;
border-radius:210px;
border: 3px solid #F4C430;
background-size: 120% 120%;
@media (max-width: 468px){
    width: 300px;
    height: 408px;
   border: none;
}

`

export const MessageContainer = styled.div`
width: 50%;
min-width: 300px;
max-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 5vh;
@media (max-width: 1500px){
    width:40%;
}
    `
