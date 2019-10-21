import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header';

import ThreeProductsResult from './ThreeProductsResult/ThreeProductsResult';

class ThreeProducts extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: ''
        }
    }

    componentDidMount(){
        axios
            .get(`http://localhost/tabela-fipe/backend/tabelafipe-backend/api/vehicles-top/`)
            .then(resp => {
                this.setState({products: resp.data});
            })
    }


    render() {
        let threeProductsList = this.state.products.length > 0 && this.state.products.map((product) => {
            return (
                <ThreeProductsResult fipe_cod={product.codigo_fipe} brand={product.marca} model={product.veiculo} year={product.ano} price={product.preco} consults={product.consultas} />
            )
        })

      return (
        <React.Fragment>

            <Header />

            <div className="three-products data-show">

                <h2>
                    Os mais procurados
                </h2>

                <h3>
                    Aqui estão os 3 veículos mais procurados até agora:
                </h3>

                {this.state.products && threeProductsList}
                {!this.state.products && <p>Carregando resultado...</p>}

            </div>
            
        </React.Fragment>
      );
    }
  }
  
  export default ThreeProducts;