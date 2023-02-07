import styled from "styled-components"



export const ToastContainer = styled.div`
    position: fixed;
    top:1%;
    right: 40%;
    left: 40%;
    width: 20%;
    height: 80px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 7px;
    display: grid;
    grid-template-columns: 1.3fr 5fr 0.5fr;
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    border-left: 8px solid ${props => props.color || "#47D764"};
    z-index: 999;
}

`
export const ToastCol1 = styled.div`
font-size: 35px;
color: ${props => props.colorLogo || "#47D764"};
align-items: center;
display:flex;
margin-right: 1vw;

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

