import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Login';
import { Dashboard } from './Dashboard';

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
                    </Switch>
                </Router>
            </div>
        );
    }
  
}

export default App;
