import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <nav>
                <h1>Clerk</h1>
            </nav>
        </header>
        <section class="login">
            <div class="container">
                <h1>Sign in</h1>
                <form action="/petov_backend.php" method="POST">
                    <input type="email" name="email" placeholder="Your email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <button type="submit" class="sign">Login</button>
                </form>
            </div>
        </section>
        <footer>
            <div>&copy Hlavac Inc. 2020</div>
        </footer>  
    </div>
  );
}

export default App;
