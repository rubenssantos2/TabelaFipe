import React from 'react';

const DataSearchedResult = (props) => {

    return(
    <React.Fragment>
        <table>
            <tbody>
                <tr className="data-result">
                    <td>Data da consulta: </td>
                    <td>{props.date}</td>
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
                    <td>Modelo:</td>
                    <td>{props.model}</td>
                </tr>
                <tr>
                    <td>Ano Modelo:</td>
                    <td>{props.year}</td>
                </tr>
                <tr>
                    <td className="price">Preço Médio:</td>
                    <td>R$ {props.price}</td>
                </tr>
            </tbody>
        </table>
    </React.Fragment>
    )
}

export default DataSearchedResult;