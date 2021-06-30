import React, {useContext, useState} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../index";
import Loader from "./Loader";
import firebase from "firebase";


const Form = () => {
    const {firestore} = useContext(Context)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [messageDirty, setMessageDirty] = useState(false)
    const [nameError, setNameError] = useState('Поле ИМЯ не должно быть пустым')
    const [emailError, setEmailError] = useState('Поле E-mail не должно быть пустым')
    const [messageError, setMessageError] = useState('Поле КОММЕНТАРИЙ не должно быть пустым')

    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))

    const myInputName = (e) => {
        setName(e.target.value)
    }
    const myInputEmail = (e) => {
        setEmail(e.target.value)
    }
    const myInputMessage = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = async () => {
        firestore.collection('messages').add({
            name: name,
            email: email,
            message: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setName('')
        setEmail('')
        setMessage('')
    }

    if (loading){
        return <Loader/>
    }



    return (
        <div className={"content-form px-5"}>
                <div className="row py-3">
                    <div className="col-6">
                        <div className="w-75 mb-4">
                            <label className="form-label">Имя <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                name="name"
                                autoComplete="off"
                                value={name}
                                onChange={myInputName}
                            />
                            {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                        </div>
                        <div className="w-75 pt-4">
                            <label className="form-label">E-mail <span className="text-danger">*</span></label>
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                name="email"
                                autoComplete="off"
                                value={email}
                                onChange={myInputEmail}
                            />
                            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Комментарий <span className="text-danger">*</span></label>
                            <textarea
                                className="form-control"
                                name="message"
                                rows="6"
                                value={message}
                                onChange={myInputMessage}
                            />
                            {(messageDirty && messageError) && <div style={{color:'red'}}>{messageError}</div>}
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button onClick={sendMessage} className="btn btn-lg btn-danger" type="button">Записать</button>
                </div>
            </div>
    );
};

export default Form;
