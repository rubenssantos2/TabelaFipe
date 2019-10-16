import React, { Component } from 'react';
import './Header.css';

//Images
import LinxLogo from './linx-logo.png';

import Menu from '../Menu/Menu';

class Header extends Component {
    render() {
      return (
        <React.Fragment>

            <header>
              <img src={LinxLogo} alt="Linx" />
              <h1>Consulta da Tabela Fipe</h1>
              <Menu />
            </header>
            
        </React.Fragment>
      );
    }
  }
  
  export default Header;