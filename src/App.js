import React, {Component} from 'react';
import './App.css';
import MessagesContainer from "./Components/Messages/MessagesContainer";
import * as firebase from "firebase";
import AddFormContainer from "./Components/AddForm/AddFormContainer";


export default class App extends Component {
    componentDidMount(){
        const db = firebase.database();
        console.log(db);
    }
    render() {
        return (
            <div className="wrapper">
                <div className="content-wrapper">
                    <AddFormContainer/>
                    <MessagesContainer/>
                </div>
            </div>
        );
    }
}
