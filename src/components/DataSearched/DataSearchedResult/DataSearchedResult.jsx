import React from 'react';

const DataSearchedResult = (props) => {

    return(
    <React.Fragment>
        <table>
            <tr className="data-result">
                <td>Data da consulta: </td>
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
    </React.Fragment>
    )
}

export default DataSearchedResult;