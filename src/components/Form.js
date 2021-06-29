import React, {useContext, useState} from 'react';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../index";
import Loader from "./Loader";


const Form = () => {
    const {firestore} = useContext(Context)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [messages, loading] = useCollectionData(firestore.collection('messages'))

    const myInput = (e) => {

    }

    const sendMessage = async () => {
        firestore.collection('messages').add({
            name: name,
            email: email,
            message: message
        })
        setName('')
        setEmail('')
        setMessage('')
    }

    if (loading){
        return <Loader/>
    }



    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row content-form py-3">
                    <div className="col-6">
                        <div className="w-75 mb-3">
                            <label className="form-label">Имя <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control form-control-lg border-dark"
                                name="name"
                                autoComplete="off"
                                value={name}
                                onChange={myInput}
                            />
                        </div>
                        <div className="w-75">
                            <label className="form-label">E-mail <span className="text-danger">*</span></label>
                            <input
                                type="email"
                                className="form-control form-control-lg border-dark"
                                name="email"
                                autoComplete="off"
                                value={email}
                                onChange={myInput}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="">
                            <label className="form-label">Комментарий <span className="text-danger">*</span></label>
                            <textarea
                                className="form-control border-dark"
                                name="message"
                                rows="3"
                                value={message}
                                onChange={myInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button onClick={sendMessage} className="btn btn-lg btn-danger" type="button">Записать</button>
                </div>
            </div>
        </section>




    );
};

export default Form;
