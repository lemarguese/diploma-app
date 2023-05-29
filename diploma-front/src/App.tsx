import React from 'react';
import './App.css';
import Router from "./router/Router";
import './utils/styles/global.styles.css'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <div className="App__inner">
                <Header />
                <Router/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
