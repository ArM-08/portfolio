import { FormContainer, Title, FormInput, Label, Input, Mensagem, Button } from './styled';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef, useState} from "react";
import React from 'react';
import ToastMessage from "./../ToastMessage"





const Form = () => {

const [toast, openToast] = useState(false)
    const [state, handleSubmit] = useForm("mrgveyky")
    const formRef = useRef(null)

 useEffect(() => {
   
    if(state.succeeded){
    openToast(true)
    setTimeout(()=> {
        openToast(false);  
    }, 2000);
} 
formRef.current.reset();
 },)

    return (
        <FormContainer>  
            <Title>Email</Title>
            <FormInput ref={formRef} onSubmit={handleSubmit}>
                <Label>Nome</Label>
                <Input name="nome" type="text" id="nome" placeholder="Nome" required/>
                <ValidationError prefix="Nome" field="nome" errors={state.errors}/>
                <Label>Email</Label>
                <Input  name="email" type="email" id="email" placeholder="meuemail@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" ></Input>
<ValidationError prefix="Email" field="email" errors={state.errors}/>
                <Label>Mensagem</Label>
                <Mensagem  name="mensagem" type="textarea" id="mensagem"placeholder="Mensagem" required></Mensagem>
                <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors}/>
                <Button type="submit" disabled={state.submitting}>Enviar</Button>
                <ValidationError errors={state.errors} />
            </FormInput>
            {toast && <ToastMessage/>}
            </FormContainer>
    )
}

export default Form;