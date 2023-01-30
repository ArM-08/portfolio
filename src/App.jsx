import NavBar from "./Components/NavBar"
import "./reset.css"
import "./App.css"
import Sobre from "./Components/Sobre"
import Home from "./Components/Home"
import styled from "styled-components"
import Projetos from "./Components/Projetos"


const ContainerApp = styled.div`
width: 100vw;
min-height: 100vh;
margin:0 auto;
`


function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <ContainerApp>
      <Home />
      <Sobre/>
     <Projetos/>
      </ContainerApp>
    
    
    </div>
  )
}

export default App
