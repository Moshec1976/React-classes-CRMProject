import React, { Component } from 'react';
import './ClientList.css';
import { Link } from 'react-router-dom';

class ClientList extends Component {
    state = {
        clients: [
            {
                name: 'משה',
                phoneNumber: '052-8090399',
                adress: 'הר הצופים 29 ',
                city: 'חולון',
                id: 1
            },

            {
                name: 'ג׳ניפר',
                phoneNumber: '052-1234567',
                adress: 'שקר כל שהוא ',
                city: 'חולון',
                id: 2
            },

            {
                name: 'דיאנה',
                phoneNumber: '052-1234567',
                adress: 'שקר כל שהוא ',
                city: 'חולון',
                id: 3
            },

            {
                name: 'שלי',
                phoneNumber: '052-1234567',
                adress: 'שקר כל שהוא ',
                city: 'חולון',
                id: 4
            },


        ]
    }

    render() {
            return(
            this.state.clients.map(client => {
                return(
                <div className="ClientBox" key={client.id}>
                    <Link to={'/' + client.id}>
                    <span className="ClientName">{client.name}</span>
                    <span className="ClientInfo">{client.phoneNumber}</span>
                    <span className="ClientInfo">{client.adress}</span>
                    <span className="ClientInfo">{client.city}</span>
                    </Link>
                </div>
                )
            }))
        }





    }
export default ClientList;