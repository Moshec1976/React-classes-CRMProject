import React, { Component } from 'react';
import './ClientList.css';
import db from './config';
import { Link } from 'react-router-dom';


class ClientList extends Component {
    state = {
        clients: [],
        clientID: ''
    }


    componentDidMount() {
        db.collection('clients').get().then((snapshot) => {
            let clientsTemp = [];
            snapshot.docs.forEach(doc => {
                console.dir(doc.data())
                clientsTemp.push(doc.data())
            })

            this.setState({ clients: clientsTemp })
        })

        db.collection('clients').get().then((snapshot) => {
            console.log(snapshot)
            let clientID = snapshot.docs.id
            this.setState({ clientID: clientID})
        })
        
    }

    render() {
        return (
            <ul className="clientCardCOntainer">
                {this.state.clients.map((client, index) => {
                    return (
                        
                        <div key={index} className="clientCard">
                        
                            {client.name}
                            <br/>
                            {client.address}
                            <br/>
                            {client.phone}
                            <br/>
                            {client.email}
                        
                        </div>
                        
                        

                    )
                })}
            </ul>
        )
    }





}
export default ClientList;