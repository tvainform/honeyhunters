import React from 'react';
import logo from '../img/logo.png';
import icon from '../img/icon.png'
import Form from "./Form";

const Header = () => {
    return (
    <section className="content-header py-5">
        <div className="container-fluid">
            <div className="row">
                 <div className="col"><img className="logo" src={logo} alt="logo" /></div>
            </div>
            <div className="row py-3">
                <div className="col"><img className="icon mx-auto d-block" src={icon} alt="icon" /></div>
            </div>
            <Form/>
        </div>
    </section>
    );
};

export default Header;