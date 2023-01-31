
import { useForm } from "react-hook-form"
import styled from "styled-components"
import emailjs from "@emailjs/browser"



const FormContainer = styled.div`
border-radius: 50px;
width: 600px;
background: #000;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
`

const Title = styled.h1`
color: #FFF;
`

const FormInput = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
width: 400px;
height: 40px;
margin: 10px;
`
const Mensagem = styled.textarea`
width: 400px;
height: 100px;
margin: 10px;
`
const Label = styled.label`
color: #FFF;
`

const Button = styled.button`
width: 150px;
height: 40px;
align-self: center;
`




const Form = () => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data, e) => {

       /* tirar comments para ativar serviço emailJS


       const TemplateParams = {
        from_nome: data.nome,
        message: data.mensagem,
        email: data.email
           }
          emailjs.send("service_hw0fon5", "template_hed8gxq", TemplateParams, "QVmEs4h7FwC5nD5ne" )
           .then((response)=> {
               //Aplicar modal Sucess
               e.target.reset()
               console.log("enviado com sucesso", response.status, response.text)
           }, (err) => {
               //Aplicar modal error 
               console.log("Deu error", err)
           })
       */ 
    }

    
    return (
        <FormContainer>  
            <Title>Email</Title>
            <FormInput onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                <Input {...register('nome')} type="text" placeholder="Nome" required />
                <Label>Email</Label>
                <Input  {...register('email')} type="email" placeholder="meuemail@email.com" required></Input>
                <Label>Mensagem</Label>
                <Mensagem  {...register('mensagem')} type="textarea" placeholder="Mensagem" required></Mensagem>
                <Button type="submit">Enviar</Button>
            </FormInput>
            </FormContainer>
    )
}

export default Form;