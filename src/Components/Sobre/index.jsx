
import { Container, SobreContainer, ImgPerfil, MessageContainer, TextoSobre, ContainerButton, Button, MidiasContainer, ButtonMidia} from "./styled";
import Linkedin from "./../../assets/images/Linkedin.png"
import GitHub from "./../../assets/images/gitHub.png"
import perfil from "./../../assets/images/perfilpng.png"
const Sobre = () => {
    return(
        <Container>
        <SobreContainer>
        <MessageContainer>
          <TextoSobre>Me chamo Alan, sou formado em Gestão de tecnologia da informação pela anhembi Morumbi, e desenvolvedor full Stack pela RecodePro</TextoSobre>
          <ContainerButton>
            <Button as="a" href="mailto: alanmoraesdev@gmail.com">Contato</Button>
            <Button as="a"href="https://drive.google.com/uc?export=download&id=1hxGpH7aL18FdT4B0ySsFF5jmkyOBjsXz">Download CV</Button>
          </ContainerButton>
          </MessageContainer>
         
            <ImgPerfil src={perfil}/>
            <MidiasContainer>
              <ButtonMidia as="a" href="https://www.linkedin.com/in/alan-de-oliveira-ribeiro-moraes/"logo={Linkedin}></ButtonMidia>
              <ButtonMidia as="a" href="https://github.com/ArM-08" logo={GitHub}></ButtonMidia>
            </MidiasContainer>
          </SobreContainer>
         
            </Container>
    )
}


export default Sobre;