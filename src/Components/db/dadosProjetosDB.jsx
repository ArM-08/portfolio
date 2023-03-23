import {
    SiJavascript,
    SiVite,
    SiAntdesign,
    SiCss3,
    SiVercel,
    SiReact,
    SiBootstrap,
    SiStyledcomponents,
    SiNetlify,
    SiTypescript
  } from "react-icons/si";
import BNA from "./../../assets/images/BNA.png"
import Aviagem from "./../../assets/images/Aviagem.png"
import EducAgro from "./../../assets/images/EducAgro.png"
import Portfolio from "./../../assets/images/portfolio.png"
import Lacrei from "./../../assets/images/Lacrei.png"
import EmConstrucao from "./../../assets/images/Emconstrucao.png"

export const ProjetosDB = [
  {id: 1,
    name: "BNA Viagens",
    categoria: "frontEnd",
    tecnologias: <><SiReact title="React"/><SiJavascript title="JavaScript"/><SiAntdesign title="AntDesign"/><SiCss3 title="CSS3"/><SiVite title="Vite"/><SiVercel title="Vercel"/>  </>,
    image: BNA,
    description: "Projeto pessoal para aplicar novos conhecimentos"
    , link: "https://bna-viagem.vercel.app/", 
    github: "https://github.com/ArM-08/bnaViagem",
        chave: "BNA VIAGEM, FRONTEND,  REACT, JAVASCRIPT ,ANTDESIGN, CSS3, VITE, VERCEL "
    },
    {id: 2,
      name: "Portfolio",
      categoria: "frontEnd",
      tecnologias: <><SiReact title="React"/><SiJavascript title="JavaScript"/><SiStyledcomponents title="Styledcomponents"/><SiVite title="Vite"/><SiVercel title="Vercel"/>  </>,
      image: Portfolio,
      description: "Projeto de criaçao de um portfolio. Projeto em Construção"
      , link: "https://portfolio-cvto.vercel.app", 
      github: "https://github.com/ArM-08/portfolio",
          chave: "PORTFOLIO, FRONTEND,  REACT, JAVASCRIPT ,STYLEDCOMPONENTS, VITE, VERCEL "
      },
{id: 3,
name: "AViagem",
categoria: "frontEnd",
tecnologias: <><SiReact title="React"/><SiJavascript title="JavaScript"/><SiBootstrap title="BootsStrap"/><SiCss3 title="CSS3"/><SiReact title=" Create React App"/><SiNetlify title="Netlify"/>  </>,
image: Aviagem,
description: "Projeto RECODE PRO 2022 - Desenvolvido em JavaScript com bootstrap"
, link: "https://aviagem.vercel.app/", 
github: "https://github.com/ArM-08/aviagem",
    chave: "AVIAGEM, FRONTEND,  REACT, JAVASCRIPT ,BOOTSTRAP, CSS3, CREATE REACT APP, NETLIFY "
},
  {id: 4,
    name: "EducAgro",
    categoria: "frontEnd",
    tecnologias: <><SiReact title="React"/><SiJavascript title="JavaScript"/><SiCss3 title="CSS3"/><SiReact title=" Create React App"/><SiNetlify title="Netlify"/>  </>,
    image: EducAgro,
    description: "EducAgro - Entrega final do projeto EDUCAGRO Recode 2022 Desenvolvido em Java utilizando Springboot."
    , link: "https://educagro.netlify.app/home.html", 
    github: "https://github.com/squad-27-2022/EducAgro-Final",
    chave: "EducAgro, FRONTEND,  REACT, JAVASCRIPT, CSS3, VITE, VERCEL "
    },
    
      {id: 5,
        name: "Lacrei FrontEnd",
        categoria: "frontEnd",
        tecnologias: <><SiReact title="React"/><SiTypescript title="TypeScript"/><SiStyledcomponents title="Styledcomponents"/><SiVite title="Vite"/><SiVercel title="Vercel"/></>,
        image: Lacrei,
        description: "Desafio Lacrei - Front end Teste técnico para vaga de voluntariado utilizando TypeScript."
        , link: "https://lacrei-lovat.vercel.app", 
        github: "https://github.com/ArM-08/Lacrei",
        chave: "TYPESCRIPT, LACREI, FRONTEND, STYLEDCOMPONENTS, VITE, VERCEL"
        },
        {id: 6,
          name: "Em Breve",
          categoria: "frontEnd",
          tecnologias: <></>,
          image: EmConstrucao,
          description: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          , link: "", 
          github: "",
              chave: "EMBREVE"
          }
]



