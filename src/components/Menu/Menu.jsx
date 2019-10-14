import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
      return (
        <React.Fragment>

        <nav>
            <ul>
            <Link to="/media-de-preco">
                <li key="1">
                    Pesquisa de preço médio de veículo
                </li>
            </Link>
            <Link to="/consultas-realizadas">
                <li key="2">
                    Lista de consultas realizadas
                </li>
            </Link>
            <Link to="/mais-procurados">
                <li key="3">
                    Os 3 veículos mais procurados até o momento
                </li>
            </Link>
            </ul>
        </nav>
            
        </React.Fragment>
      );
    }
  }
  
  export default Menu;