import React, { Component } from 'react';
import './login.css';

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleUsername = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
    }

    render(){
        return(
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleUsername} placeholder="שם משתמש" className="username"/>
                    <br/>
                    <input type="text" onChange={this.handlePassword} placeholder="סיסמה" className="username"/>
                    <br/>
                    <button className="submitBtn">כניסה</button>
                </form>
            </div>
        )
    }
}



export default Login;