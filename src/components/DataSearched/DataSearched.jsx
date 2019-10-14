import React, { Component } from 'react';
import axios from 'axios';

class DataSearched extends Component {

    render() {

      return (
        <React.Fragment>
            <div className="data-searched">
                <h2>
                    Aqui estão as consultas de veículos que você fez até agora:
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
  
  export default DataSearched;