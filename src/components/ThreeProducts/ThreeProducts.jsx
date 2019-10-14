import React, { Component } from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';

class ThreeProducts extends Component {
    render() {
      return (
        <React.Fragment>

            <Header />
            <Menu />

            <div className="three-products">
                <h2>
                    Aqui estão os 3 veículos mais procurados até agora:
                </h2>

                <table>
                    <tr className="data-result">
                        <td>Data da consulta:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Código Fipe:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Marca:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Modelo:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ano Modelo:</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="price">Preço Médio:</td>
                        <td></td>
                    </tr>
                </table>

            </div>
            
        </React.Fragment>
      );
    }
  }
  
  export default ThreeProducts;