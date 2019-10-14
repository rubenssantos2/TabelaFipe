import React, { Component } from 'react';

class Menu extends Component {
    render() {
      return (
        <React.Fragment>

            <nav>
                <ul>
                    <li key="1">
                        Pesquisa de preço médio de veículo
                    </li>
                    <li key="2">
                        Lista de consultas realizadas
                    </li>
                    <li key="3">
                        Os 3 veículos mais procurados até o momento
                    </li>
                </ul>
            </nav>
            
        </React.Fragment>
      );
    }
  }
  
  export default Menu;