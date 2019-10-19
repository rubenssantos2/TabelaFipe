import React, { Component } from 'react';
import AveragePriceResult from './AveragePriceResult/AveragePriceResult';

import axios from 'axios';

import Header from '../Header/Header';

const apiFipe = {
    baseUrl: 'http://fipeapi.appspot.com/api/1/',
    endUrl: '.json'
}

class AveragePrice extends Component {
    constructor(props){
        super(props);
        this.state = {
            allBrands: [],
            models: [],
            brands: [],
            years: [],
            actualBrandId: '',
            actualModelId: '',
            actualYearId: '',
            actualVehicle: [],
            readyToRender: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios
            .get(`${apiFipe.baseUrl}carros/marcas${apiFipe.endUrl}`)
            .then(resp => {
                this.setState({allBrands: resp.data, actualBrandId: this.state.allBrands["0"]});
            })
    }

    handleBrandChange = ( event ) => {
        this.setState({readyToRender: false, actualBrandId: event.target.value, actualModelId: '', actualYearId: ''});
        this.updateModels(event.target.value);
        } 

    updateModels(brandId){
        axios
            .get(`${apiFipe.baseUrl}carros/veiculos/${brandId}${apiFipe.endUrl}`)
            .then(resp => {
                this.setState({models: resp.data});
            })
        }

    handleModelChange = ( event ) => {
        
        this.setState({readyToRender: false, actualYearId: '', actualModelId: event.target.value});
        this.updateYears(event.target.value);
        } 

    updateYears(modelId){

        axios
            .get(`${apiFipe.baseUrl}carros/veiculo/${this.state.actualBrandId}/${modelId}${apiFipe.endUrl}`)
            .then(resp => {
                this.setState({years: resp.data});
            })
        }

    handleYearChange = ( event ) => {

        this.setState({readyToRender: false, actualYearId: event.target.value});
        
        this.searchVehicle(this.state.actualBrandId, this.state.actualModelId, event.target.value);
            
    }

    handleSubmit = ( event ) => {
        event.preventDefault();

        if(this.state.actualVehicle){

            this.setState({readyToRender: true});
        }
        
        
    }

    searchVehicle(brandId, modelId, yearId){

        axios
            .get(`${apiFipe.baseUrl}carros/veiculo/${brandId}/${modelId}/${yearId}${apiFipe.endUrl}`)
            .then(resp => {
                this.setState({actualVehicle: resp.data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    postVehicle(year, brand, name, vehicle, price, fuel, ref, fipe_cod, key){
        axios
        .post('/api/Vehicles/', {
            year: year,
            brand: brand,
            name: name,
            vehicle: vehicle,
            price: price,
            fuel: fuel,
            ref: ref,
            fipe_cod: fipe_cod,
            key: key
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
     
        let brandsList = this.state.allBrands.length > 0 && this.state.allBrands.map((brand) => {
            return (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
            )
        })

        let modelsList = this.state.models.length > 0 && this.state.models.map((model) => {
            return (
                <option key={model.id} value={model.id}>{model.name}</option>
            )
        }, this);

        let yearsList = this.state.years.length > 0 && this.state.years.map((year) => {
            return (
                <option key={year.id} value={year.id}>{year.name}</option>
            )
        })

      return (
        <React.Fragment>

        <Header />

            <div className="average-price data-show">


                    <h2>
                        Preço médio de veículo
                    </h2>

                    <h3>Selecione as informações abaixo para realizar a pesquisa de valor médio de veículo:</h3>

                    <form className=".average-price" onSubmit={this.handleSubmit}>
                        <label htmlFor="brandSelect">
                            Marca do veículo:
                        </label>
                        <select placeholder="Selecione a marca do veículo" name="brandSelect" className="vehicle-brand" onChange={this.handleBrandChange}>
                            <option selected disabled></option>
                            {brandsList}                        
                        </select>
                        <label htmlFor="modelSelect">
                            Modelo do veículo:
                        </label>
                        <select placeholder="Selecione o modelo do veículo" name="modelSelect" className="vehicle-model" onChange={this.handleModelChange}>
                            <option selected disabled></option>
                            {modelsList}
                        </select>
                        <label htmlFor="yearSelect">
                            <option selected disabled></option>
                            Ano do veículo:
                        </label>
                        <select placeholder="Selecione o ano do veículo" name="yearSelect" className="vehicle-year" onChange={this.handleYearChange}>
                            <option selected disabled></option>
                            {yearsList}
                        </select>

                        <button type="submit">Pesquisar</button>
                    </form>
                    
                    {this.state.readyToRender && 
                        <AveragePriceResult 
                            id={this.state.actualVehicle.id} 
                            year={this.state.actualVehicle.ano_modelo} 
                            brand={this.state.actualVehicle.marca} 
                            name={this.state.actualVehicle.name} 
                            vehicle={this.state.actualVehicle.veiculo} 
                            price={this.state.actualVehicle.preco} 
                            fuel={this.state.actualVehicle.combustivel} 
                            refs={this.state.actualVehicle.referencia} 
                            fipe_cod={this.state.actualVehicle.fipe_codigo} 
                            key={this.state.actualVehicle.key}
                            readyToRender={this.state.readyToRender} />}
                        
            </div>

            
        </React.Fragment>
      );
    }
  }
  
  export default AveragePrice;