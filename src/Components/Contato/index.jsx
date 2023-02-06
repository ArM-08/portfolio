import styled from "styled-components";
import Form from "./../Form"
const ContatoContainer = styled.div`
width: 80%;
min-height: 100vh;
height: 100%;
margin: 0 auto;
display:flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;
background: #000;
`





const Contato = () => {
    return (
        <Container>
        <ContatoContainer>
            <Form></Form>
        </ContatoContainer>
        </Container>
    )
}

export default Contato;