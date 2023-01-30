import { BtnHamBurger } from './styled'
import { bool, func } from 'prop-types'


const Hamburger = ({open, setOpen}) => {
   
  return (
    <BtnHamBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </BtnHamBurger>
  )
}
Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}
export default Hamburger;