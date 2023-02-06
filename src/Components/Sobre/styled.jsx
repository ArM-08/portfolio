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

export const ImgPerfil = styled.img`
align-self: center;
width: 450px;
height: 500px;
border-radius: 20px;
background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23F4C430' d='M43.7 -75.7C56.5 -68.3 66.6 -56.3 71.8 -42.9C77 -29.5 77.3 -14.8 76.7 -0.3C76.2 14.1 74.8 28.3 68.7 40.1C62.6 51.9 51.8 61.5 39.6 68.5C27.3 75.5 13.7 80.1 -1.3 82.3C-16.2 84.4 -32.4 84.3 -46.2 78.2C-60.1 72.1 -71.6 60 -77 46C-82.3 32 -81.4 16 -81.9 -0.3C-82.5 -16.6 -84.3 -33.2 -78 -45.4C-71.6 -57.7 -57.1 -65.7 -42.7 -72.2C-28.3 -78.7 -14.2 -83.8 0.6 -84.9C15.4 -86 30.9 -83.1 43.7 -75.7Z' transform='translate(100 100)' /%3E%3C/svg%3E");
}
background-size: 120% 120%;
@media (max-width: 468px){
    width: 300px;
    height: 350px;
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
