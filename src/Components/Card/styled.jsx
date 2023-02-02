import styled from "styled-components";


export const CardContainer = styled.div`
font-family: 'DM Sans', sans-serif;
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
    height: 2px;
  
    background-image: linear-gradient(90deg,  #F4C430 0%, #FFd700 92.32%);}
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
color:  #F4C430;
text-align: center;
`
