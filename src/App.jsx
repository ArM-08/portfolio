import NavBar from "./Components/NavBar"
import "./reset.css"
import "./App.css"
import Sobre from "./Components/Sobre"
import Home from "./Components/Home"
import styled from "styled-components"
import Projetos from "./Components/Projetos"
import Contato from "./Components/Contato"
import Habilidades from "./Components/Habilidades"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react"

const ContainerApp = styled.div`
width: 100vw;
min-height: 100vh;
margin:0 auto;
`


function App() {
  useEffect(()=> {
    AOS.init({duration: 2500})
  });
  
  return (
    <div className="App">
      <NavBar/>
      <ContainerApp>
      <Home/>
      <Sobre/>
      <Habilidades/>
     <Projetos/>
     <Contato/>
      </ContainerApp>
    
    
    </div>
  )
}

export default App
