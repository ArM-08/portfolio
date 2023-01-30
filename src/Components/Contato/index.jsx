import styled from "styled-components";
import Form from "./../Form"
const ContatoContainer = styled.div`
width: 70%;
min-height: 100%;
margin: 0 auto;
`





const Contato = () => {
    return (
        <ContatoContainer>
            <Form></Form>
        </ContatoContainer>
    )
}

export default Contato;