import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import * as firebase from 'firebase'
/*import {initializeApp} from "firebase";*/

const firebaseConfig = {
    apiKey: "AIzaSyDOncgrRVKkdECjGJd8xJ3xcz7EdnabeHk",
    authDomain: "incident-itk.firebaseapp.com",
    databaseURL: "https://incident-itk.firebaseio.com",
    projectId: "incident-itk",
    storageBucket: "incident-itk.appspot.com",
    messagingSenderId: "652187485400",
    appId: "1:652187485400:web:6b055eed1f22c74e1083ad"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);

serviceWorker.unregister();
