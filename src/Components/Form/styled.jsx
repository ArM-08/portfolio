
import styled from "styled-components"

export const FormContainer = styled.div`
font-family: 'DM Sans', sans-serif;
width: 50%;
display: flex;
background: transparent;
justify-content: center;
flex-wrap: wrap;
flex-direction: column;
margin: 0 auto;
margin-top: 50px;
z-index: 1;

`

export const Title = styled.h1`
color: #FFF;
font-size: 40px;
font-family: 'DM Sans', sans-serif;
width: 100%;
`

export const FormInput = styled.form`
display: flex;
flex-direction: column;
width:100%;
`

export const Input = styled.input`
width: 100%;
height: 40px;
margin: 10px;
border-radius: 10px;
background: #2e2e2e;
padding:5px;
color: #FFF;
`
export const Mensagem = styled.textarea`
width: 100%;
height: 100px;
margin: 10px;
border-radius: 10px;
padding: 5px;
background: #2e2e2e;
color: #FFF;
`
export const Label = styled.label`
color: #FFF;
font-weight: bold;
`

export const Button = styled.button`
width: 150px;
height: 40px;
background: transparent;
margin-left: 10px;
cursor: pointer;
&:hover{
    background: #000;
    color: #FFF;
}
`



