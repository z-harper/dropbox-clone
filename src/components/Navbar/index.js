
import { NavbarContainer, NavLogo, AcctContainer, DStoreImg, AcctText, AcctNumber } from './Navbar.styled';
import Logo from '../../images/dstore-logo2.png';

const Navbar = ({ acctAddress }) => {
  return (
    <NavbarContainer>
      <NavLogo>
        <DStoreImg src={Logo} alt='dStore' />
      </NavLogo>
      <AcctContainer>
        <AcctText>Account Number:</AcctText>
        <AcctNumber>{acctAddress}</AcctNumber>
      </AcctContainer>
    </NavbarContainer>
  )
}

export default Navbar
