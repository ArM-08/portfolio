import { Link } from "react-scroll";
import { DrawerStyled, Menu, OpçãoMenu } from "./styled";
import { bool } from "prop-types";

const Drawer = ({open}) => {
  

  
  const Projetos = () => {
    window.scrollTo({
      top: 2800,
      behavior: "smooth",
      
    });
  };
  const Contato = () => {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  };

  return (
    <DrawerStyled open={open}>
      <Menu>
        <OpçãoMenu tamanhoFonte={"20px"}>
        <Link to="sobre" spy={true} duration={500} offset={-100}>Sobre</Link>
        </OpçãoMenu>
        <OpçãoMenu tamanhoFonte={"20px"}>
        <Link to="habilidades" spy={true} duration={500} offset={-100}>Conhecimentos</Link>
        </OpçãoMenu>
        <OpçãoMenu tamanhoFonte={"20px"}>
        <Link to="projetos" spy={true} duration={500} offset={-100}>Projetos</Link>
        </OpçãoMenu>
        <OpçãoMenu onClick={Contato} tamanhoFonte={"20px"}>
        <Link to="contato" spy={true} duration={500} offset={-100}>Contato</Link>
        </OpçãoMenu>
      </Menu>
    </DrawerStyled>
  );
};

Drawer.propTypes = {
  open: bool.isRequired,
};
export default Drawer;
