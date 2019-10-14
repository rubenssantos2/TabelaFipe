import React, { Component } from 'react';
import axios from 'axios';

const api = {
    baseUrl: 'http://fipeapi.appspot.com/api/1/',
    type: 'carros',
    action: 'marcas',
    parameters: '',
    endUrl: '.json'
}

class ExampleOfRequest extends Component {
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
        const { fipeData } =  this.state;
      return (
        <React.Fragment>
            {fipeData.map((data) => {

                return (
                    <p>
                        { data.name }
                    </p>
                )
            })}
        </React.Fragment>
      );
    }
  }
  
  export default ExampleOfRequest;