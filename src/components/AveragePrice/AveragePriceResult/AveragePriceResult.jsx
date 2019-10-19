import React from 'react';

const AveragePriceResult = (props) => {

        return (
          <React.Fragment>
    
              <div className="average-result">
                  <table>
                      <tr>
                          <td>Código Fipe:</td>
                          <td>{props.fipe_cod}</td>
                      </tr>
                      <tr>
                          <td>Marca:</td>
                          <td>{props.brand}</td>
                      </tr>
                      <tr>
                          <td>Modelo:</td>
                          <td>{props.vehicle}</td>
                      </tr>
                      <tr>
                          <td>Ano Modelo:</td>
                          <td>{props.year}</td>
                      </tr>
                      <tr>
                          <td className="price">Preço Médio:</td>
                          <td>{props.price}</td>
                      </tr>
                  </table>
              </div>
    
          </React.Fragment>
        );
    } 
  
  export default AveragePriceResult;