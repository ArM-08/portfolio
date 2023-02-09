import { ProjetosContainer, TitleProjeto, InputPesquisa, CardsContainer} from "./styled";
import CardsProjetos from "../CardsProjetos";
import { Projects } from "../db/dadosProjects";
const Projetos = () => {
  return (
    <ProjetosContainer>
      <TitleProjeto>Projetos</TitleProjeto>
      <InputPesquisa placeholder="Pesquise por nome ou stacks "></InputPesquisa>
      <CardsContainer>
        {Projects.map( projetos =>(
      <CardsProjetos img={projetos.image} title={projetos.name} key={projetos.id} description={projetos.description} tecnologias={projetos.tecnologias} github={projetos.github} link={projetos.link}></CardsProjetos> ))}
      </CardsContainer>
    </ProjetosContainer>
  );
};

export default Projetos;
