import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./root/App"
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import {PersistGate} from "redux-persist/integration/react";
import {persist, store} from "./store";
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter as Router} from 'react-router-dom';
import theme from "./theme";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persist}>
                <ChakraProvider theme={theme}>
                    <Router>
                        <App/>
                    </Router>
                </ChakraProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
