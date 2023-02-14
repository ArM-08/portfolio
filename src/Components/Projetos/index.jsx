import { ProjetosContainer, TitleProjeto, InputPesquisa, CardsContainer} from "./styled";
import CardsProjetos from "../CardsProjetos";
import { ProjetosDB } from "../db/dadosProjetosDB";
import { useState } from "react";
const Projetos = () => {

  const [pesquisado, setPesquisado] = useState(false)
  const [pesquisa, setPesquisa] = useState([])
  const fazPesquisa = (evento) =>{
    const textoDigitado = evento.target.value.toUpperCase()
    if(textoDigitado !== ('')){
    setPesquisado(true)}
    else{setPesquisado(false)}
    const resultadoPesquisa = ProjetosDB.filter(projetos => projetos.chave.includes(textoDigitado))
    setPesquisa(resultadoPesquisa)
  }

  return (
    <ProjetosContainer data-aos="fade-up"
    >
      <TitleProjeto >Projetos</TitleProjeto>
      <InputPesquisa placeholder="Pesquise por nome, categoria ou stacks " onChange={evento => fazPesquisa(evento)}></InputPesquisa>
      <CardsContainer >
        {pesquisado === true ? 
        (pesquisa.length === 0 ? <TitleProjeto>Nenhum projeto encontrado</TitleProjeto> :
        pesquisa.map( projetos =>(
      <CardsProjetos img={projetos.image} title={projetos.name} key={projetos.id} description={projetos.description} tecnologias={projetos.tecnologias} github={projetos.github} link={projetos.link}></CardsProjetos> ))) :
      ProjetosDB.map  (projetos => (
            <CardsProjetos img={projetos.image} title={projetos.name} key={projetos.id} description={projetos.description} tecnologias={projetos.tecnologias} github={projetos.github} link={projetos.link}></CardsProjetos>
          ))
    
    }
      </CardsContainer>
    </ProjetosContainer>
  );
};

export default Projetos;
