

import { ToastSucess, ToastCol1, ToastCol2 } from "./styled";
import { SiCheckmarx} from "react-icons/si"

const Toast = () => {
    
    return(

        <ToastSucess>
                <ToastCol1>
                <SiCheckmarx></SiCheckmarx>
                </ToastCol1>
                <ToastCol2>
                <p>Email Enviado</p>
            <p>Seu email foi enviado, enviarei a resposta pelo email.</p>
            </ToastCol2>
            </ToastSucess>
    )
}

export default Toast;