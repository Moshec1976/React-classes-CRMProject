import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import db from './config';

class ClientID extends Component{

    state ={
        clientID: ''
    }

    componentDidMount(){
        db.collection('clients').get().then((snapshot) => {
            console.log(snapshot)
            let clientID = snapshot.docs.id
            this.setState({ clientID: clientID})
        })
        
        
    }
    
    render(){
        return(
            <div>
                <Link to={ '/' + this.state.clientID }>
                
                </Link>
                {/* <h1>{this.props.match.params.ClientID}</h1> */}
                
            </div>
        )
    }
}




export default ClientID;