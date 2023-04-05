
import { Container, SobreContainer, ImgPerfil, MessageContainer, TextoSobre, ContainerButton, Button, MidiasContainer, ButtonMidia, ContainerPerfil, FundoImg, CircleImg} from "./styled";
import Linkedin from "./../../assets/images/linkedin.png"
import GitHub from "./../../assets/images/gitHub.png"
import perfil from "./../../assets/images/perfilpng.png"




const Sobre = () => {

    return(
        <Container>
        <SobreContainer >
        <MessageContainer data-aos="fade-up">
          <TextoSobre className='show'>Profissional graduado em Gestão da Tecnologia da Informação, em fase de transição de carreira, a
procura de uma oportunidade na área de TI onde eu possa colocar em prática todo o meu
conhecimento teórico, a fim de aprimorar e expandir meus conhecimentos, visando sempre uma boa
qualificação profissional.</TextoSobre>
          <ContainerButton>
            <Button as="a" href="mailto: alanmoraesdev@gmail.com">Contato</Button>
            <Button as="a"href="https://drive.google.com/uc?export=download&id=1ovAbnoaR5aYx76Dd2S6WwyF9PHM0hMBn">Download CV</Button>
          </ContainerButton>
          </MessageContainer>
         
         <ContainerPerfil data-aos="fade-up">
          <FundoImg>
            <CircleImg/>
            <ImgPerfil src={perfil}/>
            </FundoImg>
            <MidiasContainer>
              <ButtonMidia as="a" href="https://www.linkedin.com/in/alan-de-oliveira-ribeiro-moraes/"logo={Linkedin}></ButtonMidia>
              <ButtonMidia as="a" href="https://github.com/ArM-08" logo={GitHub}></ButtonMidia>
            </MidiasContainer>
            </ContainerPerfil>
          </SobreContainer>
         
            </Container>
    )
}


export default Sobre;