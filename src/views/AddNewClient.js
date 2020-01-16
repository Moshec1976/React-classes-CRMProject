import React, { Component } from 'react';
import './AddNewClient.css';

class AddNewClient extends Component {
    state = {
        name: '',
        phone: '',
        address: '',
        email: ''
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit} className="NewClientForm">
                <input onChange={this.handleName} className="NewClientInput" type="text" placeholder="שם הלקוח" />
                <input onChange={this.handlePhone} className="NewClientInput" type="text" placeholder="מספר טלפון " />
                <input onChange={this.handleAddress}className="NewClientInput" type="text" placeholder="כתובת " />
                <input onChange={this.handleEmail} className="NewClientInput" type="text" placeholder="דואר אלקטרוני " />
                <button className="SaveNewClient">שמור</button>
                <button className="SaveNewClient">חזור לתפריט הראשי</button>
            </form>
        )
    }
}


export default AddNewClient;