import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className={"container px-5"}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
