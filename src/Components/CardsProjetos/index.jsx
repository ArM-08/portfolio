import { useState } from "react";
import { CardProjContainer, TitleProjeto, Button } from "./styled";
import ModalProject from "../ModalProject";

const CardsProjetos = (props) => {
  const [open, setModal] = useState(false);

  return (
    <>
      <CardProjContainer img={props.img}>
        <TitleProjeto className="Title">{props.title}</TitleProjeto>
        <Button className="verMais" onClick={() => setModal(!open)}>
          Saiba Mais
        </Button>
      </CardProjContainer>
      {open && (
        <ModalProject open={open} closed={() => setModal(!open)} img={props.img} name={props.title} description={props.description} tecnologias={props.tecnologias} github={props.github} link={props.link}></ModalProject>
      )}
    </>
  );
};
export default CardsProjetos;
