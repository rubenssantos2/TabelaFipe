import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import DataSearchedResult from './DataSearchedResult/DataSearchedResult';


class DataSearched extends Component {

    constructor(props){
        super(props);

        this.state = {
            consults: ''
        }
    }
    

    componentDidMount(){
        axios
            .get(`http://localhost/tabela-fipe/backend2/api/consults/`)
            .then(resp => {
                this.setState({consults: resp.data});
            })
    }

    render() {

        let searchedList = this.state.consults.length > 0 && this.state.consults.map((consult) => {
            return (
                <DataSearchedResult date={consult.data} fipe_cod={consult.codigo_fipe} brand={consult.marca} model={consult.veiculo} year={consult.ano} price={consult.preco} />
            )
        })

      return (
        <React.Fragment>
            <Header />

            <div className="data-searched data-show">

                <h2>
                    Consultas realizadas
                </h2>

                <h3>
                    Aqui estão as consultas de veículos que você fez até agora:
                </h3>

                {this.state.consults && searchedList}
                {!this.state.consults && <p>Carregando consultas...</p>}
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default DataSearched;