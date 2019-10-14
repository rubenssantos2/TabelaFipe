import React, { Component } from 'react';
import AveragePriceResult from './AveragePriceResult/AveragePriceResult';

class AveragePrice extends Component {
    render() {
      return (
        <React.Fragment>

            <div className="average-price">

                <h2>Selecione as informações abaixo para realizar a pesquisa de valor médio de veículo:</h2>

                <form className=".average-price">
                    <select placeholder="Selecione a marca do veículo" className="vehicle-brand">
                        <option disabled selected className=".select-title">Digite ou selecione a marca do veículo</option>
                    </select>
                    <select placeholder="Selecione o modelo do veículo" className="vehicle-model">
                        <option disabled selected className=".select-title">Digite ou selecione o modelo do veículo</option>
                    </select>
                    <select placeholder="Selecione o ano do veículo" className="vehicle-year">
                        <option disabled selected className=".select-title">Digite ou selecione o ano do veículo</option>
                    </select>

                    <button type="submit">Pesquisar</button>
                </form>

                <AveragePriceResult />
                
            </div>

            
        </React.Fragment>
      );
    }
  }
  
  export default AveragePrice;