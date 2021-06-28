import React from 'react';
import {Button} from "react-bootstrap";
import Message from "./Message";


const Messages = (props) => {
    let MessageElements = props.messages.messageData.map(el =>
        <Message key={el.id}
                 name={el.name}
                 email={el.email}
                 message={el.message}
        />

    );

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
    }
    return (

        <section className="hh-form-container">
            <div className="container">
                <div className="row">
                    {MessageElements}
                </div>
            </div>
        </section>
    );
}
export default Messages;
