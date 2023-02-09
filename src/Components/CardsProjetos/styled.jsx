import styled from "styled-components";


export const CardProjContainer = styled.div`
border-radius: 8px;
height: 300px;
flex-direction: column;
width: 450px;
display: flex;
justify-content: end;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;
box-shadow: 0 0 25px -6px black;
transition: transform 0.4s ease-in-out, background-image 0.5s ease-in-out;
overflow: hidden;
background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url( ${props => props.img || ('#FFF')});
&:hover{
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url( ${props => props.img || ('#FFF')});
    transform: scale(1.2);
    transition: transform 0.4s ease-in-out, background-image 0.5s ease-in-out;
    .Title{
        opacity: 1;    
        transition: opacity 0.5s ease-in; 
    }
    .verMais{
        opacity: 1;     
        transition: opacity 0.5s ease-in;
    
    }
}
@media (max-width: 568px){
    height: 250px;
    &:hover{ transform: scale(1.05);
       
    }
}
`

export const TitleProjeto = styled.h3`
font-size: 30px;
position: relative;
opacity:0;
top: -30%;
margin: 0 auto;
color: #FFF;
transition: opacity 1s;  
@media (max-width: 568px){
    top: -30%;
left: 10%;

}
`

export const Button = styled.button`
border-radius: 20px;
font-size: 15px;
align-self: center;
cursor:pointer;
opacity:0;
color: #FFF;
border: none;
background: #0088ff;
width: 100px;
height: 30px;
margin-bottom: 30px;
transition: opacity 0.20s ease-in;
`


