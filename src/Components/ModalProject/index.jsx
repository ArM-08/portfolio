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
import BNA from "./../../assets/images/BNA.png";
import {
  SiJavascript,
  SiVite,
  SiAntdesign,
  SiCss3,
  SiVercel,
  SiReact,
  SiGithub,
  SiSitepoint,
} from "react-icons/si";

const ModalProject = (props) => {
  return (
    <>
      <Background></Background>
      <Modal>
        <ContainerImgProject>
          <ImgModal img={BNA} />
          <TecnologiasUsadas>
            <SiReact title="React" />
            <SiJavascript title="JavaScript" />
            <SiAntdesign title="AntDesign" />
            <SiCss3 title="CSS3" />
            <SiVite title="Vite" />
            <SiVercel title="Vercel" />
          </TecnologiasUsadas>
        </ContainerImgProject>
        <ContainerDescricao>
          <TitleProject>BNA Viagens</TitleProject>
          <DescricaoModal>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </DescricaoModal>
          <Fechar onClick={props.closed}></Fechar>
          <Buttons>
            <Git>
              <SiGithub size="25px" /> GitHub
            </Git>
            <Site>
              <SiSitepoint size="25px" /> Demo
            </Site>
          </Buttons>
        </ContainerDescricao>
      </Modal>
    </>
  );
};

export default ModalProject;
