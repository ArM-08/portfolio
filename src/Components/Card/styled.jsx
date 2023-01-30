import styled from "styled-components";


export const CardContainer = styled.div`
'DM Sans', sans-serif;
width: 125px;
transition: transform 0.3s ease-in-out;
height: 130px;
background: #2e2e2e;
border-start-start-radius: 40px 40px;
display: grid;
grid-template-columns: repeat (1, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 10px;
justify-content: center;
box-shadow: 0 0 25px -6px black;
&:after {
    content: '';
    display: block;
    position: relative;
    width: 125px;
    height: 4px;
  
    background-image: linear-gradient(90deg, #86b34f 0%, #39ff14 92.32%);}
&:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
}
`

export const ImgTech = styled.img`
width: 75px;
height: 75px;
margin: 0 auto;

`
export const Titulo = styled.h2`
padding: 5px;
align-self: center;
font-size: 15px;
margin: 0 auto;
color: #39ff14;
text-align: center;
`
