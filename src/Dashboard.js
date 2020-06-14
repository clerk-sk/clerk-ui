import React, { Component } from "react";
import './Dashboard.css';

export class Dashboard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section>
                <div className="sideBar">
                    <h3>JUDR. Jakub Hlavac</h3>
                    <h4>Peter & Partners</h4>
                </div>

                <div className="dashContainer">
                    <div className="head">
                        <nav className="dashNavbar">
                            <ul className="dashNav">
                                <li><a href="/login">Klienti</a></li>
                                <li><a href="/login">Kalendár</a></li>
                                <li><a href="/login">Kalkulačky</a></li>
                                <li><a href="/login">Fakturácie</a></li>
                                <li><a href="/login">Vzory a dokumenty</a></li>
                            </ul>
                        </nav>  
                    </div>

                    <div className="content">
                        <p>"Perfection is achieved, not when there is nothing more to add, 
                            but when there is nothing left to take away." 
                            -Antoine de Saint-Exupery
                        </p>
                    </div>

                    <div className="info">
                        
                    </div>
                </div> 
            </section>
        );
    }
}