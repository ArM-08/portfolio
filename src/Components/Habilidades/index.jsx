import Card from "../Card";
import {
  Titulo,
  ContainerCard,
  ContainerHabilidade,
  BackgroundHabilidade,
  ExpProfissional,
  FormacaoAcademica,
  ContainerFormacao,
} from "./styled";
import TimeLine from "../TimeLine";
import { HabilidadesDB } from "../db/dadosHabilidadesDB";

const Habilidades = () => {
  return (
    <BackgroundHabilidade>
      <ContainerHabilidade>
        <Titulo>Habilidades tecnicas</Titulo>
        <ContainerCard>
          {HabilidadesDB.map(habilidades => 
           <Card key={habilidades.id} titulo={habilidades.name} img={habilidades.img}></Card> )}
        </ContainerCard>
        <ContainerFormacao>
          <ExpProfissional>
            <Titulo>Experiência Profissional</Titulo>
            <TimeLine
              items={[
                {
                  title: "2016 - Até o momento",
                  descricao: "Motorista de Aplicativo - Uber · Autônomo",
                },
                {
                  title: "2019 - 2021",
                  descricao: "Criador de Conteúdo - Twitch",
                },
                {
                  title: "2011 - 2019",
                  descricao:
                    "Cabo (Motorista Categoria D) - Exército Brasileiro",
                },
              ]}
            ></TimeLine>
          </ExpProfissional>
          <FormacaoAcademica>
            <Titulo>Formação Acadêmica</Titulo>
            <TimeLine
              items={[
                {
                  title: "2022 - 2022",
                  descricao: "Desenvolvedor Full Stack - RecodePro",
                },
                {
                  title: "2019 - 2021",
                  descricao:
                    "Graduação - Gestão em tecnologia da Informação - Anhembi Morumbi",
                },
              ]}
            ></TimeLine>
          </FormacaoAcademica>
        </ContainerFormacao>
      </ContainerHabilidade>
    </BackgroundHabilidade>
  );
};
export default Habilidades;
