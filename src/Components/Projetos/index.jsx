import { ProjetosContainer, TitleProjeto, InputPesquisa, CardsContainer} from "./styled";
import CardsProjetos from "../CardsProjetos";
import BNA from "./../../assets/images/BNA.png";

const Projetos = () => {
  return (
    <ProjetosContainer>
      <TitleProjeto>Projetos</TitleProjeto>
      <InputPesquisa placeholder="Pesquise por nome ou stacks "></InputPesquisa>
      <CardsContainer>
      <CardsProjetos img={BNA} title={"BNA VIAGENS"}></CardsProjetos>
      <CardsProjetos img={BNA} title={"BNA VIAGENS"}></CardsProjetos>
      <CardsProjetos img={BNA} title={"BNA VIAGENS"}></CardsProjetos>
      <CardsProjetos img={BNA} title={"BNA VIAGENS"}></CardsProjetos>
      <CardsProjetos img={BNA} title={"BNA VIAGENS"}></CardsProjetos>
      <CardsProjetos img={BNA} title={"BNA VIAGENS"}></CardsProjetos>
 
      </CardsContainer>
    </ProjetosContainer>
  );
};

export default Projetos;
