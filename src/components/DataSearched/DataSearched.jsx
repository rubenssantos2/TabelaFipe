import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import DataSearchedResult from './DataSearchedResult/DataSearchedResult';

const api = {
    baseUrl: 'http://localhost/tabela-fipe/backend'
}
class DataSearched extends Component {

    constructor(props){
        super(props);

        this.state = {
            consults: ''
        }
    }
    

    componentDidMount(){
        axios
            .get(`${api.baseUrl}`)
            .then(resp => {
                this.setState({consults: resp.data});
            })
    }

    render() {

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

                {this.state.consults && <DataSearchedResult consults={this.state.consults} />}
                {!this.state.consults && <p>Carregando consultas...</p>}
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default DataSearched;