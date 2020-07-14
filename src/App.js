import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login';
import { Dashboard } from './Dashboard';
import { Clients } from './Clients';
import { Client } from './Client';

class App extends Component {

    constructor() {
        super();
    }

    render () {
        return (
            <div className="App">
                <Router>

                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route>
                        <Route path="/clients">
                            <Clients />
                        </Route>
                        <Route path="/client">
                            <Client />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
  
}

export default App;
