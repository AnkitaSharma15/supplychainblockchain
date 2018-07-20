import React, { Component } from 'react';
import {ProductDetails} from './components/ProductDetails';
import UpdateProductForm from './components/UpdateProductForm';
import {TrackingHistory} from './components/TrackingHistory';
import PopUp from './components/PopUp';

import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      history: [],
      product: {
       $class : "",
       description:"",
       facility: "",
       owner: "",
       productId: "",
       name: ""
      }
    }
  }
  fetchHistory=()=>{
    let $this = this;
    axios.get('http://localhost:3000/api/org.ahold.Facility')
      .then(function (response) {
        $this.setState({
          history: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  fetchProductInfo=()=>{
    let $this = this;
    axios.get('http://localhost:3000/api/org.ahold.Product')
      .then(function (response) {
        $this.setState({
          product: response.data[0]
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentWillMount(){
    this.fetchProductInfo();
    this.fetchHistory();
  }
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
                <h1>Supply Chain</h1>
                <h2>Product Tracking Feature Demo </h2>
              </div>
      <div className="container">
        <ProductDetails title={this.state.product.name} description={this.state.product.description}/>
        <PopUp className={``} buttonLabel={`Update Tracking Info`} updateLabel={`Update`} title={`Product Tracking`} buttonTitle={'Update Tracking Details'}>
          <UpdateProductForm handleUpdateHistory={this.fetchHistory} />
        </PopUp>
        <br/>
        <hr/>
        <TrackingHistory history={this.state.history}/>
      </div>
      </div>
    );
  }
}

export default App;
