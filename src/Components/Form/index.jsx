import { FormContainer, Title, FormInput, Label, Input, Mensagem, Button } from './styled';
import {useState} from "react";
import React from 'react';
import Toast from "./../ToastMessage"
import emailjs from "@emailjs/browser"




const Form = () => {

const timeToast = (timer) =>{
    setTimeout(() => {
        openToast(false);
    }, timer)
}
const [type, setType] = useState('')
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
        .then(() => {
            setType('sucess')
            openToast(true)
            setName('')
            setEmail('')
            setMessage('')
            timeToast(4000)
            
            
        }, ()=> {
            
            setType('error')
            openToast(true)
            timeToast(10000)
        })
    }

}
    return (
        <FormContainer>  
            <Title>Email</Title>
            <FormInput onSubmit={handleSubmit}>
                <Label>Nome</Label>
                <Input name="nome" type="text" placeholder="Nome" required onChange={(e) => setName(e.target.value)} value={name}/>
                <Label>Email</Label>
                <Input  name="email" type="email"  placeholder="meuemail@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(e) => setEmail(e.target.value)} value={email}></Input>
                <Label>Mensagem</Label>
                <Mensagem  name="mensagem" type="textarea" placeholder="Mensagem" required onChange={(e) => setMessage(e.target.value)} value={message}></Mensagem>

                <Button type="submit">Enviar</Button>

            </FormInput>
            {toast && <Toast type={type}/>}
            </FormContainer>
    )
}

export default Form;