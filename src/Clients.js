import React, { Component } from "react";
import './Clients.css';

export class Clients extends Component {
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
                                <li className="clientsSelected"><a href="/clients">Klienti</a></li>
                                <li><a href="/login">Kalendár</a></li>
                                <li><a href="/login">Kalkulačky</a></li>
                                <li><a href="/login">Fakturácie</a></li>
                                <li><a href="/login">Vzory a dokumenty</a></li>
                            </ul>
                        </nav>  
                    </div>

                    <div className="clientsContainer">

                        <div className="clientsSearch">
                            <h1>Klienti</h1>
                            <div>
                                <form>
                                    <input className="clientsInput" type="search" placeholder="Zadajte meno klienta"></input>
                                    <button type="submit">Hľadať</button>
                                </form>
                            </div>
                        </div>

                        <div className="clientsContent">
                            <div className="clientsList">
                                <table className="clientsTable">
                                    <thead>
                                        <tr>
                                            <th>Meno</th>
                                            <th>Posledná zmena</th>
                                            <th>Počet spisov</th>
                                            <th>Založený</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="/client">Peter Mrkva</a></td>
                                            <td>13.02.2020</td>
                                            <td>15</td>
                                            <td>01.01.2020</td>
                                        </tr>
                                        <tr>
                                            <td>Jozef Vnat</td>
                                            <td>17.06.2020</td>
                                            <td>18</td>
                                            <td>21.08.2019</td>
                                        </tr>
                                        <tr>
                                            <td>Martin Cesnak</td>
                                            <td>12.06.2020</td>
                                            <td>4</td>
                                            <td>21.08.2019</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div> 
            </section>
        );
    }
}