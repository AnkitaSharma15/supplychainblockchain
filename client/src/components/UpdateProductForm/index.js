import React, {Component} from 'react';
import axios from 'axios';
import uuidv1 from 'uuid/v1';




export default class UpdateProductForm extends Component{
    constructor(){
        super();
        this.state = {
            class: 'org.ahold.Facility',
            facilityName: '',
            facilityAddress: '',
            facilityZip: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateFacility = this.updateFacility.bind(this);
    }
    handleChange(event) {
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
      }
    updateFacility(event) {
        let $this = this;
        this.state.facilityId = uuidv1();
        alert('Product reached the facility: ' + this.state.facilityName);
        axios.post('http://localhost:3000/api/org.ahold.Facility', this.state)
        .then(function(response) {
            let changeFacilityData = {
                $class: 'org.ahold.ChangeFacility',
                product: 'resource:org.ahold.Product#product1',
                newFacility: 'resource:org.ahold.Facility#' + $this.state.facilityId
            }
            axios.post('http://localhost:3000/api/org.ahold.ChangeFacility', changeFacilityData);
            $this.props.handleUpdateHistory()
        })
        event.preventDefault();
      }

    render(){
        return(
            <form onSubmit={this.updateFacility}>
                <h4>Update Current Location </h4>
                <div className="form-group">
                    <label htmlFor="facilityName">Facility Name:</label>
                    <input type="text" name="facilityName" className="form-control" value={this.state.facilityName} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="facilityAddress">Facility Address:</label>
                    <input type="text" name="facilityAddress" className="form-control" value={this.state.facilityAddress} onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="facilityZipCode">Facility Zip Code:</label>
                    <input type="text" name="facilityZip" className="form-control" value={this.state.facilityZip} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
            
        )
    }
}