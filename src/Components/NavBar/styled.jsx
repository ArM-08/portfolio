import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 100px;
  background-color: #2e2e2e;
  z-index:999;
    text-align: center;
    position: fixed;
   &:after {
    content: '';
    display: block;
    position: absolute;
    top: 98px;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(90deg, #F4C430 0%, #FFd700 92.32%);}
`;
export const Logo = styled.a`
font-family: 'Cormorant SC', serif;
font-weight: bold;
cursor:pointer;
font-size: 40px;
color: #FFF;
position: absolute;
left: 5%;
top: 25px;
@media (max-width: 768px) {

  right: 0%;
  @media(max-width: 480px){
    font-size: 30px;
    top: 28px;

  }
}
`
export const BtnHamBurger = styled.button`
visibility: hidden;
  position: absolute;
  top: 30px;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background: ${({ open }) => open ? '#FFFF' : '#FFF'};

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

@media (max-width: 768px) {
  visibility: visible;
}
`

