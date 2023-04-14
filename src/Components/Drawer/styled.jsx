import styled from "styled-components";

export const DrawerStyled = styled.div`

position: absolute;
right: -5%;
top: 50px;
    transform: translate(-50%, -50%);
  font-size: 45px;
  transition: 1s 0.1s cubic-bezier(0, 1.03, 0, 1.00);
  z-index: 99;
   
  @media (max-width: 768px){
    align-items: center;
    top: 100px;
    right: 0;
    left: 0;
    height: 100vh;
    background-color:  rgba(0, 0, 0, 0.8);
    width: 100%;

    display: ${({ open }) => open ? 'flex' : 'none'};
        transform: scale(1);
  }
}
`;

export const Menu = styled.ul`
margin: 0px;
font-family: 'DM Sans', sans-serif;
list-style-type: none;
display: flex;
justify-content: center;
height: 100%;
align-items: center;
@media (max-width: 768px) {
flex-direction: column;
gap: 20px;
width:100%;
}
`;


export const OpçãoMenu = styled.p`
cursor:pointer;
text-decoration: none;
color: #fff;
font-weight: bold;
gap: 20px;
  margin: 15px;
  font-size: ${props => props.tamanhoFonte || "20px"  };
  @media (max-width:  768px){
    font-size: 30px;
    
  }
`;
