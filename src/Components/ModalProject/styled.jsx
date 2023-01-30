import styled from "styled-components"

export const Modal = styled.div`
position: fixed;
border-radius: 20px;
top: 25%;
bottom: 50%;
left: 20%;
right: 20%;
background: #FFF;
background-size: 100% 100%;
background-position: center;
background-repeat: no-repeat;
z-index: 1;
min-width: 60vw;
min-height: 50vh;
height: auto;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 80% auto;
grid-auto-rows: minmax(80%, auto)
animation: fadein 1s;
@keyframes fadein {
	from {
		opacity:0;
	}
	to {
		opacity:1;
	}
}
`
export const Fechar = styled.button`
position: absolute;
right: 10px;
top: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
width: 40px;
border-radius: 10px;
color: #CF0E0E;
&:hover{
  transform: scale(1.2);
}
`
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

`;

export const ImgModal = styled.div`
margin: 15px;
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 1;
grid-row-end: 2;
width: 100%;
height: 100%;
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
`

export const TecnologiasUsadas = styled.div`
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 3;
display: flex;
justify-content: space-around;
`

export const DescricaoModal = styled.p`
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
max-width: 600px;
min-height: 60%;
margin: 50px;
overflow: auto;
`

export const Buttons = styled.div`
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
display: flex;
justify-content: space-around;
align-items: center;
`

export const Site = styled.button`

border-radius: 30px;
background: #0088ff;
color: #FFF;
width: 30%;
min-height: 40px;
border: none;
cursor: pointer;

`

export const Git = styled.button`

border-radius: 30px;
background: #0088ff;
width: 30%;
color: #FFF;
min-height: 40px;
border: none;
cursor: pointer;

`