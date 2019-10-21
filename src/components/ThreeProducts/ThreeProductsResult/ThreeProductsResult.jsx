import React from 'react';

const ThreeProductsResult = (props) => {

    return(
    <React.Fragment>
        <table>
            <tbody>
                <tr>
                    <td>Modelo:</td>
                    <td>{props.model}</td>
                </tr>
                <tr>
                    <td>Código Fipe:</td>
                    <td>{props.fipe_cod}</td>
                </tr>
                <tr>
                    <td>Marca:</td>
                    <td>{props.brand}</td>
                </tr>
                <tr>
                    <td>Ano Modelo:</td>
                    <td>{props.year}</td>
                </tr>
                <tr>
                    <td className="price">Preço Médio:</td>
                    <td>R$ {props.price}</td>
                </tr>
                <tr className="data-result">
                    <td>Qtde de consultas </td>
                    <td>{props.consults}</td>
                </tr>
            </tbody>
        </table>
    </React.Fragment>
    )
}

export default ThreeProductsResult;