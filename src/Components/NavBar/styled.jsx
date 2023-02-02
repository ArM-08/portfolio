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
