import React, { Component } from 'react';

class AveragePriceResult extends Component {
    render() {
      return (
        <React.Fragment>

            <div className="average-result">
                <table>
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
  
  export default AveragePriceResult;