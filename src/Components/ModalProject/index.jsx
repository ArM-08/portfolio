import {
  Background,
  Modal,
  ImgModal,
  TecnologiasUsadas,
  DescricaoModal,
  Fechar,
  Buttons,
  Git,
  Site,
  ContainerDescricao,
  ContainerImgProject,
  TitleProject,
} from "./styled";
import {
  SiGithub,
  SiSitepoint,
} from "react-icons/si";

const ModalProject = (props) => {
  return (
    <>
      <Background></Background>
      <Modal>
        <ContainerImgProject>
          <ImgModal img={props.img} />
          <TecnologiasUsadas>
            {props.tecnologias}
          </TecnologiasUsadas>
        </ContainerImgProject>
        <ContainerDescricao>
          <TitleProject>{props.name}</TitleProject>
          <DescricaoModal>
            {props.description}
          </DescricaoModal>
          <Fechar onClick={props.closed}></Fechar>
          <Buttons>
            <Git as="a" href={props.github}>
              <SiGithub size="25px" /> GitHub
            </Git>
            <Site as="a" href={props.link}>
              <SiSitepoint size="25px" /> Demo
            </Site>
          </Buttons>
        </ContainerDescricao>
      </Modal>
    </>
  );
};

export default ModalProject;
