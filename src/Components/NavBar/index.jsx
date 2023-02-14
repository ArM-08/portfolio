import { useState } from "react";
import {NavContainer, Logo, BtnHamBurger} from "./styled";
import Drawer from "../Drawer";



const NavBar = () => {
    

    const [open, setOpen] = useState(false)
    const Inicio = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    return (

        <NavContainer>
            <Logo onClick={Inicio}>Alan Moraes</Logo>
           <Drawer open={open}></Drawer>
           <BtnHamBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BtnHamBurger>
        </NavContainer>
    )
}

export default NavBar;
