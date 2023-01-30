import {CardContainer, Titulo, ImgTech} from "./styled"
const Card = (props) => {
    return (
        <CardContainer>
            <Titulo>{props.titulo}</Titulo>  
        <ImgTech src={props.img}></ImgTech> 
        </CardContainer>
    )
}
export default Card;