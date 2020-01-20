import React, { Component } from 'react';
import './AddNewClient.css';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDM7TaSxapcgBwnGnk2Xu5f_GXf-IzP9jA",
    authDomain: "scope-crm.firebaseapp.com",
    databaseURL: "https://scope-crm.firebaseio.com",
    projectId: "scope-crm",
    storageBucket: "scope-crm.appspot.com",
    messagingSenderId: "1028177414505",
    appId: "1:1028177414505:web:7bb00a193489d60a4c95f8",
    measurementId: "G-JX0F9FK4KK"
});

const db = firebaseApp.firestore();

export { db };

let clients = [];

class AddNewClient extends Component {
    state = {
        name: '',
        phone: '',
        address: '',
        email: '',
        id: ''

    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.dir(e.target.elements)

        clients = [...clients, this.state];

        // localStorage.setItem('clients', JSON.stringify(clients));


        db.collection("clients").add({
            name: this.state.name,
            phone: this.state.phone,
            address: this.state.address,
            email: this.state.email
        })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

            
            for (let i=0; i<e.target.elements.length; i++){
                if(e.target.elements[i].tagName == 'INPUT'){
                    e.target.elements[i].value = '';
                }
            }
            
            
        

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
                <input onChange={this.handleAddress} className="NewClientInput" type="text" placeholder="כתובת " />
                <input onChange={this.handleEmail} className="NewClientInput" type="text" placeholder="דואר אלקטרוני " />
                <button className="SaveNewClient">שמור</button>
                <button className="SaveNewClient">חזור לתפריט הראשי</button>
            </form>
        )
    }
}



export default AddNewClient;