import { DrawerStyled, Menu, OpçãoMenu } from "./styled";
import { bool } from "prop-types";

const Drawer = ({open}) => {
  
  const Sobre = () => {
    window.scrollTo({
      top: 950,
      behavior: "smooth",
    });

  };

  const Projetos = () => {
    window.scrollTo({
      top: 2825,
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
        <OpçãoMenu onClick={Sobre} tamanhoFonte={"20px"}>
          Sobre
        </OpçãoMenu>
        <OpçãoMenu onClick={Projetos} tamanhoFonte={"20px"}>
          Projetos
        </OpçãoMenu>
        <OpçãoMenu onClick={Contato} tamanhoFonte={"20px"}>
          Contato
        </OpçãoMenu>
      </Menu>
    </DrawerStyled>
  );
};

Drawer.propTypes = {
  open: bool.isRequired,
};
export default Drawer;
