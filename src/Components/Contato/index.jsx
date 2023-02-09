import { Container, ContactContainer, Faixa,  MyContact, TituloContato, IconesContainer, Icone } from "./styled";
import Form from "./../Form";
import {SiLinkedin, SiGithub, SiGmail, SiWhatsapp} from "react-icons/si";

const Contato = () => {
  return (
    <Container>
    <Faixa>
      </Faixa>
      <ContactContainer>
      
      <MyContact>
    <TituloContato>Alan de Oliveira Ribeiro Moraes</TituloContato>

    <IconesContainer><Icone href="https://www.linkedin.com/in/alan-de-oliveira-ribeiro-moraes/"><SiLinkedin /></Icone><Icone href="https://github.com/ArM-08"><SiGithub/></Icone><Icone href="mailto: alanmoraesdev@gmail.com"><SiGmail/></Icone> <Icone href=""><SiWhatsapp/></Icone></IconesContainer>
      </MyContact>
        <Form></Form>
      </ContactContainer>
      
    </Container>
  );
};

export default Contato;
