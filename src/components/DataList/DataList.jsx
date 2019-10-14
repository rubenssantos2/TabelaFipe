import React, { Component } from 'react';
import axios from 'axios';

const api = {
    baseUrl: 'http://fipeapi.appspot.com/api/1/',
    type: 'carros',
    action: 'marcas',
    parameters: '',
    endUrl: '.json'
}

class DataList extends Component {
    constructor(){
        super();
        this.state = {
            fipeData: []
        }
    }

    componentDidMount(){
        axios
            .get(`${api.baseUrl}/${api.type}/${api.action}${api.endUrl}`)
            .then(resp => {
                console.log(resp);
                this.setState({fipeData: resp.data});
            })
    }
    render() {
      return (
        <React.Fragment>


        </React.Fragment>
      );
    }
  }
  
  export default DataList;