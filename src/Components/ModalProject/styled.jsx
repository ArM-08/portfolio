import styled from "styled-components"
import fecharImg from "./../../assets/images/fechar.png"


export const Modal = styled.div`
position: fixed;
border-radius: 20px;
margin: 0 auto;
background: #FFF;
z-index: 998;
height:auto;
min-width: 60vw;
min-height: auto;
display: flex;
gap: 30px;
padding:20px;
flex-wrap: wrap;
overflow: auto;
justify-content: center;
animation: fadein 1s;
@keyframes fadein {
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
}
@media (max-width:801px){
  top: 20%;
  bottom: 1%;
}
`
export const Fechar = styled.button`
background-image: url(${fecharImg});
background-size: 100% 100%;
position: absolute;
width: 40px;
height: 40px;
right: 12px;
top: 8px;
background-color: transparent;
  border: none;
  cursor: pointer;
width: 40px;
border-radius: 10px;
transition: transform 1s;
&:hover{
  transform: scale(1.2) rotate(90deg);

}
@media (max-width:801px){
  height: 20px;
  width: 20px;
`
export const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
 
`;

export const ContainerImgProject = styled.div`
display: flex;
gap: 2vh;
width: 45%;
height: 100%;
min-height: 350px;
z-index: 99;
flex-direction: column;
@media (max-width:801px){
  width: 90%;
  height: 50%;

`
export const ImgModal = styled.div`
width: 100%; 
min-height: 400px;
background-image: url(${props => props.img});
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;
box-shadow: rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
rgba(19, 26, 32, 0.08) 0px 35px 75px -35px;
border-radius: 10px;
border: 1px solid;
border-color:
rgb(213, 220, 226);
@media (max-width:801px){
  align-self: center;
  min-height: 300px;

`

export const TecnologiasUsadas = styled.div`
display: flex;
z-index: 99;
font-size: 36px;
justify-content: space-around;
`
export const ContainerDescricao = styled.div`
z-index: 99;
display:flex;
min-width: 200px;
max-width: 600px;
width: 45%;
min-height: 60%;
flex-direction: column;
gap: 20px;
@media (max-width:801px){
  width: 100%;
  height: 50%;

`
export const TitleProject = styled.h1`
color: #000;
font-family: 'DM Sans', sans-serif;
font-size: 30px;
text-align: center;
`

export const DescricaoModal = styled.p`
font-family: 'DM Sans', sans-serif;
text-align: center;
overflow: auto;
`

export const Buttons = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
`

export const Site = styled.button`
text-decoration: none;
font-family: 'DM Sans', sans-serif;
border-radius: 30px;
background: #0088ff;
color: #FFF;
width: 30%;
min-height: 40px;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
`

export const Git = styled.button`
text-decoration: none;
font-family: 'DM Sans', sans-serif;
border-radius: 30px;
background: #0088ff;
width: 30%;
color: #FFF;
min-height: 40px;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;

`