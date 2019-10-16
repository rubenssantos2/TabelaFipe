import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

class Menu extends Component {
    render() {
      return (
        <React.Fragment>

        <nav>
            <ul>
            <Link to="/media-de-preco">
                <li key="1">
                    Preço médio de veículo
                </li>
            </Link>
            <Link to="/consultas-realizadas">
                <li key="2">
                    Consultas realizadas
                </li>
            </Link>
            <Link to="/mais-procurados">
                <li key="3">
                    Os mais procurados
                </li>
            </Link>
            </ul>
        </nav>
            
        </React.Fragment>
      );
    }
  }
  
  export default Menu;