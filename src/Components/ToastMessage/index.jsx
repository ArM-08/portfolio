

import { ToastContainer, ToastCol1, ToastCol2 } from "./styled";
import { SiCheckmarx,} from "react-icons/si"
import { BiErrorAlt } from "react-icons/bi";

const Toast = (props) => {
    return(
            <ToastContainer color={props.type === "sucess" ? "#47D764" : "#e20e20"} >
                <ToastCol1 colorLogo = {props.type === "sucess" ? "#47D764" : "#e20e20"}>
               {props.type === "sucess" ?  <SiCheckmarx></SiCheckmarx> :
                <BiErrorAlt></BiErrorAlt>}
                </ToastCol1>
                <ToastCol2>
                    {props.type === "sucess" ? 
                        (<>
                <p>Email Enviado</p>
            <p>Seu email foi enviado, enviarei a resposta pelo email.</p> </>) : ( <> <p>Email não enviado</p>
            <p>Entre em contato atraves do email: alanmoraesdev@gmail.com </p></> )
    }
            </ToastCol2>
            </ToastContainer>
    )
}

export default Toast;