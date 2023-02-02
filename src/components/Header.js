import {Navbar, NavbarBrand} from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png'

const Header = () => {
    return(
        <Navbar dark color='primar
        y' sticky='top' expand='md'>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo'></img>
          </NavbarBrand>
      </Navbar>
    )
}

export default Header