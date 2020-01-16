import React, { Component } from 'react';

class ClientID extends Component{
    
    render(){
        return(
            <div>
                <h1>{this.props.match.params.ClientID}</h1>
            </div>
        )
    }
}




export default ClientID;