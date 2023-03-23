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
    <BackgroundHabilidade >
      <ContainerHabilidade >
        <Titulo data-aos="fade-down-right">Habilidades tecnicas</Titulo>
        <ContainerCard data-aos="fade-up-right" >
          {HabilidadesDB.map(habilidades => 
           <Card  key={habilidades.id} titulo={habilidades.name} img={habilidades.img}></Card> )}
        </ContainerCard>
        <ContainerFormacao>
          <ExpProfissional data-aos="fade-down-right">
            <Titulo data-aos="fade-down-right">Experiência Profissional</Titulo>
            <TimeLine 
              items={[
                {
                  title: "2016 - Até o momento",
                  descricao: "Motorista de Aplicativo - Uber · Autônomo",
                },
                {
                  title: "2011 - 2019",
                  descricao:
                    "Cabo (Motorista Categoria D) - Exército Brasileiro",
                },
              ]} 
            />
          </ExpProfissional>
          <FormacaoAcademica  data-aos="fade-down-left">
            <Titulo data-aos="fade-down-left">Formação Acadêmica</Titulo>
            <TimeLine
              items={[
                {
                  title: "2023 - 2024",
                  descricao: "Análise e Desenvolvimento de Sistemas",
                },
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
