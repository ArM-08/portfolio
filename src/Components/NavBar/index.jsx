import { useState } from "react";
import {NavContainer, Logo} from "./styled";
import Hamburger from "../Hamburguer";
import Drawer from "../Drawer";



const NavBar = () => {
    const Inicio = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

    const [open, setOpen] = useState(false)

    return (

        <NavContainer>
            <Logo onClick={Inicio}>Alan Moraes</Logo>
           <Drawer open={open}></Drawer>
            <Hamburger open={open} setOpen={setOpen}></Hamburger>
        </NavContainer>
    )
}

export default NavBar;
