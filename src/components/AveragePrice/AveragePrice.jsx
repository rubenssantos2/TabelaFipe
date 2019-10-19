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
            readyToSearch: false,
            readyToRenderResult: false
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
        this.setState({readyToSearch: false, actualModelId: '', actualBrandId: event.target.value, actualYearId: ''});
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
        
        this.setState({readyToSearch: false, actualYearId: '', actualModelId: event.target.value});
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

        this.setState({actualYearId: event.target.value});
        debugger;

        axios
            .get(`${apiFipe.baseUrl}carros/veiculo/${this.state.actualBrandId}/${this.state.actualModelId}/${event.target.value}${apiFipe.endUrl}`)
            .then(resp => {
                this.setState({actualVehicle: resp.data});
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleSubmit = ( event ) => {
        event.preventDefault();
        let actualBrandId = this.state.actualBrandId;
        let actualModelId = this.state.actualModelId;
        let actualYearId = this.state.actualYearId;
        let actualVehicle = this.state.actualVehicle;

        if(actualBrandId != '' && actualModelId != '' && actualYearId != ''){

            this.postVehicle(this.state.actualVehicle);
                
            let readyToSearch = true;
            

            this.setState({readyToSearch: readyToSearch});
            

            this.searchVehicle(actualBrandId, actualModelId, actualYearId);
        }
        
        
    }

    searchVehicle(brandId, modelId, yearId){

        axios
            .get(`${apiFipe.baseUrl}carros/veiculo/${brandId}/${modelId}/${yearId}${apiFipe.endUrl}`)
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
                            key={this.state.actualVehicle.key}
                            readyToRender={this.state.readyToRenderResult} />
            </div>

            
        </React.Fragment>
      );
    }
  }
  
  export default AveragePrice;