import { FormContainer, Title, FormInput, Label, Input, Mensagem, Button } from './styled';
import {useState} from "react";
import React from 'react';
import ToastMessage from "./../ToastMessage"
import emailjs from "@emailjs/browser"




const Form = () => {

const timeToast = () =>{
    setTimeout(() => {
        openToast(false);
    }, 2000)
}
const [toast, openToast] = useState(false)
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage]= useState('')
const handleSubmit = (e) => {
    e.preventDefault()
const templateParams = {
    from_name: name,
    email: email,
    message: message
}
    {
        emailjs.send("service_hw0fon5", "template_hed8gxq", templateParams, "QVmEs4h7FwC5nD5ne")
        .then((response) => {
            openToast(true)
            setName('')
            setEmail('')
            setMessage('')
            timeToast()
            
            
        }, (err)=> {
            console.log("error")
        })
    }

}
    return (
        <FormContainer>  
            <Title>Email</Title>
            <FormInput onSubmit={handleSubmit}>
                <Label>Nome</Label>
                <Input name="nome" type="text" id="name" placeholder="Nome" required onChange={(e) => setName(e.target.value)} value={name}/>
                <Label>Email</Label>
                <Input  name="email" type="email" id="email" placeholder="meuemail@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(e) => setEmail(e.target.value)} value={email}></Input>
                <Label>Mensagem</Label>
                <Mensagem  name="mensagem" type="textarea" id="mensagem"placeholder="Mensagem" required onChange={(e) => setMessage(e.target.value)} value={message}></Mensagem>

                <Button type="submit">Enviar</Button>

            </FormInput>
            {toast && <ToastMessage/>}
            </FormContainer>
    )
}

export default Form;