import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Container,Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import CampsitesList from './features/campsites/CampsiteCard';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primaty' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo'></img>
          </NavbarBrand>
        </Container>
      </Navbar>
      <CampsitesList/>
    </div>
  );
}

export default App;
