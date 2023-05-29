import React from 'react';
import './App.css';
import Router from "./router/Router";
import './utils/styles/global.styles.css'
import Footer from "./components/Footer/Footer";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {SnackbarProvider} from "notistack";

function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider style={{fontSize: 20}}
                              anchorOrigin={{horizontal: "center", vertical: 'top'}}
                              maxSnack={5}
                              variant="info"
                              autoHideDuration={2000}>
                <div className="App">
                    <div className="App__inner">
                        <Router/>
                    </div>
                    <Footer/>
                </div>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
