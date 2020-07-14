import React, { Component } from "react";
import './Client.css';

export class Client extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section>
                <div className="sideBar">
                    <a href="/dashboard">Clerk.sk</a>
                    <h3>JUDR. Jakub Hlavac</h3>
                    <h4>Peter & Partners</h4>
                </div>

                <div className="dashContainer">
                    <div className="head">
                        <nav className="dashNavbar">
                            <ul className="dashNav">
                                <li><a href="/clients">Klienti</a></li>
                                <li><a href="/login">Kalendár</a></li>
                                <li><a href="/login">Kalkulačky</a></li>
                                <li><a href="/login">Fakturácie</a></li>
                                <li><a href="/login">Vzory a dokumenty</a></li>
                            </ul>
                        </nav>  
                    </div>

                    <div className="clientContent">
                        <h2>Peter Mrkva</h2>
                        <div></div>
                    </div>

                    <div className="info">
                        <div className="dashboardLastOpened">
                            <h3>Informácie o klientovi</h3>
                            <p>daky text o niecom</p>
                        </div>
                        <div className="dashboardNotes">
                            <h3>Poznámky</h3>
                        </div>
                    </div>
                </div> 
            </section>
        );
    }
}