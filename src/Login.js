import React, { Component } from 'react';
import './App.css';

export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: 'Adam',
            password: 'JeSuper'
        };
    }

    emailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
       console.log('email', this.state.email);
       console.log('password', this.state.password);

       event.preventDefault();
       window.location = '/dashboard';
    }

    render () {
        return (
            <div>
                <header>
                    <nav>
                        <h1>Clerk</h1>
                    </nav>
                </header>

                <section className="login">
                    <div className="container">
                        <h1>Sign in</h1>

                        <form onSubmit={this.handleSubmit}>
                            <input type="text" 
                                   value={this.state.email} 
                                   onChange={this.emailChange} 
                                   placeholder="Your email" 
                                   required/>

                            <input type="password" value={this.state.password} onChange={this.passwordChange} placeholder="Password" required/>
                            <button type="submit" className="sign">Login</button>
                        </form>
                    </div>
                </section>
                <footer>
                    <div>&copy Hlavac Inc. 2020</div>
                </footer>  
            </div>
        );
    }
  
}
