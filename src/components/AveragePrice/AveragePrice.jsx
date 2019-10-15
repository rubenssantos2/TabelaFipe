import React, { Component } from 'react';
import AveragePriceResult from './AveragePriceResult/AveragePriceResult';

import axios from 'axios';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';

const api = {
    baseUrl: 'http://fipeapi.appspot.com/api/1/',
    endUrl: '.json'
}

class AveragePrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            allBrands: [],
            actualBrandId: '',
            actualModelId: '',
            actualYearId: '',
            actualVehicle: [],
            models: [],
            brands: [],
            years: [],
            readyToSearch: false
        }
    }

    componentDidMount(){
        axios
            .get(`${api.baseUrl}carros/marcas${api.endUrl}`)
            .then(resp => {
                this.setState({allBrands: resp.data});
            })
    }

    handleModelChange = ( event ) => {
        this.setState({readyToSearch: false, actualModelId: [], actualBrandId: event.target.value});
        this.updateModels(event.target.value);
        } 

    updateModels(brandId){
        axios
            .get(`${api.baseUrl}carros/veiculos/${brandId}${api.endUrl}`)
            .then(resp => {
                this.setState({models: resp.data});
            })
        }

    handleYearChange = ( event ) => {
        this.setState({readyToSearch: false, actualYearId: [], actualModelId: event.target.value});
        this.updateYears(event.target.value);
        } 

    updateYears(modelId){
        let brandId = this.state.actualBrandId;

        axios
            .get(`${api.baseUrl}carros/veiculo/${brandId}/${modelId}${api.endUrl}`)
            .then(resp => {
                this.setState({years: resp.data});
            })
        }

    handleUpdateYear = ( event ) => {
        this.setState({actualYearId: event.target.value});
    }

    handleSubmit = ( event ) => {
        event.preventDefault();
        let actualBrandId = this.state.actualBrandId;
        let actualModelId = this.state.actualModelId;
        let actualYearId = this.state.actualYearId;
        let actualVehicle = this.state.actualVehicle;

        if(actualBrandId != '' && actualModelId != '' && actualYearId != ''){
            this.setState({readyToSearch: true});
        }
        let readyToSearch = this.state.readyToSearch;
        
        
        switch(true){
            case readyToSearch:
            this.searchVehicle(actualBrandId, actualModelId, actualYearId);
        }
    }

    searchVehicle(brandId, modelId, yearId){

        axios
            .get(`${api.baseUrl}carros/veiculo${brandId}/${modelId}/${yearId}${api.endUrl}`)
            .then(resp => {
                this.setState({
                    actualVehicle: {
                        id: resp.data.id,
                        year: resp.data.ano_modelo,
                        brand: resp.data.marca,
                        name: resp.data.name,
                        vehicle: resp.data.veiculo,
                        price: resp.data.preco,
                        fuel: resp.data.combustivel,
                        ref: resp.data.referencia,
                        fipe_cod: resp.data.fipe_codigo,
                        key: resp.data.key
                    }
                });
                
            })
    }

    render() {
        let allBrands = this.state.allBrands;
        let brandsList = allBrands.length > 0 && allBrands.map((brand, i) => {
            return (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
            )
        })

        let models = this.state.models;
        let modelsList = models.length > 0 && models.map((model, i) => {
            return (
                <option key={model.id} value={model.id}>{model.name}</option>
            )
        }, this);

        let years = this.state.years;
        let yearsList = years.length > 0 && years.map((year, i) => {
            return (
                <option key={year.id} value={year.id}>{year.name}</option>
            )
        })

      return (
        <React.Fragment>

        <Header />
        <Menu />

            <div className="average-price">

                <h2>Selecione as informações abaixo para realizar a pesquisa de valor médio de veículo:</h2>

                <form className=".average-price" onSubmit={this.handleSubmit}>
                    <select placeholder="Selecione a marca do veículo" className="vehicle-brand" onChange={this.handleModelChange}>
                        <option disabled selected className="select-title">Selecione a marca do veículo</option>
                        {brandsList}                        
                    </select>
                    <select placeholder="Selecione o modelo do veículo" className="vehicle-model" onChange={this.handleYearChange}>
                        <option disabled className="select-title">Selecione o modelo do veículo</option>
                        {modelsList}
                    </select>
                    <select placeholder="Selecione o ano do veículo" className="vehicle-year" onChange={this.handleUpdateYear}>
                        <option disabled selected className="select-title">Selecione o ano do veículo</option>
                        {yearsList}
                    </select>

                    <button type="submit">Pesquisar</button>
                </form>
                
                
                {this.state.readyToSearch && 
                    <AveragePriceResult 
                        id={this.state.actualVehicle.id} 
                        year={this.state.actualVehicle.year} 
                        brand={this.state.actualVehicle.brand} 
                        name={this.state.actualVehicle.name} 
                        vehicle={this.state.actualVehicle.vehicle} 
                        price={this.state.actualVehicle.price} 
                        fuel={this.state.actualVehicle.fuel} 
                        ref={this.state.actualVehicle.ref} 
                        fipe_cod={this.state.actualVehicle.fipe_cod} 
                        key={this.state.actualVehicle.key} />}
                
            </div>

            
        </React.Fragment>
      );
    }
  }
  
  export default AveragePrice;