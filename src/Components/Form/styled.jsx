
import styled from "styled-components"

export const FormContainer = styled.div`
font-family: 'DM Sans', sans-serif;
border-radius: 50px;
width: 80%;
background: #e2e2e2e2;
height: 600px;
display: flex;
justify-content: center;
align-items: end;
flex-wrap: wrap;
flex-direction: column;
margin: 0 auto;
margin-top: 50px;
`

export const Title = styled.h1`
color: #000;
align-self: center;
`

export const FormInput = styled.form`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
width: 400px;
height: 40px;
margin: 10px;
border-radius: 10px;
background: rgba(255, 255, 255, 0)
padding:5px;
`
export const Mensagem = styled.textarea`
width: 400px;
height: 100px;
margin: 10px;
border-radius: 10px;
padding: 5px;
`
export const Label = styled.label`
color: #000;
`

export const Button = styled.button`
width: 150px;
height: 40px;
align-self: center;
`



export const ToastSucess = styled.div`
    position: fixed;
    top:0%;
    right: 40%;
    left: 40%;
    width: 20%;
    height: 80px;
    padding: 20px;
    background-color: #ffffff;

    border-radius: 7px;
    display: grid;
    grid-template-columns: 1.3fr 6fr 0.5fr;
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    border-left: 8px solid #47D764;
    color: #47D764;
    z-index: 999;
}

`
export const ToastCol1 = styled.div`
font-size: 35px;
color: #47D764
`
export const ToastCol2 = styled.div`
align-self: center;
p:first-child{
    color: #101020;
    font-weight: 600;
    font-size: 16px;
}
p:last-child{
    font-size: 12px;
    font-weight: 400;
    color: #656565;}
`

