import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';


firebase.initializeApp(
    {
        apiKey: "AIzaSyClmtes_G7ezapebVHTrc89PCGX2abjCvc",
        authDomain: "honeyhunters-12716.firebaseapp.com",
        projectId: "honeyhunters-12716",
        storageBucket: "honeyhunters-12716.appspot.com",
        messagingSenderId: "705809748253",
        appId: "1:705809748253:web:dc87243496fcc8704911f4",
        measurementId: "G-1V834Q82ZE"
    });

export const Context = createContext(null)
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{firebase, firestore}}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

